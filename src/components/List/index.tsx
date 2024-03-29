import React from 'react';
import {Container, Item, Title } from "./styles"

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({title, elements}) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

        {elements.map((element, id) =>(
            <Item key={id}>{element}</Item>
        ))}

    </Container>

  )
}

export default List;