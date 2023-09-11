const { PrismaClient } = require('@prisma/client');
const admin = require('firebase-admin');
const prisma = new PrismaClient();

// Initialize Firebase Admin SDK
const serviceAccount = require('path/to/service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function verifyUser(req, res, next) {
  const idToken = req.headers.authorization;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: 'Authentication failed',
    });
  }
}

exports.getAllUsers = [
  verifyUser,
  async (req, res, next) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json({
        status: 'success',
        data: {
          users,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: 'Error fetching data',
      });
    }
  },
];

exports.createUser = [
  verifyUser,
  async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password, // Note: In a real-world app, you'd hash the password
        },
      });

      res.status(201).json({
        status: 'success',
        data: {
          user: newUser,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message,
      });
    }
  },
];
