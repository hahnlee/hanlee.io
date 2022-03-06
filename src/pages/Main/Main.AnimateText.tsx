import { ReactNode } from 'react'
import { motion, TargetAndTransition } from 'framer-motion'

import { styled } from '@styles/stitches.config'

interface Props {
  children: ReactNode
  order: number
}

export default function AnimateText({ children, order }: Props) {
  return (
    <Text
      initial={{ opacity: 0, height: 0, transform: 'translateY(0)' }}
      animate={createAnimate(order)}
    >
      {children}
    </Text>
  )
}

const Text = styled(motion.span, {
  display: 'inline-block',
  margin: 0,
  fontFamily: 'Anton',
  fontWeight: 'normal',
  color: '$grey800',
})

function createAnimate(order: number): TargetAndTransition {
  return {
    opacity: 1,
    height: 80,
    transform: 'translateY(20px)',
    transition: {
      type: 'spring',
      mass: 5,
      stiffness: 2000,
      damping: 200,
      duration: 0.5,
      delay: order * 0.05,
    },
  }
}
