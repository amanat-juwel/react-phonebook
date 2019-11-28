import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAOTyZAb3Nk_g3BKGxOCOYY_6OlBrFWQ-s",
    authDomain: "phonebook-f8b6c.firebaseapp.com",
    databaseURL: "https://phonebook-f8b6c.firebaseio.com",
    projectId: "phonebook-f8b6c",
    storageBucket: "phonebook-f8b6c.appspot.com",
    messagingSenderId: "234094155385",
    appId: "1:234094155385:web:0de367a1035d0c113466a8"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// REFERENCE CODE ARE BELOW

// Setup Expenses Dummy
// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });

// database.ref('expenses').push({
//   description: 'Phone Bill',
//   note: '',
//   amount: 5900,
//   createdAt: 976123498764
// });

// database.ref('expenses').push({
//   description: 'Food',
//   note: '',
//   amount: 1200,
//   createdAt: 976123498765
// });

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('child_removed');
//   console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('child_changed');
//   console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('child_added');
//   console.log(snapshot.key, snapshot.val());
// })

// const onValueChange = database.ref('expenses')
//   .on('value' , (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
    
//     console.log(expenses);

//   }, (e) => {
//     console.log('Error fetching data.' , e);
//   });



// //PUSH
// database.ref('notes').push({
//   title: 'Index',
//   body: 'All the course that will be discussed'
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, VueJs'
// });

// //FETCH DATA - ONCE
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data.' , e);
//   });

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data.' , e);
//   });

// //FETCH DATA - ONCHANGE
// const onValueChange = database.ref()
//   .on('value' , (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }, (e) => {
//     console.log('Error fetching data.' , e);
//   });

// //to stop fetching data on change on data
// //database.ref().off(onValueChange);

// //STORE
// database.ref().set({
//   name: 'Amanat Juwel',
//   age: 26,
//   location: {
//     city: 'Dhaka',
//     country: 'Bangladesh'
//   }  
// }).then(() => {
//   console.log('data added');
// }).catch((e) => {
//   console.log('Something went wrong.' , e);
// });

// //database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('Chittagong');

// database.ref('attributes').set({
//   height: 5.8,
//   weight: 63
// });

// //UPDATE
// database.ref().update({
//   age : 28,
//   job: 'Software Developer',
//   'location/city': 'Chittagong'
// }).then(() => {
//   console.log('data updated');
// }).catch((e) => {
//   console.log('Something went wrong.' , e);
// });

// //DELETE
// database.ref('age')
//   .remove()
//   .then(() => {
//     console.log('data removed');
//   }).catch((e) => {
//     console.log('Something went wrong.' , e);
//   });

 