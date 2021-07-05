const firebase = require('./firebaseConnect');


module.exports = {
    readData : (callback)=>{
        firebase.database().ref('Projects/').once("value").then((snapshot)=>{
          callback(snapshot.val());
        })
    }
}

