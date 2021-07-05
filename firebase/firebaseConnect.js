const firebase = require('firebase');

const fb = firebase.initializeApp({
    apiKey: "AIzaSyBhbcGDJdznyBWWWwS92OULzsXkSFO6NWo",
    authDomain: "crayond-ba7be.firebaseapp.com",
    projectId: "crayond-ba7be",
    databaseURL: "https://crayond-ba7be-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

module.exports = fb ;
