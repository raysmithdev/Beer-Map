import React from 'react'
import { Form, Button, FormGroup, FormControl } from 'react-bootstrap'

const FormView = () => (
  <Form inline>
    <FormGroup controlId="formInlineName">
      <FormControl type="text" placeholder="Enter a beer" />
    </FormGroup>
    {' '}
    <Button type="submit" bsStyle={"info"}>
      Search
    </Button>
  </Form>
)

export default FormView
