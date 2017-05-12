//-----------  Imports  -----------//

import Dashboard            from './styles'

import Anytime              from './assets/anytime.jpg'
import Nnsb                 from './assets/nnsb.jpg'
import Meh                  from './assets/meh.jpg'

import React, { PropTypes } from 'react'

import BoundsWrapper        from 'components/BoundsWrapper'

import CustomersTable       from 'containers/CustomersTable'

//-----------  Definitions  -----------//

const title = 'Dashboard'
const albums = [{
  title : 'Anytime',
  cover : Anytime,
},{
  title : 'MEH',
  cover : Meh,
},{
  title : 'NNSB',
  cover : Nnsb,
}]

//-----------  Component  -----------//

class DashboardRoute extends React.Component {

  render(){
    return (
      <Dashboard.Page title={title}>
        <BoundsWrapper>
          <Dashboard.Albums>
            {/* <h3>Albums</h3>
            {albums.map(album => (
              <Dashboard.Album key={album.title}>
                <img src={album.cover} />
                <h4>{album.title}</h4>
                <div>
                  <strong>CD Orders: </strong>
                  1
                </div>
                <div>
                  <strong>MP3 Downloads: </strong>
                  12
                </div>
                <div>
                  <strong>WAV Downloads: </strong>
                  12
                </div>
              </Dashboard.Album>
            ))} */}
          </Dashboard.Albums>

          <Dashboard.Customers>
            <h3>Customers</h3>
            <CustomersTable />
          </Dashboard.Customers>
        </BoundsWrapper>
      </Dashboard.Page>
    )
  }
}

//-----------  Prop Types  -----------//

DashboardRoute.propTypes = {}

//-----------  Exports  -----------//

export default DashboardRoute
