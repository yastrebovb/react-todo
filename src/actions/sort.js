const sort = (data, option) => {
  switch (option) {
    case 'active':
      /* Active first */
      return data.sort((a, b) => {
        if (a.isActive && !b.isActive) {
          return -1
        } else if ((!a.isActive && b.isActive)) {
          return 1
        } else {
          return 0
        }
      })
    case 'completed':
      /* Completed first */
      return data.sort((a, b) => {
        if (a.isActive && !b.isActive) {
          return 1
        } else if ((!a.isActive && b.isActive)) {
          return -1
        } else {
          return 0
        }
      })
    case 'date':
      /* New ones first */
      return data.sort((a, b) => {
        if (a.id < b.id) {
          return -1
        } else if (a.id > b.id) {
          return 1
        } else {
          return 0
        }
      })
    case 'alphabetical':
      /* In alphabetical order */
      return data.sort((a, b) => {
        const first = a.value.toLowerCase(), second = b.value.toLowerCase()

        return first.localeCompare(second)
      })
  }
}

export default sort
