// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken} from 'firebase/messaging';

// // Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
// var firebaseConfig = {

//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     projectId: "dualarena-a9443",
//     //... 
// };
// initializeApp(firebaseConfig);



// //...
// const messaging = getMessaging();

// export const requestForToken = async () => {
//     return getToken(messaging, { vapidKey: "BLcd6eep3ngl0bf_4tdx0mRc-a_eSvSJQf2E0sA2oLTyTKD0zfFKfl0qAE21Y-wc-02V2k0x3LotCmhr7tZ1dEc" })
//       .then((currentToken) => {
//         if (currentToken) {
//           console.log('current token for client: ', currentToken);
//           // Perform any other neccessary action with the token
//         } else {
//           // Show permission request UI
//           console.log('No registration token available. Request permission to generate one.');
//         }
//       })
//       .catch((err) => {
//         console.log('An error occurred while retrieving token. ', err);
//       });
//   };