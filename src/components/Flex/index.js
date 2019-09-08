import React from 'react'
import { Div } from './styles'

export default function Flex({ children, className, align, justify }) {
  return (
    <Div className={`flex ${className}`} align={align} justify={justify}>
      {children}
    </Div>
  )
}
