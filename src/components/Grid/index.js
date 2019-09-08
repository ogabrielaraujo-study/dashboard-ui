import React from 'react'
import { Div } from './styles'

export default function Grid({ children, className, cols, rows }) {
  return (
    <Div className={`grid ${className}`} cols={cols} rows={rows}>
      {children}
    </Div>
  )
}
