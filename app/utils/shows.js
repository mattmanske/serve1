//-----------  Imports  -----------//

import moment   from 'moment'
import reduce   from 'lodash/reduce'
import mapKeys  from 'lodash/mapKeys'
import includes from 'lodash/includes'

//-----------  Helpers  -----------//

function isLlc(id){
  return (!id || 0 == id || '0' == id)
}

function didBook(show, memberID = false){
  return !memberID ? isLlc(show.booked_by) : (memberID == show.booked_by)
}

function didPlay(show, memberID){
  return includes(show.participants, memberID)
}

function llcCut(show){
  if (moment(show.date).isBefore('2017-04-01')) return (show.payment * 0.15)

  if (show.payment < 750)   return (show.payment * 0.15)
  if (show.payment < 1250)  return (show.payment * 0.20)
  if (show.payment >= 1250) return (show.payment * 0.25)
}

function bookingCut(show){
  if (isLlc(show.booked_by)) return 0

  if (show.payment < 750)  return (show.payment * 0.10)
  if (show.payment >= 750) return (show.payment * 0.15)
}

function playingCut(show){
  const { payment, participants } = show

  const memberSplit = (payment - bookingCut(show) - llcCut(show))

  return (memberSplit / participants.length)
}

//-----------  Exports  -----------//

export function llcShowCount(shows){
  return reduce(shows, (sum, show) => didBook(show) ? sum + 1 : sum, 0)
}

export function llcTotalIncome(shows){
  return reduce(shows, (sum, show) => sum += llcCut(show), 0)
}

export function memberShowCount(memberID, shows){
  return reduce(shows, (sum, show) => didPlay(show, memberID) ? sum + 1 : sum, 0)
}

export function memberTotalIncome(memberID, shows){
  return reduce(shows, (sum, show) => {
    const bookingAmt = didBook(show, memberID) ? bookingCut(show) : 0
    const playingAmt = didPlay(show, memberID) ? playingCut(show) : 0
    return sum += (bookingAmt + playingAmt)
  }, 0)
}
