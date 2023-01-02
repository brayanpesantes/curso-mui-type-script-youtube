import { Box, Divider, Grid, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'
type HeaderProps = {
  title: string
  description: string
  element?: ReactNode | null
}
export const Header: FC<HeaderProps> = ({ description, title, element }) => {
  return (
    <div>
      <Box sx={{ width: '100%', height: '350px' }}>
        <Grid
          container
          direction='row'
          justifyContent={'center'}
          alignItems='center'
          sx={{ height: '100%' }}>
          <Grid item xs={5}></Grid>
          <Grid
            container
            direction='column'
            justifyContent={'center'}
            alignItems='center'
            sx={{ height: '100%' }}>
            <Grid item>
              <Typography variant='h1'>{title}</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ mt: 2 }}>{description}</Typography>
            </Grid>
            {element !== undefined && (
              <Grid item sx={{ mt: 4 }}>
                {element}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </div>
  )
}
