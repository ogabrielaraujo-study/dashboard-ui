import React from 'react'

import Grid from '../../components/Grid'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <>
      <Grid cols="4" rows="1">
        <Card>
          <Card.Img variant="top" src="http://placehold.it/500x500" />
          <Card.Body>
            <Link to="/form">
              <Button>Click me</Button>
            </Link>
          </Card.Body>
        </Card>
      </Grid>
    </>
  )
}
