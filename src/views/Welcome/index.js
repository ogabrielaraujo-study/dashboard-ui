import React from 'react'

import Grid from '../../components/Grid'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <>
      <Grid cols="4" rows="1">
        <Card>
          <Card.Img variant="top" src="http://placehold.it/500x500" />
          <Card.Body>
            <Card.Title>Hello World</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              Welcome to Dashboard
            </Card.Subtitle>

            <Link to="/form">
              <Button>Click me</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Features</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Link to="/form">Form</Link>
            </ListGroup.Item>

            <ListGroup.Item>
              <Link to="/table">Table</Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Grid>
    </>
  )
}
