import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: "AIzaSyCsT7FcT1lAbFCrwfU01V2JzZvWK5_gy34",
  authDomain: "mobile-wedding-invitatio-4e178.firebaseapp.com",
  databaseURL: "https://mobile-wedding-invitatio-4e178-default-rtdb.firebaseio.com",
  projectId: "mobile-wedding-invitatio-4e178",
  storageBucket: "mobile-wedding-invitatio-4e178.appspot.com",
  messagingSenderId: "440564770479",
  appId: "1:440564770479:web:c1b87c57a2330b7b97d65a"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
