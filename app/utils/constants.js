//-----------  Imports  -----------//

import map from 'lodash/map'

//-----------  Case Constants  -----------//

export const COURT_TYPES = {
  municipal_court                     : 'Municipal Court',
  circuit_court                       : 'Circuit Court',
  district_court                      : 'District Court',
  court_of_appeals                    : 'Court of Appeals',
  supreme_court                       : 'Supreme Court',
  department_of_workforce_development : 'Dept. of Workforce Development',
  other                               : 'Other'
}

//-----------  Constants Helpers  -----------//

export function constToSelect(constants){
  return map(constants, (label, value) => ({ label, value }))
}
