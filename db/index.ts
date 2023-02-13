import admin from 'firebase-admin'
import { initializeApp } from 'firebase-admin/app'
import { firebaseConfig } from '@/firebase.config'
import CryptoJS from 'crypto-js'

const secretKey = process.env.FIREBASE_SECRET_KEY || ''
const configDecoded = JSON.parse(
  CryptoJS.AES.decrypt(firebaseConfig, secretKey).toString(CryptoJS.enc.Utf8)
)

let app: ReturnType<typeof initializeApp>

function getFireStore() {
  if (!app && !admin.apps.length) {
    try {
      app = initializeApp({
        credential: admin.credential.cert(configDecoded)
      })
    } catch (error) {
      console.log('Error initializing firebase admin')
      console.log('---------------------------------')
      console.error(error)
    }
  }

  return admin.firestore()
}

const firestore = getFireStore()

export const tokensCollection = firestore.collection('tokens')
