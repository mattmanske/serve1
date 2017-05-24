//-----------  Imports  -----------//

const express    = require('express')
const admin      = require('firebase-admin')
const functions  = require('firebase-functions')

const createUser = require('./createUser')

//-----------  Definitions  -----------//

admin.initializeApp(functions.config().firebase)

const cors = require('cors')({
  origin               : true,
  methods              : 'GET,POST',
  optionsSuccessStatus : 204,
})

//-----------  Helpers  -----------//

function errorOut(req, res, next){
  res.error = (status, location, message, attachments) => {
    return res.status(status).send(Object.assign({ location, message }, attachments))
  }
  return next()
}

function validateToken(req, res, next){
  const { authorization } = req.headers

  if (!authorization || !authorization.startsWith('Bearer '))
    return res.status(403).send({ location: 'token', message: error })

  const idToken = req.headers.authorization.split('Bearer ')[1]

  admin.auth().verifyIdToken(idToken)
    .catch(error => res.status(403).send({ location: 'token', message: error }))
    .then(user => { req.user = user; return next() })
}

//-----------  App Setup  -----------//

const app = express()

app.use(cors)
app.use(errorOut)
app.use(validateToken)

//-----------  Exports  -----------//

// exports.serve1 = functions.https.onRequest(app)

exports.createUser = functions.auth.user().onCreate(event => createUser(event, admin))
