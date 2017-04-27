//-----------  Includes  -----------//

const fs   = require('fs')
const path = require('path')

//-----------  Helpers  -----------//

const appModules     = fs.readdirSync(path.join(__dirname, '../../../app/modules'))
const pageComponents = fs.readdirSync(path.join(__dirname, '../../../app/components'))
const pageContainers = fs.readdirSync(path.join(__dirname, '../../../app/containers'))

//-----------  Exports  -----------//

module.exports = (comp) => {
  return appModules.concat(pageComponents, pageContainers).indexOf(comp) >= 0
}
