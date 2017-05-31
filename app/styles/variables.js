//-----------  Imports  -----------//

import helpers               from 'styles/helpers'
import { generateSpectrums } from 'utils/styles'

//-----------  Definitions  -----------//

export const emBase = 14
export const gutter = 1.25

export const baseColors = {
  gray   : ['#a9a9a9', 31, 35],
  blue   : ['#4264fb', 40, 15],
  red    : ['#DC3F2E', 40, 15],
  green  : ['#1BB518', 50, 20],
  purple : ['#7753eb', 50, 15],
  yellow : ['#ffbf00', 40, 20],
  orange : ['#ff6c00', 40, 20],
  brown  : ['#C77826', 40, 15],
}

export const allColors = generateSpectrums(baseColors)

//-----------  Exports  -----------//

export default Object.assign({}, allColors, {
  white            : '#ffffff',
  black            : '#303741',

  // bodyFont         : "'Nunito+Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  // headerFont       : "'Nunito+Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  bodyFontWeight   : 'normal',
  headerFontWeight : 'bold',

  emBase           : `${emBase}px`,
  radius           : '5px',
  border           : `1px solid ${helpers.toRgb(allColors.grayLighter, 0.75)}`,
  borderDark       : `1px solid ${helpers.toRgb(allColors.grayLight, 0.75)}`,
  borderLight      : `1px solid ${helpers.toRgb(allColors.grayLightest, 0.75)}`,
  shadow           : '0.25em 0.25em 0.75em rgba(0, 0, 0, 0.05)',
  transition       : '0.15s ease-in-out',

  gutter           : `${gutter}em`,
  gutterLg         : `${gutter * 2.33}em`,
  gutterSm         : `${gutter / 2.33}em`,

  maxWidth         : '75rem',
  blockWidth       : '54rem',
  compactWidth     : '34rem',
  smallWidth       : '22rem',
})
