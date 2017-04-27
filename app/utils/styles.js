//-----------  Imports  -----------//

import tinycolor from 'tinycolor2'

//-----------  Definitions  -----------//

export const lightArr = ['Lightest', 'Lighter', 'Light']
export const darkArr  = ['Darkest', 'Darker', 'Dark']

//-----------  Helpers  -----------//

const generateSpectrums = (colorObj) => {
  let newColors = {}

  Object.keys(colorObj).map((color) => {
    const val = colorObj[color][0] || colorObj[color]
    const lgt = colorObj[color][1] || 60
    const drk = colorObj[color][2] || 15

    newColors = Object.assign(newColors, generateSpectrum(color, val, lgt, drk))
  })

  return newColors
}

const generateSpectrum = (name, color, lighten, darken) => {
  let colorObj = {}

  colorObj[name] = color

  lightArr.map((key, index) => {
    const newKey = name+key
    const change = (index) ? (lighten / (1.5 * index)) : lighten
    return colorObj[newKey] = tinycolor(color).lighten(change).toString()
  })

  darkArr.map((key, index) => {
    const newKey = name+key
    const change = (index) ? (darken / (1.5 * index)) : darken
    return colorObj[newKey] = tinycolor(color).darken(change).toString()
  })

  return colorObj
}

//-----------  Exports  -----------//

export {
  generateSpectrum,
  generateSpectrums
}
