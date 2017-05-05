//-----------  Imports  -----------//

import Members              from './styles'

import sortBy               from 'lodash/sortBy'

import React, { PropTypes } from 'react'
import { Icon }             from 'antd'

//-----------  Component  -----------//

class MembersForm extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { data, error, isLoading, isWatching } = this.props.members

    const members = sortBy(data, ['primary', 'name'])

    function editIcon(val, record){
      return <a  onClick={() => null}><Icon type='ellipsis' /></a>
    }

    return (
      <Members.Elem>
        <h4>NNSB Members</h4>

        <Members.List
          size='small'
          pagination={false}
          dataSource={members}
        >
          <Members.Column
            key='key'
            width={25}
            dataIndex='key'
            render={editIcon}
          />
          <Members.Column
            key='name'
            title='Nickname'
            dataIndex='name'
          />
          <Members.Column
            key='email'
            title='Email'
            dataIndex='email'
          />
          <Members.Column
            key='primary'
            title='Primary?'
            dataIndex='primary'
          />
        </Members.List>
      </Members.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

MembersForm.propTypes = {
  members      : PropTypes.object.isRequired,
  createMember : PropTypes.func.isRequired,
  updateMember : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default MembersForm
