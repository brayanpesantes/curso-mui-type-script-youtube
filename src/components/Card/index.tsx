import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material'
import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addToCart } from '../../redux/slices/cart.slice'
import { setItem } from '../../utils/localStorage'

type CardProps = {
  id: string
  image: string
  name: string
  species: string
  status: string
}

export const CardComponent: FC<CardProps> = ({
  image,
  name,
  species,
  status,
  id,
}) => {
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const itemExist = useAppSelector((state) => state.cartReducer)
  useEffect(() => {
    setDisabledBtn(itemExist.some((item) => item.id === id))
    setItem('cart', itemExist)
  }, [itemExist, id])

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        image,
        info: status,
      }),
    )
  }
  return (
    <Card>
      <CardMedia component={'img'} height='194' image={image} alt={name} />
      <CardContent>
        <Typography sx={{ mb: 1.5 }} variant='h4'>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Especies: {species}</Typography>
        <Typography sx={{ mt: 1.5 }}>Estado: {status}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          size='small'
          fullWidth
          onClick={() => navigate(`character/${id}`)}>
          Learn More
        </Button>
        <Button
          variant='outlined'
          size='small'
          fullWidth
          disabled={disabledBtn}
          onClick={handleAddToCart}
          sx={{ cursor: `${disabledBtn ? 'allowed' : 'pointer'}` }}>
          add to cart
        </Button>
      </CardActions>
    </Card>
  )
}
