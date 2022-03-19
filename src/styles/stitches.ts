import { createStitches } from '@stitches/react'

const { styled, getCssText, keyframes } = createStitches({
  theme: {
    colors: {
      grey100: '#F1F3F5',
      grey200: '#E9ECEF',
      grey300: '#DEE2E6',
      grey400: '#CED4DA',
      grey500: '#ADB5BD',
      grey600: '#868E96',
      grey700: '#495057',
      grey800: '#343A40',
    },
  },
})

export { styled, getCssText, keyframes }
