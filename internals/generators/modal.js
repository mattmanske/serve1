//-----------  Includes  -----------//

const alreadyExists = require('./utilities/alreadyExists')

//-----------  Prompts  -----------//

const prompts = [{
  type     : 'list',
  name     : 'type',
  message  : 'Is it a component or container?',
  default  : 'Component',
  choices  : () => ['Component', 'Container'],
},{
  type     : 'input',
  name     : 'name',
  message  : 'What\s the name of the component?',
  validate : (value) => {
    if ((/.+/).test(value))
      return alreadyExists(value) ? true : 'Didn\'t find a component or container with that name.'
    return 'The name is required'
  }
}]

//-----------  String Templates  -----------//

const importTemplate = `import {{ properCase name }} from '{{ lowerCase type }}s/{{ properCase name }}'

//-----------  Definitions  -----------//`

const registerTemplate = `  {{ constantCase name }}: {{ properCase name }},
}

//-----------  Helpers  -----------//`

//-----------  Actions  -----------//

const actions = ({ type, name }) => {
  return [{
    // Import into Modal Wrapper
		type         : 'modify',
		path         : '../../app/containers/ModalWrapper/ModalWrapper.js',
		pattern      : /\n\/\/-----------  Definitions  -----------\/\//gi,
    template     : importTemplate,
    abortOnFail  : true,
  },{
    // Register New Modal Component
		type         : 'modify',
		path         : '../../app/containers/ModalWrapper/ModalWrapper.js',
		pattern      : /}\n\n\/\/-----------  Helpers  -----------\/\//gi,
    template     : registerTemplate,
    abortOnFail  : true,
  }]
}

//-----------  Exports  -----------//

module.exports = {
  prompts,
  actions,
  description: 'Register new modal content.'
}
