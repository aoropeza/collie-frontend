import React from 'react'
import { Movie } from '../Movie/index'
import { List, Item } from './styles'

const body = {
  data: {
    activeMovies: [
      {
        name: '1917'
      },
      {
        name: 'Aves De Presa Y La Fantabulosa Emancipación De Una Harley Quinn'
      },
      {
        name: 'Bad Boys Para Siempre'
      },
      {
        name: 'Bloodshot'
      },
      {
        name: 'Buscando Justicia'
      },
      {
        name: 'Cuesta Abajo'
      },
      {
        name: 'EMA'
      },
      {
        name: 'El Acusado y el Espía'
      },
      {
        name: 'El Aro Capítulo Final'
      },
      {
        name: 'El Escándalo'
      },
      {
        name: 'El Llamado Salvaje'
      },
      {
        name: 'Familia de Medianoche'
      },
      {
        name: 'Grandes Espías'
      },
      {
        name: 'Honey Boy Un niño Encantador'
      },
      {
        name: 'Jojo Rabbit'
      },
      {
        name: 'Loco Por Ti'
      },
      {
        name: 'Los Caballeros'
      },
      {
        name: 'Maiden: Ellas Contra La Marea'
      },
      {
        name: 'Malasaña 32'
      },
      {
        name: 'Mujercitas'
      },
      {
        name: 'My hero Academia: Heroes Rising'
      },
      {
        name: 'No Soy Quien Crees'
      },
      {
        name: 'Parásitos'
      },
      {
        name: 'Pretty Strong'
      },
      {
        name: 'Rebelión de los Godínez'
      },
      {
        name: 'Sonic La Película'
      },
      {
        name: 'Unidos'
      },
      {
        name: 'VR Outbreak Origins'
      },
      {
        name: 'VR Zombie Survival (x2)'
      },
      {
        name: 'VR: Sol Raiders'
      },
      {
        name: 'Veinteañera, Divorciada y Fantástica'
      }
    ]
  }
}

export const ListOfMovies = () => {
  return (
    <List>
      {body.data.activeMovies.map(movie => (
        <Item key={movie}>
          <Movie />
        </Item>
      ))}
    </List>
  )
}
