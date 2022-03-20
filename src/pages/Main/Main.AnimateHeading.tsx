import { ReactNode } from 'react'
import { motion, Transition } from 'framer-motion'

import useScrollEffect from '@hooks/useScrollEffect'
import { styled } from '@styles/stitches'
import useLazyState from '@hooks/useLazyState'

interface Props {
  children: ReactNode
  order: number
}

const ITEM_HEIGHT = 80

const SENTENCE = ['Coding', 'A Better World', 'Together']

const hide = { opacity: 0, height: 0, transform: 'translateY(0)' }

const show = {
  opacity: 1,
  height: ITEM_HEIGHT,
  transform: 'translateY(20px)',
}

export default function AnimateHeading() {
  return (
    <H1>
      {SENTENCE.map((word, index) => (
        <AnimateText key={index} order={index}>
          {word}
        </AnimateText>
      ))}
    </H1>
  )
}

function AnimateText({ children, order }: Props) {
  const [initial, setInitial] = useLazyState(false)
  const [animateEnd, setAnimateEnd] = useLazyState(false)
  const [scrolled, setScrolled] = useLazyState(false)

  useScrollEffect(
    (scrollY) => {
      setInitial(scrollY < window.outerHeight)

      const offset = ITEM_HEIGHT * (order + 2) + 80
      const threshold =
        window.outerHeight - ITEM_HEIGHT * SENTENCE.length - offset

      setScrolled(scrollY > threshold)
    },
    [order]
  )

  const current = !initial || (animateEnd && scrolled) ? hide : show

  return (
    <Text
      initial={hide}
      animate={{
        ...current,
        transition: createAnimate(order, scrolled),
      }}
      onAnimationComplete={() => {
        if (!animateEnd) {
          setAnimateEnd(true)
        }
      }}
    >
      {children}
    </Text>
  )
}

const H1 = styled('h1', {
  position: 'fixed',
  top: 'calc(50vh - 145px)',
  margin: 0,
  fontSize: ITEM_HEIGHT,
  lineHeight: 0.85,
  zIndex: 0,
})

const Text = styled(motion.span, {
  display: 'block',
  margin: 0,
  fontFamily: 'Anton',
  fontWeight: 'normal',
  color: '$grey900',
})

function createAnimate(order: number, scrolled: boolean): Transition {
  const index = scrolled ? SENTENCE.length - 1 - order : order

  return {
    type: 'spring',
    mass: 5,
    stiffness: 2000,
    damping: 200,
    duration: 0.5,
    delay: index * 0.05,
  }
}
