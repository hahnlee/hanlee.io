import { styled } from '@styles/stitches'

export default function Tech() {
  return (
    <Section>
      <Title>기술</Title>
      <Content>
        <ListRow>
          <Header>
            <Logo src="/images/react.png" alt="" height={40} />
          </Header>
          <H2>React</H2>
          <ul>
            <li>
              LifeCycle을 이해하고 있으며, 적절한 상황에 선택할 수 있습니다.
            </li>
            <li>Suspense for data fetching을 선호합니다</li>
            <li>
              Hooks의 동작 방식을 이해하고 있으며, HOC에 비해 Hooks를
              선호합니다.
              <ul>
                <li>Rules of hooks이 필수적인 이유를 이해하고 있습니다</li>
                <li>closer로 인한 문제상황을 인지하고 있습니다.</li>
                <li>
                  useMemo와 useCallback의 deps의 역할을 이해하고 있습니다.
                </li>
              </ul>
            </li>
            <li>여러 성능 최적화를 수행 할 수 있습니다.</li>
          </ul>
        </ListRow>
      </Content>
    </Section>
  )
}

const Section = styled('section', {
  padding: '0 24px',
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
  gridTemplateColumns: '1fr 1fr 1fr',
})

const Logo = styled('img', {
  marginBottom: 6,
})

const ListRow = styled('div', {
  marginBottom: 48,
})

const H1 = styled('h1', {
  fontSize: '2rem',
  fontWeight: 600,
  margin: 0,
})

const H2 = styled('h1', {
  fontSize: '1.25rem',
  fontWeight: 600,
})
