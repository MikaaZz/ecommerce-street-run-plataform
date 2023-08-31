const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllUsers = async (req, res, next) => {
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
};

exports.createUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password, // Note: In a real-world app, never store passwords in plain text
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
};
