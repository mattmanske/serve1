//-----------  Imports  -----------//

const moment = require('moment')

//-----------  Function  -----------//

module.exports = function(event, admin){
  const { uid, email, photoURL, displayName } = event.data
  const timestamp = moment.utc().toISOString()

  const user = {
    name       : displayName,
    photo      : photoURL,
    email      : email,
    created_at : timestamp,
    updated_at : timestamp
  }

  return admin.database().ref(`users/${uid}`).set(user)
}
