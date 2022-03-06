import { GetStaticPropsResult } from 'next'

import { SponsoringProvider } from '@contexts/Sponsoring'
import { Sponsoring } from '@models/Sponsoring'

import Header from './Main.Header'
import { getSponsoring } from '@remotes/github'

interface Props {
  sponsoring: Sponsoring[]
}

function Main({ sponsoring }: Props) {
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
