import { FC } from 'react'
import {
  Drawer,
  Box,
  Stack,
  Typography,
  IconButton,
  Divider,
} from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { HorizontalCard } from '../components'
import { useAppSelector } from '../redux/hooks'
interface Props {
  open: boolean
  handleStateViewDrawer: () => void
}

export const CartComponent: FC<Props> = ({ handleStateViewDrawer, open }) => {
  const items = useAppSelector((state) => state.cartReducer)
  return (
    <Drawer anchor='right' open={open}>
      <Box sx={{ width: '25em', p: 2 }}>
        <Stack
          direction='row'
          justifyContent={'space-between'}
          alignItems='center'>
          <Typography variant='h5'>Cart</Typography>
          <IconButton color='primary' onClick={() => handleStateViewDrawer()}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 1.5 }} />
        <Stack spacing={4}>
          {items.length > 0
            ? items.map((item) => (
                <HorizontalCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  info={item.info}
                  id={item.id}
                />
              ))
            : 'Add to Cart'}
        </Stack>
      </Box>
    </Drawer>
  )
}
