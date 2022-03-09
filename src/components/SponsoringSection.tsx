import { useSponsoring } from '@contexts/Sponsoring'
import { styled } from '@styles/stitches'

export default function SponsoringSection() {
  const sponsoring = useSponsoring()

  return (
    <Section>
      <List role="list">
        {sponsoring.map((sponsor) => (
          <ListItem key={sponsor.username} role="listitem">
            <Avatar src={sponsor.avatarUrl} alt={sponsor.name} />
          </ListItem>
        ))}
      </List>

      <Description>
        <p>
          우리는 다른 많은 개발자의 작업물을 사용하며 제품을 만들고 수익을 내고
          있습니다.
        </p>
        <p>
          우리의 고민을 덜어준 개발자들에게도 보상이 돌아가야하며, 생태계를
          유지해야합니다.
        </p>
        <p>
          <a href="https://github.com/hahnlee?tab=sponsoring">더보기</a>
        </p>
      </Description>
    </Section>
  )
}

const Section = styled('section', {
  padding: '84px 24px',
})

const Avatar = styled('img', {
  display: 'block',
  width: 100,
  height: 100,
  borderRadius: 50,
  border: '1px solid $grey200',
})

const List = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBottom: 26,
})

const ListItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 12,
  '& + &': {
    marginLeft: 12,
  },
})

const Description = styled('div', {
  textAlign: 'center',
})
