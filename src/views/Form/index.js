import React from 'react'

import Grid from '../../components/Grid'
import {
  Button,
  Card,
  Form,
  InputGroup,
  DropdownButton,
  Dropdown,
  ButtonToolbar,
  Spinner,
} from 'react-bootstrap'

export default function Forms() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <Grid cols="3" rows="1">
        <Card>
          <Card.Body>
            <Card.Title>Form Example</Card.Title>

            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formGroupName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" name="firstName" />
              </Form.Group>

              <Form.Group controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formGroupCheck">
                <Form.Check
                  custom
                  type="checkbox"
                  id="checkbox"
                  label="Checkbox example"
                />

                <Form.Check
                  custom
                  type="checkbox"
                  id="checkbox 2"
                  label="Checkbox example 2"
                />
              </Form.Group>

              <Form.Group controlId="formGroupRadio">
                <Form.Check
                  custom
                  type="radio"
                  label="Radio example 1"
                  name="radio"
                  id="formHorizontalRadios1"
                />

                <Form.Check
                  custom
                  type="radio"
                  label="Radio example 2"
                  name="radio"
                  id="formHorizontalRadios2"
                />
              </Form.Group>

              <ButtonToolbar>
                <Button variant="primary" type="submit" className="mr-3">
                  Submit
                </Button>

                <Button variant="primary" className="mr-3" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>

                <Button variant="outline-secondary" className="mr-3">
                  Cancel
                </Button>

                <DropdownButton
                  id="dropdown-basic-button"
                  title="Dropdown button"
                  inline
                >
                  <Dropdown.Header>Dropdown header</Dropdown.Header>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </ButtonToolbar>
            </Form>
          </Card.Body>
        </Card>
      </Grid>
    </>
  )
}
