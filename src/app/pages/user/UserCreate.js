import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Col } from "react-bootstrap";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { LayoutSplashScreen } from "../../../_metronic/layout";
import { useHistory } from "react-router-dom";
import MultiSelectAll from "../../utility/MultiSelectAll";

export const UserCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  

  return (
    <Card>
      <CardHeader title="Create User">
        <CardHeaderToolbar>
          <Button
            className="btn btn-danger"
            onClick={() =>
              history.push("/administration/master-user/user/create")
            }
          >
            Create
          </Button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Username *</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Fullname *</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Re password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>No Handphone</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <MultiSelectAll
                options={options}
                value={"admin"}
                placeholder="Select Role..."
              />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>{" "}
      </CardBody>
    </Card>
  );
};
