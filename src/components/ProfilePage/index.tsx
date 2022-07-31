import React from "react"
import {Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './style'
import Feed from '../Feed'
const ProfilePage: React.FC = () =>{
  return(
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>
          Editar Perfil
        </EditButton>

        <h1>
          Paloma Cardoso
        </h1>
        <h2>
          @palomacardos0
        </h2>
        <p>
          Developer at <a href="https://www.rocketseat.com.br">@RocketSeat</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Bahia, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 03 de novembro de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>6</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed /> 

    </Container>
  )
}

export default ProfilePage