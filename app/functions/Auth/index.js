import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; //works ? yes


function googleSignIn(){
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)/*.then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
    console.log("is connected")
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage)
    // ...
  });*/
}



function handleSignUp (email, password) {

  return firebase.auth().createUserWithEmailAndPassword(email, password)
    /*.catch(error => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(error.message+" with code :"+error.code)
  
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  })*/
}

function handleSignIn (email, password) {

   return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err))
    /*.catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
    
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      //document.getElementById('quickstart-sign-in').disabled = false;
  })*/
}


export {handleSignIn,handleSignUp, googleSignIn}
