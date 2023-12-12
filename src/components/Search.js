import React from "react";
import Form from 'react-bootstrap/Form';
import 'bootstrap';

function Search() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>search</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          search
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default Search;