import { createStitches } from '@stitches/react'

const { styled, getCssText } = createStitches({
  theme: {
    colors: {
      grey800: '#343a40',
    },
  },
})

export { styled, getCssText }
