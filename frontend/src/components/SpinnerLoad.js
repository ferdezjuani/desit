import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

const SpinnerLoad = () => {
  return (
    <div>
      <Spinner
        animation="border"
        variant="warning"
      />
    </div>
  );
};

export default SpinnerLoad;
