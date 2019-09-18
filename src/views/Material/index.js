import React from 'react'
import { Button, Typography, Paper } from '@material-ui/core'

export default function Material() {
  return (
    <>
      <Button variant="contained" color="primary">
        Hello World
      </Button>

      <Button variant="contained" color="secondary">
        Hello World
      </Button>

      <Paper>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>
    </>
  )
}
