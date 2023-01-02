import { Dispatch, FC, SetStateAction } from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  Typography,
  Stack,
  IconButton,
  Badge,
  BadgeProps,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 3,
    top: 0,
    padding: '0 2px',
  },
}))

type Props = {
  handleView: () => void
}
export const NavBar: FC<Props> = ({ handleView }) => {
  const items = useAppSelector((state) => state.cartReducer)
  const navigation = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <Container maxWidth='xl'>
            <Grid
              container
              direction='row'
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Grid item>
                <Typography>codiger</Typography>
              </Grid>
              <Grid item>
                <Stack direction={'row'} spacing={2}>
                  <IconButton aria-label='cart' onClick={() => handleView()}>
                    <StyledBadge badgeContent={items.length} color='error'>
                      <ShoppingCartIcon color='primary' />
                    </StyledBadge>
                  </IconButton>
                  <Button
                    variant='contained'
                    onClick={() => navigation('/login')}>
                    Login
                  </Button>
                  <Button variant='outlined'>Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
