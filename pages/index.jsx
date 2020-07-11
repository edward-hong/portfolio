import { useState } from 'react'

import Hamburger from '../sections/Hamburger'
import OverlayNav from '../sections/OverlayNav'
import Landing from '../sections/Landing'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <OverlayNav isOpen={isOpen} />
      <Landing />
      <style global jsx>{`
        body {
          margin: 0;
          font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
        }
      `}</style>
    </>
  )
}

export default Index
