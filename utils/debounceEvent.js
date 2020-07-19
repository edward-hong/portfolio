import debounce from 'lodash.debounce'

const debounceEvent = (...args) => {
  const debouncedEvent = debounce(...args)
  return (e) => {
    e.persist()
    e.preventDefault()
    return debouncedEvent(e)
  }
}

export default debounceEvent
