import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { ReactNode } from 'react'

import useLazyState from '@hooks/useLazyState'
import useScrollEffect from '@hooks/useScrollEffect'
import { navbarSection } from '@store/navbar'
import { styled } from '@styles/stitches'

export default function Navbar() {
  const [display, setDisplay] = useLazyState(false)

  useScrollEffect((scrollY) => {
    setDisplay(scrollY > window.outerHeight - 102)
  }, [])

  const section = useAtomValue(navbarSection)

  const colorScheme = section === 'coding' ? 'dark' : 'light';

  return (
    <Header
      colorScheme={colorScheme}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: display ? 1 : 0,
        transition: {
          type: 'spring',
          mass: 5,
          stiffness: 2000,
          damping: 200,
          duration: 0.25,
        },
      }}
    >
      <NavbarItem colorScheme={colorScheme} active={section === 'coding'}>Coding</NavbarItem>{' '}
      <NavbarItem colorScheme={colorScheme} active={section === 'world'}>A Better World</NavbarItem>{' '}
      <NavbarItem colorScheme={colorScheme} active={section === 'together'}>Together</NavbarItem>
    </Header>
  )
}

interface ItemPros {
  colorScheme: 'dark' | 'light'
  active: boolean
  children: ReactNode
}

function NavbarItem({ colorScheme, active, children }: ItemPros) {
  return (
    <Word colorScheme={colorScheme} initial={{ opacity: 0.25 }} animate={{ opacity: active ? 1 : 0.25 }}>
      {children}
    </Word>
  )
}

const Header = styled(motion.header, {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 1,
  padding: 24,
  fontSize: 36,
  fontFamily: 'Anton',
  variants: {
    colorScheme: {
      dark: {
        backgroundColor: '$grey900',
      },
      light: {
        backgroundColor: 'white',
      },
    },
  },
})

const Word = styled(motion.span, {
  variants: {
    colorScheme: {
      dark: {
        color: 'white',
      },
      light: {
        color: '$grey900',
      },
    }
  }
})
