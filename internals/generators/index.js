//-----------  Includes  -----------//

const fs                 = require('fs')
const path               = require('path')

const routeGenerator     = require('./route')
const modalGenerator     = require('./modal')
const moduleGenerator    = require('./module')
const componentGenerator = require('./component')
const containerGenerator = require('./container')

//-----------  Exports  -----------//

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('container', containerGenerator)
  plop.setGenerator('module', moduleGenerator)
  plop.setGenerator('modal', modalGenerator)
  plop.setGenerator('route', routeGenerator)
}
