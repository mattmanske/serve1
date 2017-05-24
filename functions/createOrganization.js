//-----------  Imports  -----------//

const _      = require('lodash')
const moment = require('moment')

//-----------  helpers  -----------//

const _empty = { _empty: false }

const timestamp = () => moment.utc().toISOString()

const toSlug = (text) => {
  const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
  const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(p, c =>
        b.charAt(a.indexOf(c)))     // Replace special chars
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')             // Trim - from end of text
}

//-----------  Function  -----------//

module.exports = function(req, res, admin){
  try {
    if (!_.has(req, 'user.uid'))
      return res.error(403, 'init', 'No user ID specified')

    if (!_.has(req, 'body.organization'))
      return res.error(403, 'init', 'No organization data specified')

    //-----------  Definitions -----------//

    const { id } = req.body.organization
    delete req.body.organization.id

    const newOrganization = Object.assign(req.body.organization, {
      created_by : req.user.uid,
      created_at : timestamp(),
      updated_at : timestamp(),
    })

    //-----------  Data Validations  -----------//

    if (id.length < 3 || 'www' == id || toSlug(id) != id)
      return res.error(400, 'validation', 'Invalid organization ID', { slug: toSlug(id), id })

    //-----------  Write to Database  -----------//
      
    const databaseWrites = [
      // Create Organization Object
      admin.database().ref(`/organizations/${id}`).transaction(value => newOrganization),
      // Create User Permissions
      admin.database().ref(`/permissions/${id}`).transaction(value => ({ [req.user.uid]: 'admin' })),
      // Create Jobs Object
      admin.database().ref(`/jobs/${id}`).transaction(value => _empty),
      // Create Cases Object
      admin.database().ref(`/cases/${id}`).transaction(value => _empty),
      // Create Clients Object
      admin.database().ref(`/clients/${id}`).transaction(value => _empty),
      // Create Parties Object
      admin.database().ref(`/parties/${id}`).transaction(value => _empty),
      // Create Services Object
      admin.database().ref(`/services/${id}`).transaction(value => _empty),
      // Create Attempts Object
      admin.database().ref(`/attempts/${id}`).transaction(value => _empty),
      // Create Documents Object
      admin.database().ref(`/documents/${id}`).transaction(value => _empty),
      // Create Affidavits Object
      admin.database().ref(`/affidavits/${id}`).transaction(value => _empty),
      // Create Client Contacts Object
      admin.database().ref(`/client_contacts/${id}`).transaction(value => _empty),
      // Create Service Documents Object
      admin.database().ref(`/service_documents/${id}`).transaction(value => _empty),
    ]

    Promise.all(databaseWrites).then(values => {
      if (!values[0].committed)
        return res.error(400, 'database', 'Error creating organization data', { snapshot: values[0].snapshot.val() })

      if (!values[1].committed)
        return res.error(400, 'database', 'Error creating user permissions', { snapshot: values[1].snapshot.val() })

      if (!values[2].committed)
        return res.error(400, 'database', 'Error creating jobs object', { snapshot: values[2].snapshot.val() })

      if (!values[3].committed)
        return res.error(400, 'database', 'Error creating cases object', { snapshot: values[3].snapshot.val() })

      if (!values[4].committed)
        return res.error(400, 'database', 'Error creating clients object', { snapshot: values[4].snapshot.val() })

      if (!values[5].committed)
        return res.error(400, 'database', 'Error creating parties object', { snapshot: values[5].snapshot.val() })

      if (!values[6].committed)
        return res.error(400, 'database', 'Error creating services object', { snapshot: values[6].snapshot.val() })

      if (!values[7].committed)
        return res.error(400, 'database', 'Error creating attempts object', { snapshot: values[7].snapshot.val() })

      if (!values[8].committed)
        return res.error(400, 'database', 'Error creating documents object', { snapshot: values[8].snapshot.val() })

      if (!values[9].committed)
        return res.error(400, 'database', 'Error creating affidavits object', { snapshot: values[9].snapshot.val() })

      if (!values[10].committed)
        return res.error(400, 'database', 'Error creating client contacts object', { snapshot: values[10].snapshot.val() })

      if (!values[11].committed)
        return res.error(400, 'database', 'Error creating service documents object', { snapshot: values[11].snapshot.val() })

      //-----------  Successful Return  -----------//

      admin.auth().createCustomToken(req.user.uid).then(token => {
        return res.status(200).send({ id, token })
      }).catch(error => res.error(500, 'firebase/token', error))
    }).catch(error => res.error(500, 'firebase/transaction', error))
  } catch(error){ res.error(500, 'try/catch', error) }
}
