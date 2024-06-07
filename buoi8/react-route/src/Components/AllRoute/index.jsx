import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from '../../Routes'

export default function Allroute() {
    const element = useRoutes(routes)
  return (
    <>
        {element}
    </>
  )
}
