import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyBj12AzIK2uLHAkKA3mjbKuDsnLT6Oxn08",
    authDomain: "web-mar-a2659.firebaseapp.com",
    projectId: "web-mar-a2659",
    storageBucket: "web-mar-a2659.appspot.com",
    messagingSenderId: "759593095788",
    appId: "1:759593095788:web:1b015de6524eac022ffe49",
    measurementId: "G-ZGHG7YCNDN"
};

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()

// collection references
const sliderCollection = db.collection('slider').doc('slides')
const newsCollection = db.collection('slider').doc('news')
const eventsCollection = db.collection('slider').doc('events')
const videosCollection = db.collection('slider').doc('videos')
const picturesCollection = db.collection('slider').doc('pictures')
const albumsCollection = db.collection('slider').doc('albums')

// export utils/refs
export {
  db,
  sliderCollection,
  newsCollection,
  eventsCollection,
  videosCollection,
  picturesCollection,
  albumsCollection
}