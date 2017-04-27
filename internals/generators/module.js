//-----------  Includes  -----------//

const alreadyExists = require('./utilities/alreadyExists')

//-----------  Prompts  -----------//

const prompts = [{
  type     : 'input',
  name     : 'name',
  message  : 'What the name of the new model?',
  default  : 'auth',
  validate : (value) => {
    if ((/.+/).test(value))
      return alreadyExists(value) ? 'A moduel with this name already exists' : true
    return 'The name is required'
  }
},{
  type     : 'confirm',
  name     : 'sagas',
  message  : 'Does this module need sagas?',
  default  : false
}]

//-----------  String Templates  -----------//

const importReducerTemplate = `import {{ lowerCase name }}Reducer from 'modules/{{ lowerCase name }}/reducer'

//-----------  Definitions  -----------//`

const registerReducerTemplate = `\n    {{ lowerCase name }} : {{ lowerCase name }}Reducer,
    browser`

const importSagaTemplate = `import {{ lowerCase name }}Sagas from 'modules/{{ lowerCase name }}/sagas'

//-----------  Wait All  -----------//`

const registerSagaTemplate = `\n    {{ lowerCase name }}Sagas(),
  ]`

//-----------  Actions  -----------//

const actions = ({ name, sagas }) => {
  const actionsTemplate = './templates/modules.actions.js.hbs'
  const reducerTemplate = './templates/modules.reducer.js.hbs'
  const sagasTemplate   = './templates/modules.sagas.js.hbs'

  const moduleActions = [{
    // Actions File
    type         : 'add',
    path         : '../../app/modules/{{lowerCase name}}/actions.js',
    templateFile : actionsTemplate,
    abortOnFail  : true,
  },{
    // Reducer File
    type         : 'add',
    path         : '../../app/modules/{{lowerCase name}}/reducer.js',
    templateFile : reducerTemplate,
    abortOnFail  : true,
  },{
    // Import to Root Reducer
		type         : 'modify',
		path         : '../../app/reducers.js',
		pattern      : /\n\/\/-----------  Definitions  -----------\/\//gi,
    template     : importReducerTemplate,
    abortOnFail  : true,
  },{
    // Add to Root Reducer
		type         : 'modify',
		path         : '../../app/reducers.js',
		pattern      : /\n    browser/gi,
    template     : registerReducerTemplate,
    abortOnFail  : true,
  }]

  const sagaActions = [{
    // Sagas File
    type         : 'add',
    path         : '../../app/modules/{{lowerCase name}}/sagas.js',
    templateFile : sagasTemplate,
    abortOnFail  : true,
  },{
    // Import to Root Saga
		type         : 'modify',
		path         : '../../app/modules/index.js',
		pattern      : /\n\/\/-----------  Wait All  -----------\/\//gi,
    template     : importSagaTemplate,
    abortOnFail  : true,
  },{
    // Add to Root Saga
		type         : 'modify',
		path         : '../../app/modules/index.js',
		pattern      : /\n  ]/gi,
    template     : registerSagaTemplate,
    abortOnFail  : true,
  }]

  return (sagas) ? moduleActions.concat(sagaActions) : moduleActions
}

//-----------  Exports  -----------//

module.exports = {
  prompts,
  actions,
  description: 'Register new module/model.'
}
