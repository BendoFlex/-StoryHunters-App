import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; //works ? yes

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


export {handleSignIn,handleSignUp}
