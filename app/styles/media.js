//-----------  Imports  -----------//

import { css }    from 'styled-components'

import { emBase } from 'styles/variables'

//-----------  Definitions  -----------//

const sizes = {
  extraSmall : 480,
  small      : 768,
  medium     : 992,
  large      : 1200,
}

//-----------  Media Breakpoints  -----------//

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / emBase

  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${ css(...args) }
    }
  `
  return accumulator
}, {})

//-----------  Exports  -----------//

export default media
