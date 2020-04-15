import React from 'react'
import { graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import Page from '../components/Page'
import Section from '../components/Section'
import Stacks from '../components/Stacks'
import Color from '../styles/colors'

export const query = graphql`
  query Stacks {
    allMdx(sort: {fields: frontmatter___order}) {
      edges {
        node {
          body
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const handshake = keyframes`
  0% {
      transform:rotate(0deg)
  }

  4% {
      transform:rotate(5deg)
  }

  8% {
      transform:rotate(-5deg)
  }

  12% {
      transform:rotate(5deg)
  }

  16% {
      transform:rotate(-5deg)
  }

  20%, to {
      transform:rotate(0deg)
  }
`

const Heading = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  word-break: keep-all;
`

const Hand = styled.span`
  display: inline-block;
  animation-duration: 2.5s;
  animation-name: ${handshake};
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  transform-origin: center bottom;
`

const Links = styled.div`
  margin-top: 20px;
`

const Link = styled.a`
  color: ${Color.Gray7};
  text-decoration: none;
`

const Divider = styled.span`
  color: ${Color.Gray6};
  margin: 0 8px;
`

const Career = styled.div`
  display: flex;
`

const Column = styled.div`
  flex: 1;
`

const CareerTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  line-height: 36px;
`

const CompanyName = styled.b`
  font-size: 20px;
`

const Date = styled.span`
  color: ${Color.Gray6};
`

function IndexPage({ data: { allMdx: { edges } } }) {
  return (
    <Page>
      <Section>
        <Heading>안녕하세요 <Hand>👋</Hand></Heading>
        <Heading>React를 좋아하는 프론트엔드 개발자 이한 입니다</Heading>
        <Heading>아키텍쳐, 조직문화에 관심이 많습니다</Heading>

        <Links>
          <Link href="https://github.com/hahnlee">GitHub</Link>
          <Divider>|</Divider>

          <Link href="https://blog.hanlee.io">Blog</Link>
          <Divider>|</Divider>

          <Link href="/good-to-read">Good To Read</Link>
          <Divider>|</Divider>

          <Link href="mailto:hanlee.dev@gmail.com">hanlee.dev@gmail.com</Link>
        </Links>
      </Section>

      <Section backgroundColor={Color.Gray0}>
        <Career>
          <Column>
            <CareerTitle>경력</CareerTitle>
            <p>
              <CompanyName>ZOYI Corporation</CompanyName>
              <Divider>|</Divider>
              <Date>2018.11. - 현재</Date>
            </p>
            채널톡 프론트엔드 리드 엔지니어
            <p>
              <CompanyName>peoplefund</CompanyName>
              <Divider>|</Divider>
              <Date> 2017.04 - 2018.02</Date>
            </p>
            백엔드 엔지니어 인턴
          </Column>

          <Column>
            <CareerTitle>학력</CareerTitle>
            <p>
              <CompanyName>UNIST</CompanyName>
              <Divider>|</Divider>
              <Date>2015 - 휴학중</Date>
            </p>
            <p>컴퓨터공학과 학사과정</p>
          </Column>
        </Career>
      </Section>

      <Section title="이런 기술은 특히 자신 있습니다">
        <Stacks
          items={edges.map(({ node: { body, frontmatter: { title } } }) => ({
            body,
            title,
          }))}
        />
      </Section>

      <Section title="그외에도 이런 기술을 다룰수 있습니다">
        Git
        CSS-in-JS
        SCSS
        Socket.io
        Electron
      </Section>

      <Section title="이런 분야는 관심 있습니다. 하지만 잘 다루지 못합니다">
        AB Test
        GraphQL
        Cypress
        Prettier
        Rust
      </Section>
    </Page>
  )
}

export default IndexPage
