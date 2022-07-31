import React from 'react';
import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import StickBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles'

const SideBar: React.FC = ()=>{
  return(
    
    <Container>
        <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon/>
        </SearchWrapper>

        <StickBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSugestion
                name="Paloma Cardoso"
                nickname="@palomacardos0"
              />,
              <FollowSugestion
                name="Paloma Cardoso"
                nickname="@palomacardos0"
              />,
              <FollowSugestion
                name="Paloma Cardoso"
                nickname="@palomacardos0"
              />
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[<News/>, <News/>, <News/>]}
          />
          <List
            title='Talvez você curta'
            elements={[<News/>, <News/>, <News/>]}
          />
          <List
            title='Talvez você curta'
            elements={[<News/>, <News/>, <News/>]}
          />
          <List
            title='Talvez você curta'
            elements={[<News/>, <News/>, <News/>]}
          />
          <List
            title='Talvez você curta'
            elements={[<News/>, <News/>, <News/>]}
          />
        </Body>
    </StickBox>
      </Container>
  )
}

export default SideBar;