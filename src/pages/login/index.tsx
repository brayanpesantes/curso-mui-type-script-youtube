import { ChangeEvent, FC, FormEvent, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useNotification } from '../../context/Notification.context'
import { LoginValidate } from '../../utils/validateForm'
import { useFormik } from 'formik'

type LoginType = {
  username: string
  password: string
}
export const LoginPage: FC<{}> = () => {
  const { getSuccess } = useNotification()

  const formik = useFormik<LoginType>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values))
    },
  })

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        direction='row'
        alignItems={'center'}
        justifyContent='center'
        sx={{ minHeight: '100vh' }}>
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant='h4'>
              Iniciar Sesión
            </Typography>
            <Box component={'form'} onSubmit={formik.handleSubmit}>
              <TextField
                name='username'
                fullWidth
                label='Email'
                sx={{ mt: 2, mb: 1.5 }}
                margin='normal'
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                name='password'
                type={'password'}
                fullWidth
                label='Password'
                sx={{ mt: 1.5, mb: 1.5 }}
                margin='normal'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 1.5, mb: 3 }}>
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
