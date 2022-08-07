import { styled } from '@styles/stitches'

export default function Career() {
  return (
    <Section>
      <Title>경력</Title>
      <Content>
        <ListRow>
          <Header>
            <Logo src="/images/toss.png" alt="" width={45.8} height={40} />
          </Header>
          <H2>토스증권</H2>
          <p>2021년 11월 - 현재</p>

          <H2>토스</H2>
          <p>2020년 9월 - 2021년 11월</p>
        </ListRow>

        <ListRow>
          <Header>
            <Logo src="/images/channel.png" alt="" width={40} height={40} />
          </Header>
          <H2>채널톡</H2>
          <p>2019년 3월 - 2020년 9월</p>
          <H2>워크인사이트</H2>
          <p>2018년 7월 - 2019년 3월</p>
        </ListRow>

        <ListRow>
          <Header>
            <Logo src="/images/peoplefund.png" alt="" width={30} height={40} />
            <H2>피플펀드</H2>
            <p>2017년 4월 - 2018년 2월</p>
          </Header>
        </ListRow>

        <ListRow>
          <Header>
            <Logo src="/images/unist.png" alt="" height={40} />
            <H2>UNIST</H2>
            <p>2015년 3월 - 현재</p>
          </Header>
        </ListRow>
      </Content>
    </Section>
  )
}

const Section = styled('section', {
  paddingTop: 120,
  paddingLeft: 24,
  paddingRight: 24,
  margin: '0 auto',
  color: '$grey100',
})

const Title = styled('h1', {
  fontSize: '2.5rem',
  fontWeight: 600,
})

const Header = styled('header', {})

const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
})

const Logo = styled('img', {
  marginBottom: 6,
})

const ListRow = styled('div', {
  marginBottom: 48,
})

const H2 = styled('h1', {
  fontSize: '1.25rem',
  fontWeight: 600,
})
