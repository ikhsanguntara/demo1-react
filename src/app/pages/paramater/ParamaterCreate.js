import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Col } from "react-bootstrap";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { LayoutSplashScreen } from "../../../_metronic/layout";
import { useHistory } from "react-router-dom";
import { fetchGroupParam, addItem, selectGroupParam } from "./parameterSlice";
import { showErrorDialog, showSuccessDialog } from "../../utility";
import Select from "react-select";
export const ParamaterCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const groupParam = useSelector(selectGroupParam);

  const [parameterName, setParameterName] = useState("");
  const [parameterValue, setParameterValue] = useState("");
  const [parameterGroup, setParameterGroup] = useState("");

  useEffect(() => {
    async function fetchMyAPI() {
      // await dispatch(resetData());

      // Fetch data on first load
      await dispatch(
        fetchGroupParam({
          pageNo: 1,
          pageSize: -1,
        })
      );
    }
    fetchMyAPI();
  }, [dispatch]);

  // const handleGroupChange = (value) => {
  //   setParameterGroup(value.value);
  // };

  // const groupOptions = groupParam.map((e) => {
  //   return {
  //     value: e.paramgroup_id,
  //     label: e.paramgroup_name,
  //   };
  // });

  // const getValueGroup = (value, options) => {
  //   const return_value = options.filter((val) => value === val.value);
  //   return return_value;
  // };

  const handleSave = async () => {
    //Validasi
    if (parameterGroup === "") {
      return showErrorDialog("Please Select Parameter Group First");
    }
    if (parameterName === "") {
      return showErrorDialog("Please Input Parameter Name First");
    }
    if (parameterValue === "") {
      return showErrorDialog("Please Input Parameter Value First");
    }

    const params = {
      paramgroup_id: parameterGroup,
      param_Name: parameterName,
      param_value: parameterValue,
    };
    try {
      const response = await dispatch(addItem(params));
      if (response.payload.status === 200) {
        const action = await showSuccessDialog(response.payload.message);
        if (action.isConfirmed)
          history.push("/administration/bussiness-parameter/parameter");
      } else {
        showErrorDialog(response.payload.message);
      }
    } catch (error) {
      showErrorDialog(error.message);
      console.log(error.message);
    }
  };

  return (
    <>
        <Card>
          <CardHeader title="Create User">
            <CardHeaderToolbar>
              <Button className="btn btn-danger">Save</Button>
            </CardHeaderToolbar>
          </CardHeader>
          <CardBody>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Parameter Group *</Form.Label>
                  {/* <Select
                    options={groupOptions}
                    value={getValueGroup(parameterGroup, groupOptions)}
                    placeholder="Select Group..."
                    onChange={handleGroupChange}
                  /> */}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Paramater Name *</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Paramater Value *</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </Form.Row>
            </Form>{" "}
          </CardBody>
        </Card>
    </>
  );
};
