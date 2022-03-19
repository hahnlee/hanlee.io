import { styled, keyframes } from '@styles/stitches'

// Based on
// https://dribbble.com/shots/2807757-Micro-animation-for-site-scroll
// https://codepen.io/hexagoncircle/pen/aZWOdE

const MOUSE_WIDTH = 30
const MOUSE_HEIGHT = 50
const MOUSE_BORDER = 6
const MOUSE_POS = 8

const TRACKBALL_SIZE = 6
const TRACKBALL_POS = 10
const TRACKBALL_SHRINK = 0.4

const ANIMATION_DURATION = '5s'

const COLOR_OUTLINE = '$grey800'
const COLOR_OUTLINE_FADE = '$grey400'

const nudgeMouse = keyframes({
  '0%': { transform: 'translateY(0)' },
  '20%': { transform: `translateY(${MOUSE_POS}px)` },
  '30%': { transform: 'translateY(0)' },
  '50%': { transform: `translateY(${MOUSE_POS}px)` },
  '60%': { transform: 'translateY(0)' },
  '80%': { transform: `translateY(${MOUSE_POS}px)` },
  '90%': { transform: 'translateY(0)' },
})

const colorSlide = keyframes({
  '0%': { backgroundPosition: '0% 100%' },
  '20%': { backgroundPosition: '0% 0%' },
  '21%': { backgroundColor: COLOR_OUTLINE_FADE },
  '29.99%': {
    backgroundColor: COLOR_OUTLINE,
    backgroundPosition: '0% 0%',
  },
  '30%': {
    backgroundColor: COLOR_OUTLINE_FADE,
    backgroundPosition: '0% 100%',
  },
  '50%': { backgroundPosition: '0% 0%' },
  '51%': { backgroundColor: COLOR_OUTLINE_FADE },
  '59%': {
    backgroundColor: COLOR_OUTLINE,
    backgroundPosition: '0% 0%',
  },
  '60%': {
    backgroundColor: COLOR_OUTLINE_FADE,
    backgroundPosition: '0% 100%',
  },
  '80%': { backgroundPosition: '0% 0%' },
  '81%': { backgroundColor: COLOR_OUTLINE_FADE },
  '90%, 100%': { backgroundColor: COLOR_OUTLINE },
})

const trackBallSlide = keyframes({
  '0%': {
    opacity: 1,
    transform: `scale(1) translateY(-${TRACKBALL_POS}px)`,
  },
  '6%': {
    opacity: 1,
    transform: `scale(0.9) translateY(${TRACKBALL_POS / 4}px)`,
  },
  '14%': {
    opacity: 0,
    transform: `scale(${TRACKBALL_SHRINK}) translateY(${TRACKBALL_POS * 2}px)`,
  },
  '15%, 19%': {
    opacity: 0,
    transform: `scale(${TRACKBALL_SHRINK}) translateY(-${TRACKBALL_POS}px)`,
  },
  '28%, 29.99%': {
    opacity: 1,
    transform: `scale(1) translateY(-${TRACKBALL_POS}px)`,
  },
  '30%': {
    opacity: 1,
    transform: `scale(1) translateY(-${TRACKBALL_POS}px)`,
  },
  '36%': {
    opacity: 1,
    transform: `scale(0.9) translateY(${TRACKBALL_POS / 4}px)`,
  },
  '44%': {
    opacity: 0,
    transform: `scale(${TRACKBALL_SHRINK}) translateY(${TRACKBALL_POS * 2}px)`,
  },
  '45%, 49%': {
    opacity: 0,
    transform: `scale(${TRACKBALL_SHRINK}) translateY(-${TRACKBALL_POS}px)`,
  },
  '58%, 59.99%': {
    opacity: 1,
    transform: `scale(1) translateY(-${TRACKBALL_POS}px)`,
  },
  '60%': {
    opacity: 1,
    transform: `scale(1) translateY(-${TRACKBALL_POS}px)`,
  },
  '66%': {
    opacity: 1,
    transform: `scale(0.9) translateY(${TRACKBALL_POS / 4}px)`,
  },
  '74%': {
    opacity: 0,
    transform: `scale(${TRACKBALL_SHRINK}) translateY(${TRACKBALL_POS * 2}px)`,
  },
  '75%, 79%': {
    opacity: 0,
    transform: `scale(${TRACKBALL_SHRINK}) translateY(-${TRACKBALL_POS}px)`,
  },
  '88%, 100%': {
    opacity: 1,
    transform: `scale(1) translateY(-${TRACKBALL_POS}px)`,
  },
})

const MouseAnimation = styled('div', {
  position: 'relative',
  width: MOUSE_WIDTH,
  height: MOUSE_HEIGHT,
  borderRadius: 100,
  background: `${COLOR_OUTLINE_FADE} linear-gradient(${[
    'transparent 0%',
    'transparent 50%',
    `${COLOR_OUTLINE} 50%`,
    `${COLOR_OUTLINE} 100%`,
  ].join(',')})`,
  backgroundSize: '100% 200%',
  animation: [
    `${colorSlide} ${ANIMATION_DURATION} linear infinite`,
    `${nudgeMouse} ${ANIMATION_DURATION} ease-out infinite`,
  ].join(','),
  '&:before, &:after': {
    content: '',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
  },
  '&:before': {
    width: MOUSE_WIDTH - MOUSE_BORDER,
    height: MOUSE_HEIGHT - MOUSE_BORDER,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  '&:after': {
    backgroundColor: COLOR_OUTLINE,
    width: TRACKBALL_SIZE,
    height: TRACKBALL_SIZE,
    borderRadius: '100%',
    animation: `${trackBallSlide} ${ANIMATION_DURATION} linear infinite`,
  },
})

export default MouseAnimation
