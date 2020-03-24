import React from 'react'
import { MovieIcon } from '../MovieIcon/index'
import { List, Item } from './styles'

const body = {
  data: {
    activeMovies: [
      {
        name: 'Ajuste de Cuentas',
        id: '5fd3044060e2b9db0bac87ba8fc8e72e',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/jDvPppi2Mh6DyfT-60x89.jpg'
      },
      {
        name:
          'Aves de Presa (y la Fantabulosa Emancipación de una Harley Quinn)',
        id: '584dce5f80bbf5e232b8b7955868ce59',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/0Op87LrEt22adtc-60x89.jpg'
      },
      {
        name: 'Bloodshot',
        id: '57c349bd89dda25e2875df398e358d53',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/PnXA1lcQrRHE3BW-60x89.jpg'
      },
      {
        name: 'El Hombre Invisible',
        id: '0d8092aeadd48cd603c409a8b7eebd16',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/fZQloDBBfRNQskt-60x89.jpg'
      },
      {
        name: 'El Llamado Salvaje',
        id: '092eb6bd7dd5559e855f1a30c57b5d01',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/Qjelc7YYOrTPxRN-60x89.jpg'
      },
      {
        name: 'En el Juego del Asesino',
        id: '95d4395f13f06b5bd3623e15cb2554fd',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/wnAJmsTSklwlv7R-60x89.jpg'
      },
      {
        name: 'Grandes Espías',
        id: '3d06bf20c3fea88c0ef9e4ed04df25a8',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/1pn0MtBqbxKtOSJ-60x89.jpg'
      },
      {
        name: 'Malasaña 32',
        id: '62b20c9c3905ad4949ff8abeda65330d',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/oGslktpusJnZBD6-60x89.jpg'
      },
      {
        name: 'Sonic: La PelÍcula',
        id: 'ac89c75fec44b0d18163c4d14db0411b',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/4g8i27hFPOblsiT-60x89.jpg'
      },
      {
        name: 'Unidos',
        id: 'd6fb4d858c330ce4595848e5a6e7c902',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/vqBpomC6qpZuF6D-60x89.jpg'
      },
      {
        name: 'Veinteañera, Divorciada y Fantástica',
        id: '49d10bb2c72e8c747b7595f6ace56235',
        cover:
          'https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/ROmdr5LJi8u9Jsu-60x89.jpg'
      }
    ]
  }
}

export const ListOfMovieIcon = () => {
  return (
    <List>
      {body.data.activeMovies.map(movie => {
        const { cover, name } = movie
        return (
          <Item key={movie.id}>
            <MovieIcon cover={cover} name={name} />
          </Item>
        )
      })}
    </List>
  )
}
