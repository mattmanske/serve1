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
      created_by        : req.user.uid,
      created_at        : timestamp(),
      updated_at        : timestamp(),
      jobs              : _empty,
      cases             : _empty,
      clients           : _empty,
      parties           : _empty,
      services          : _empty,
      attempts          : _empty,
      documents         : _empty,
      affidavits        : _empty,
      client_contacts   : _empty,
      service_documents : _empty,
    })

    //-----------  Data Validations  -----------//

    if (id.length < 3 || 'www' == id || toSlug(id) != id)
      return res.error(400, 'validation', 'Invalid organization ID', { slug: toSlug(id), id })

    //-----------  Write to Database  -----------//

    const databaseWrites = [
      // Create Organization Object
      admin.database().ref(`/organizations/${id}`).transaction(value => {
        return newOrganization
      }),
      // Create User Permissions
      admin.database().ref(`/permissions/${id}`).transaction(value => {
        return { [req.user.uid]: 'admin' }
      }),
    ]

    Promise.all(databaseWrites).then(values => {
      if (!values[0].committed)
        return res.error(400, 'database', 'Error saving organization data', { snapshot: values[0].snapshot.val() })

      if (!values[1].committed)
        return res.error(400, 'database', 'Error saving user permissions data', { snapshot: values[1].snapshot.val() })

      //-----------  Successful Return  -----------//

      admin.auth().createCustomToken(req.user.uid).then(token => {
        return res.status(200).send({ id, token })
      }).catch(error => res.error(500, 'firebase/token', error))
    }).catch(error => res.error(500, 'firebase/transaction', error))
  } catch(error){ res.error(500, 'try/catch', error) }
}
