//-----------  Includes  -----------//

const alreadyExists = require('./utilities/alreadyExists')

//-----------  Prompts  -----------//

const prompts = [{
  type    : 'list',
  name    : 'type',
  message : 'Select the type of component',
  default : 'Stateless Function',
  choices : () => ['Stateless Function', 'ES6 Class'],
},{
  type     : 'input',
  name     : 'name',
  message  : 'What should it be called?',
  default  : 'Button',
  validate : (value) => {
    if ((/.+/).test(value))
      return alreadyExists(value) ? 'A component or container with this name already exists' : true
    return 'The name is required'
  }
}]

//-----------  Actions  -----------//

const actions = ({ type, name }) => {
  const testTemplate      = './templates/test.js.hbs'
  const indexTemplate     = './templates/component.js.hbs'
  const styleTemplate     = './templates/styles.js.hbs'
  const componentTemplate = ('Stateless Function' == type)
    ? './templates/function.js.hbs'
    : './templates/class.js.hbs'

  return [{
    // Index File
    type         : 'add',
    path         : '../../app/components/{{properCase name}}/index.js',
    templateFile : indexTemplate,
    abortOnFail  : true,
  },{
    // Component File
    type         : 'add',
    path         : '../../app/components/{{properCase name}}/{{properCase name}}.js',
    templateFile : componentTemplate,
    abortOnFail  : true,
  },{
    // Component Styles
    type         : 'add',
    path         : '../../app/components/{{properCase name}}/tests.js',
    templateFile : testTemplate,
    abortOnFail  : true,
  },{
    // Component Tests
    type         : 'add',
    path         : '../../app/components/{{properCase name}}/styles.js',
    templateFile : styleTemplate,
    abortOnFail  : true,
  }]
}

//-----------  Exports  -----------//

module.exports = {
  prompts,
  actions,
  description: 'Generate a new component.'
}
