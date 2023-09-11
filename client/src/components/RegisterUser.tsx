import React from 'react';
import Image from 'next/image';

import firebase from '@/api/auth/firebase/firebase';

const uiConfig = {
  // signInFlow: 'popup',
  // signInOptions: [
  //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  // ],
  // callbacks: {
  //   signInSuccessWithAuthResult: () => false,
  // },
};

// export default function Register() {
//   const [isSignedIn, setSignedIn] = React.useState(false);

//   React.useEffect(() => {
//     const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
//       setSignedIn(!!user);
//     });
//     return () => unregisterAuthObserver();
//   }, []);

  return (
    <div>
      {/* {isSignedIn ? (
        <div>
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          <Image
            alt="profile"
            src={firebase.auth().currentUser.photoURL}
          />
        </div>
      ) : (
        <div>
          <h1>Register</h1>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      )} */}
    </div>
  );
}
