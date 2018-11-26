// Active first
const active = data => [...data].sort((a, b) => a.isActive && !b.isActive ? -1 : !a.isActive && b.isActive ? 1 : 0)

// Completed first
const completed = data => [...data].sort((a, b) => a.isActive && !b.isActive ? 1 : !a.isActive && b.isActive ? -1 : 0)

// New ones first
const date = data => [...data].sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)

// In alphabetical order
const alphabetical = data => [...data].sort((a, b) => {
  const first = a.value.toLowerCase(), second = b.value.toLowerCase()
  return first.localeCompare(second)
})


const sort = (data, option) => {
  switch (option) {
    case 'active': return active(data)
    case 'completed': return completed(data)
    case 'date': return date(data)
    case 'alphabetical': return alphabetical(data)
  }
}

export default sort
