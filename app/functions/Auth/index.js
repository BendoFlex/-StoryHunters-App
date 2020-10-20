const firebase = require("firebase")

function handleSignUp (email, password) {

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(error.message+" with code :"+error.code)
  
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  })
}

function handleSignIn (email, password) {

  firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
    let errorCode = error.code;
    let errorMessage = error.message;
  
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    //document.getElementById('quickstart-sign-in').disabled = false;
  })
}


export {handleSignIn,handleSignUp}
