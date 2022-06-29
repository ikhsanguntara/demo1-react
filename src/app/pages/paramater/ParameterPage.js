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

export const ParameterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Card>
      <CardHeader title="Paramater">
        <CardHeaderToolbar>
          <Button
            className="btn btn-danger"
            onClick={() =>
              history.push(
                "/administration/bussiness-parameter/paramater/create"
              )
            }
          >
            Create
          </Button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <h1>paramater</h1>
      </CardBody>
    </Card>
  );
};
