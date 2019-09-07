import React from 'react'
import { Div } from './styles'

export default function Grid({ children, cols, rows }) {
  return (
    <Div className="grid" cols={cols} rows={rows}>
      {children}
    </Div>
  )
}
