import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { LayoutSplashScreen } from "../../../_metronic/layout";
import { useHistory } from "react-router-dom";

export const UserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Card>
      <CardHeader title="User">
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
        <h1>Body</h1>
      </CardBody>
    </Card>
  );
};
