import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// firebase config settings
const config = {
    apiKey: "AIzaSyB4A4CmOKQJRSn8fb7HYq6b0kX0WI_be4M",
    authDomain: "ecommerce-store-db.firebaseapp.com",
    databaseURL: "https://ecommerce-store-db.firebaseio.com",
    projectId: "ecommerce-store-db",
    storageBucket: "ecommerce-store-db.appspot.com",
    messagingSenderId: "152799488821",
    appId: "1:152799488821:web:928ad40d210d377c787a7c",
    measurementId: "G-VSFNN34WTJ"
  };

firebase.initializeApp(config);

// creates user profile in the database
// gets the user auth object and stores it inside the database
// async action because we are querying an api
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the user auth object does not exist return
  if (!userAuth) return;

  //gets a specific user
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // gets user snapshot
  // we use snapshot object to see if user already exists
  const snapShot = await userRef.get();

  // if the user doesn't exist, we create a new user
  if (!snapShot.exists) {
    // stores their display name, email, and date created
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// gets cart items from firebase
export const getUserCartRef = async userId => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

// creates a collection in firestore using the collection key
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  // batch groups calls into one big request
  // does this in case of any failures
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  // fires off batch request
  return await batch.commit();
};

// gets collection from firestore
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    // returns the below object
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  // starts with an empty object and gets each collection by the title
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};


// gets current user from the database
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// gives us access to auth
export const auth = firebase.auth();
// gives us access to firestore
export const firestore = firebase.firestore();

// gives us access to google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// triggers the google popup
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;