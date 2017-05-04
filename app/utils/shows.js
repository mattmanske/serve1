//-----------  Imports  -----------//

import reduce   from 'lodash/reduce'
import includes from 'lodash/includes'

//-----------  Constants  -----------//

export const MEMBERS = [
  { id: '-JwTMosYwcz594OTzWNg', name: 'Brian', visible: true },
  { id: '-JwTMosjlnMYoUiec5Yn', name: 'Chris', visible: true },
  { id: '-JwTMosi7tF7I-nIk62m', name: 'Ela', visible: true },
  { id: '-JwTMosap3SX4fNoawMT', name: 'Matt', visible: true },
  { id: '-JwTMosjlnMYoUiec5Ym', name: 'Josh', visible: true },
  { id: '-JwTMosi7tF7I-nIk62n', name: 'Jeff', visible: true },
  { id: '-JwTMosi7tF7I-nIk62o', name: 'Hannah', visible: true },
]

//-----------  Helpers  -----------//

function llcCut(show){
  return (show.payment * 0.15)
}

function didBook(show, memberID){
  return (memberID == show.booked_by)
}

function didPlay(show, memberID){
  return includes(show.participants, memberID)
}

function bookingCut(show){
  if (0 == show.booked_by) return 0

  if (show.payment <= 300)  return (show.payment * 0.05)
  if (show.payment <= 1000) return (show.payment * 0.10)
  if (show.payment > 1000)  return (show.payment * 0.15)
}

function playingCut(show){
  const { payment, participants } = show

  const memberSplit = (payment - bookingCut(show) - llcCut(show))

  return (memberSplit / participants.length)
}

//-----------  Exports  -----------//

export function llcShowCount(shows){
  return reduce(shows, (sum, show) => didBook(show, 0) ? sum + 1 : sum, 0)
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
