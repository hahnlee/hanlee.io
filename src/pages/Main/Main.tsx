import { globalCss } from '@stitches/react'
import { GetStaticPropsResult } from 'next'

import { SponsoringProvider } from '@contexts/Sponsoring'
import { Sponsoring } from '@models/Sponsoring'
import { getSponsoring } from '@remotes/github'

import Header from './Main.Header'

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
      <main>
        <Header />
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
