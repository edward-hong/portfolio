const scrollTo = (section) => (e) => {
  e.preventDefault()
  document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
}

export default scrollTo
