import { useState } from 'react'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'
import { HorizontalCard } from '../components'
import { CartComponent } from './cart'

export const RouterLayout: React.FC<{}> = () => {
  const [open, setOpen] = useState(false)
  const handleStateViewDrawer = () => {
    setOpen(!open)
  }
  return (
    <>
      <NavBar handleView={handleStateViewDrawer} />
      <CartComponent
        handleStateViewDrawer={handleStateViewDrawer}
        open={open}
      />
      <Outlet />
    </>
  )
}
