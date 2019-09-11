import React from 'react'

import Flex from '../../components/Flex'
import { Card, Table, Button } from 'react-bootstrap'
import { FiPlusCircle } from 'react-icons/fi'

export default function Tables() {
  return (
    <>
      <Card>
        <Card.Body>
          <Flex justify="space-between" align="center" className="mb-3">
            <h1>Table</h1>

            <Button variant="outline-primary">
              <FiPlusCircle />
              Adicionar
            </Button>
          </Flex>
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>Unknown</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Larry the Bird</td>
                  <td>Unknown</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Larry the Bird</td>
                  <td>Unknown</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Larry the Bird</td>
                  <td>Unknown</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </>
        </Card.Body>
      </Card>
    </>
  )
}
