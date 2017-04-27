//-----------  Imports  -----------//

import Block                 from './styles'

import React, { PropTypes }  from 'react'

import vars                  from 'styles/variables'
import { generateSpectrums } from 'utils/styles'

//-----------  Definitions  -----------//

const baseColors = {
  gray   : ['#a9a9a9', 30, 30],
  blue   : ['#007ebc', 50, 15],
  red    : ['#B83021', 50, 15],
  green  : ['#1BB518', 50, 20],
  yellow : ['#FFD700', 40, 20],
  orange : ['#ff6c00', 40, 20],
  brown  : ['#C77826', 40, 15],
}

const allColors = generateSpectrums(baseColors)

//-----------  Component  -----------//

const StyleGuide = (props) => {

  return (
    <Block.Elem>
      <h1>H1 Header</h1>
      <h2>H2 Header</h2>
      <h3>H3 Header</h3>
      <h4>H4 Header</h4>
      <h5>H5 Header</h5>
      <h6>H6 Header</h6>
      <p>Chartreuse <a href="">prism schlitz bicycle</a> rights hell of. Echo park hot chicken venmo pok pok green juice, lo-fi literally shoreditch typewriter offal sartorial distillery pug freegan keytar. Gluten-free normcore sartorial vape.</p>
      <small>Chartreuse <a href="">prism schlitz bicycle</a> rights hell of. Echo park hot chicken venmo pok pok green juice, lo-fi literally shoreditch typewriter offal sartorial distillery pug freegan keytar. Gluten-free normcore sartorial vape.</small>

      {Object.keys(baseColors).map((color, index) => (
        <Block.Colors key={index}>
          <h5>{color}</h5>
          {['Lightest', 'Lighter', 'Light'].map((key, index) => (
            <div key={key+index} style={{ backgroundColor: allColors[color+key] }}>{}</div>
          ))}
          <div key={color} style={{ backgroundColor: allColors[color] }}>{}</div>
          {['Dark', 'Darker', 'Darkest'].map((key, index) => (
            <div key={key+index} style={{ backgroundColor: allColors[color+key] }}>{}</div>
          ))}
        </Block.Colors>
      ))}
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

StyleGuide.propTypes = {}

StyleGuide.defaultProps = {}

//-----------  Export  -----------//

export default StyleGuide
