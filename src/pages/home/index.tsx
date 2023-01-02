import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Container, Grid, Pagination, Stack } from '@mui/material'
import { CardComponent, Header } from '../../components'
import { characters } from '../../api/characters'
import { TypeCharacter } from './interface/character.interface'
export const HomePage: FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null,
  )
  const [page, setPage] = useState<number>(1)
  const [count, setCount] = useState<number>(1)

  useEffect(() => {
    characters.getAll({ page }).then((res) => {
      setAllCharacters(res.data.results)
      setCount(res?.data?.info?.pages)
    })
  }, [page])

  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }
  return (
    <Container maxWidth='xl' sx={{ mt: 9 }}>
      <Header title='hola mundo' description='hola mundo desde el home' />
      <Grid container spacing={2} sx={{ my: 2 }}>
        {allCharacters?.map((character) => (
          <Grid key={character.id} item xs={3}>
            <CardComponent
              image={character.image}
              name={character.name}
              species={character.species}
              status={character.status}
              id={character.id}
            />
          </Grid>
        ))}
        <Stack
          sx={{ mt: 8, mb: 8 }}
          width='100%'
          justifyContent={'center'}
          alignItems='center'>
          <Pagination
            variant='outlined'
            color='primary'
            count={count}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
    </Container>
  )
}
