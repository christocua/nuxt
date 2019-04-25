import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyA4yWVlNqbohUmg9CjXYYYvyVws7VvWhIg",
  authDomain: "nuxt-3a978.firebaseapp.com",
  databaseURL: "https://nuxt-3a978.firebaseio.com",
  projectId: "nuxt-3a978",
  storageBucket: "nuxt-3a978.appspot.com",
  messagingSenderId: "300499277573"
};

if(!firebase.apps.length){
  firebase.initializeApp(config);
}
  
const db = firebase.firestore()
export default firebase
export { db }