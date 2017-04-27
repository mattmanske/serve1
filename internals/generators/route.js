//-----------  Prompts  -----------//

const prompts = [{
  type    : 'input',
  name    : 'path',
  message : 'Enter the path:',
  default : '*'
},{
  type    : 'input',
  name    : 'route',
  message : 'What should it be called?',
  default : 'not-found'
},{
  type    : 'input',
  name    : 'name',
  message : 'What should the component be called?',
  default : 'NotFoundRoute'
}]

//-----------  String Templates  -----------//

const insertTemplate = `  },{
    path : '{{ path }}',
    name : '{{ kebabCase route }}',
    getComponent(nextState, cb){
      import('routes/{{ properCase name }}').then(loadModule(cb)).catch(err)
    },
  }]
}`

//-----------  Actions  -----------//

const actions = ({ type, name }) => {
  const testTemplate      = './templates/test.js.hbs'
  const indexTemplate     = './templates/index.route.js.hbs'
  const styleTemplate     = './templates/styles.route.js.hbs'
  const componentTemplate = './templates/component.route.js.hbs'

  return [{
    // Index File
    type         : 'add',
    path         : '../../app/routes/{{properCase name}}/index.js',
    templateFile : indexTemplate,
    abortOnFail  : true,
  },{
    // Component File
    type         : 'add',
    path         : '../../app/routes/{{properCase name}}/{{properCase name}}.js',
    templateFile : componentTemplate,
    abortOnFail  : true,
  },{
    // Component Styles
    type         : 'add',
    path         : '../../app/routes/{{properCase name}}/tests.js',
    templateFile : testTemplate,
    abortOnFail  : true,
  },{
    // Component Tests
    type         : 'add',
    path         : '../../app/routes/{{properCase name}}/styles.js',
    templateFile : styleTemplate,
    abortOnFail  : true,
	},{
    // Add to App Routes
		type         : 'modify',
		path         : '../../app/routes/index.js',
		pattern      : /\s\s}]\n}/gi,
    template     : insertTemplate,
    abortOnFail  : true,
  }]
}

//-----------  Exports  -----------//

module.exports = {
  prompts,
  actions,
  description: 'Generate a new route.'
}
