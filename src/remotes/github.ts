import ky from 'ky-universal'

import { Sponsoring } from '@models/Sponsoring'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const SponsoringQuery = (username: string) => `
{
  user(login: ${JSON.stringify(username)}) {
    sponsoring(first: 10) {
     edges {
        node {
          ... on User {
            name
            username: login
            avatarUrl
          }
          ... on Organization {
            name
            username: login
            avatarUrl
          }
        }
      }
    }
  }
}
`

interface SponsoringNode {
  node: Sponsoring
}

interface SponsoringResponse {
  data: {
    user: {
      sponsoring: {
        edges: SponsoringNode[]
      }
    }
  }
}

export async function getSponsoring(username: string) {
  const response = await ky
    .post('https://api.github.com/graphql', {
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: SponsoringQuery(username),
      }),
    })
    .json<SponsoringResponse>()

  const sponsoring = response.data.user.sponsoring.edges.map(({ node }) => node)

  return sponsoring
}
