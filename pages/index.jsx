import { useState } from 'react'

import Hamburger from '../sections/Hamburger'
import OverlayNav from '../sections/OverlayNav'
import Landing from '../sections/Landing'
import About from '../sections/About'
import Contact from '../sections/Contact'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <OverlayNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <Landing />
      <About />
      <Contact />
      <style global jsx>{`
        body {
          margin: 0;
          font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
        }

        h3 {
          margin-bottom: 20px;
          font-size: 1.4rem;
          font-weight: 700;
        }

        p {
          margin-bottom: 30px;
          font-size: 1.2rem;
        }
      `}</style>
    </>
  )
}

export default Index
