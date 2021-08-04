import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyC0v7RYlt6JvBZ3_OhsivGmeWyKrHPmvpw",
        authDomain: "instagram-clone-react-f4f79.firebaseapp.com",
        projectId: "instagram-clone-react-f4f79",
        storageBucket: "instagram-clone-react-f4f79.appspot.com",
        messagingSenderId: "440801069613",
        appId: "1:440801069613:web:31e796152e5e61d9cf46a4",
        measurementId: "G-GML9D0FZX5",
      }
)

const db=firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}