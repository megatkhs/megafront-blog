import * as firebase from 'firebase/app'

import 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCAkcQAH5PxK2h25-pxc-NMm4Ch0LK86T8',
  authDomain: 'megatkhs-blog.firebaseapp.com',
  databaseURL: 'https://megatkhs-blog.firebaseio.com',
  projectId: 'megatkhs-blog',
  storageBucket: 'megatkhs-blog.appspot.com',
  messagingSenderId: '274398269960',
  appId: '1:274398269960:web:f3be40a89d1f13af2237bd',
  measurementId: 'G-PR3XHBRG9C',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
