//-----------  Imports  -----------//

import uniq     from 'lodash/uniq'
import filter   from 'lodash/filter'
import sortBy   from 'lodash/sortBy'
import includes from 'lodash/includes'

//-----------  Exports  -----------//

export function memberOptions(members){
  return members.map(member => mapKeys(member, (val, key) => ('key' == key) ? 'value' : ('name' == key) ? 'label' : key))
}

export function visibleMembers(shows, members){
  let participants = []
  shows.forEach(show => participants = uniq(participants.concat(show.participants)))
  const visible = filter(members, member => includes(participants, member.key))
  return sortBy(visible, ['name'])

}
