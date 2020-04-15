import React, { ReactElement, useState } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import * as Styled from './Stacks.styled'

interface StackItem {
  title: string
  body: string
}

interface StacksProps {
  items: StackItem[]
}

function Stacks({ items }: StacksProps): ReactElement<any> {
  const [selected, setSelected] = useState(0)

  return (
    <Styled.Wrapper>
      <Styled.ItemGroup>
        { items.map(({ title }, index) => (
          <Styled.Item
            key={title}
            onClick={() => setSelected(index)}
          >
            <Styled.Title
              active={selected === index}
            >
              { title }
            </Styled.Title>
          </Styled.Item>
        )) }
      </Styled.ItemGroup>
      <Styled.Content>
        <MDXRenderer>
          { items[selected].body }
        </MDXRenderer>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default Stacks
