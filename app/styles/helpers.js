//-----------  Imports  -----------//

import tinycolor from 'tinycolor2'

//-----------  Mixins  -----------//

const toHex = (color) => {
  return tinycolor(color).toHex()
}

const toRgb = (color, alpha = 1) => {
  return tinycolor(color).setAlpha(alpha).toRgbString()
}

const lighten = (color, amount = 0) => {
  return tinycolor(color).lighten(amount).toString()
}

const darken = (color, amount = 0) => {
  return tinycolor(color).darken(amount).toString()
}

const mix = (color1, color2, amount = 50) => {
  return tinycolor.mix(color1, color2, amount = 50).toString()
}

//-----------  Exports  -----------//

export default {
  toHex,
  toRgb,
  lighten,
  darken,
  mix
}
