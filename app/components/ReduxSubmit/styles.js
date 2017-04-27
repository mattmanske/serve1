//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Redux Submit  ----------- */

const Elem = styled.div`
	display    : inline-block;
	margin-top : ${vars.gutter};
	position   : relative;
	text-align : right;
	width      : 100%;

	> * + [type='submit']{
		margin-left: 0.5em;
	}
`

const Reset = styled.a`
	color          : ${vars.grayDark};
	font-size      : 0.8em;
	text-transform : uppercase;

	&:hover {
		color: $grayDarker;
	}

	&[disabled] {
		color          : ${vars.gray} !important;
		pointer-events : none !important;
	}

	& + button {
		margin-left: 1em;
	}
`

//-----------  Exports  ----------- */

export default { Elem, Reset }
