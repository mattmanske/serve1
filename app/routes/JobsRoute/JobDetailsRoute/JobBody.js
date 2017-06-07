//-----------  Imports  -----------//

import Job                  from './styles'

import React, { PropTypes } from 'react'
import { Icon, Button }     from 'antd'
import { Link }             from 'react-router'

//-----------  Component  -----------//

class JobBody extends React.Component{

  //-----------  Event Handlers  -----------//

  attachCase = () => {}

  attachClient = () => {}

  attachContact = () => {}

  //-----------  HTML Render  -----------//

  render(){
    const { job, kase, client, contact, modalActions } = this.props

    const hasCase    = (job.case && kase)
    const hasClient  = (job.client && client)
    const hasContact = (job.contact && contact)

    const address = job.address || contact.address || client.address
    const email   = job.address || contact.email || client.email
    const phone   = job.address || contact.phone || client.phone

    return (
      <Job.Body>
        <Job.Section>
          <Job.Title>
            Case Number:
            {hasCase && <Job.Action onClick={this.attachCase}>Change</Job.Action>}
          </Job.Title>

          {hasCase ? (
            <Job.Wrapper>
              <h5>{kase.id}</h5>
              <p>{kase.plantiff} v. {kase.defendant}</p>
            </Job.Wrapper>
          ) : (
            <Job.Empty onClick={this.attachCase}>Attach Case</Job.Empty>
          )}
        </Job.Section>

        <Job.Section>
          <Job.Title>
            Client Contact:
            {hasContact && <Job.Action onClick={this.attachContact}>Change</Job.Action>}
          </Job.Title>

          {hasContact ? (
            <Job.Wrapper>
              <h5>{contact.first_name} {contact.last_name}</h5>
              {email && <a target='_blank' href={`mailto:${email}`}>{email}</a>}
              {phone && <a target='_blank' href={`tel:${phone}`}>{phone}</a>}
            </Job.Wrapper>
          ) : (
            <Job.Empty onClick={this.attachContact}>Attach Contact</Job.Empty>
          )}
        </Job.Section>

        <Job.Section>
          <Job.Title>
            Bill To:
            {hasClient && <Job.Action onClick={this.attachClient}>Change</Job.Action>}
          </Job.Title>

          {hasClient ? (
            <Job.Wrapper>
              <h5>{client.name}</h5>
              {address &&
                <address>
                  {address.split('\n').map((text, key) => (
                    <span key={key}>{text}<br/></span>
                  ))}
                </address>
              }
            </Job.Wrapper>
          ) : (
            <Job.Empty onClick={this.attachClient}>Attach Client</Job.Empty>
          )}
        </Job.Section>
      </Job.Body>
    )
  }
}

//-----------  Prop Types  -----------//

JobBody.propTypes = {
  job          : PropTypes.object.isRequired,
  kase         : PropTypes.object,
  client       : PropTypes.object,
  contact      : PropTypes.object,
  modalActions : PropTypes.object.isRequired,
}

//-----------  Exports  -----------//

export default JobBody
