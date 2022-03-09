import { globalCss } from '@stitches/react'
import { GetStaticPropsResult } from 'next'

import BetterWorldSection from '@components/BetterWorldSection'
import CodingSection from '@components/CodingSection'
import TogetherSection from '@components/TogetherSection'
import { SponsoringProvider } from '@contexts/Sponsoring'
import { Sponsoring } from '@models/Sponsoring'
import { getSponsoring } from '@remotes/github'

import Intro from './Main.Intro'
import Navbar from './Main.Navbar'

interface Props {
  sponsoring: Sponsoring[]
}

const globalStyles = globalCss({
  body: { margin: 0 },
});


function Main({ sponsoring }: Props) {
  globalStyles()

  return (
    <SponsoringProvider value={sponsoring}>
      <Navbar />
      <main>
        <Intro />
        <CodingSection />
        <BetterWorldSection />
        <TogetherSection />
      </main>
    </SponsoringProvider>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const sponsoring = await getSponsoring('hahnlee')

  return {
    props: {
      sponsoring,
    },
  }
}

export default Main
