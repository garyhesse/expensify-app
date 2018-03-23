import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };

  // // child_removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // // child_changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });
  
  // // child_added
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').push({
  //   description: 'Coffee',
  //   note: 'Note about coffee',
  //   amount: 1295,
  //   createdAt: 13400
  // });
  // database.ref('expenses').push({
  //   description: 'Tea',
  //   note: 'Note about tea',
  //   amount: 995,
  //   createdAt: 13500
  // });
  // database.ref('expenses').push({
  //   description: 'Milk',
  //   note: 'Note about milk',
  //   amount: 750,
  //   createdAt: 14400
  // });


  // database.ref().set({
  //   name: 'Gary Hesse',
  //   age: 64,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software developer',
  //     company: 'Google'
  //   },
  //   location: {
  //       city: 'Leavenworth',
  //       country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data stored successfully');
  // }).catch((e) => {
  //   console.log('Error writing data', e);
  // });

  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // }, (e) => {
  //   console.log('Error with data here', e);
  // });

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // }).then(() => {
  //   console.log('Data updated successfully');
  // }).catch((e) => {
  //   console.log('Error updating data', e);
  // });