import { FC } from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material'
import { CloseRounded } from '@mui/icons-material'
import { useAppDispatch } from '../../redux/hooks'
import { removeToCart } from '../../redux/slices/cart.slice'

type Props = {
  image: string
  name: string
  info: string
  id: string | number
}

export const HorizontalCard: FC<Props> = ({ image, info, name, id }) => {
  const dispatch = useAppDispatch()
  const handleRemoveToCart = (): void => {
    dispatch(removeToCart({ id }))
  }
  return (
    <Card sx={{ display: 'flex', alignItems: 'start' }}>
      <CardMedia
        component='img'
        height='150'
        sx={{ width: '150px' }}
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='body1' color='text.secondary'>
          {info}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size='small' onClick={() => handleRemoveToCart()}>
          <CloseRounded />
        </IconButton>
      </CardActions>
    </Card>
  )
}
