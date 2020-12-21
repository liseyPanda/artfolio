import firebase from 'firebase/app';
import 'firebase/storage';

//configuration for my app
var firebaseConfig = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: 'gs://my-project-1505746769096.appspot.com',
  storageBucket: 'my-project-1505746769096.appspot.com'
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

export {
  storage, firebase as default
}
