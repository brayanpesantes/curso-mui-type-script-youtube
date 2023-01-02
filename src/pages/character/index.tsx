import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { characters } from '../../api/characters'
import { TypeCharacter } from '../home/interface/character.interface'

export const CharacterPage: FC<{}> = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [character, setCharacter] = useState<TypeCharacter | null>(null)

  useEffect(() => {
    characters
      .getById({ id })
      .then((res) => {
        setCharacter(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth='xl'>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container columnSpacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography variant='h1'>{character?.name}</Typography>
              <Divider />
              <Typography variant='h6'>{character?.origin.name}</Typography>
              <Box>
                <Chip
                  color={character?.status === 'Alive' ? 'primary' : 'error'}
                  variant='outlined'
                  label={character!.status}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img
                src={character!.image}
                style={{ width: '100%', borderRadius: '0.5em' }}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  )
}
