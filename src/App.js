import React, { useState, useEffect } from "react";

import { Container, Row, Col, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./Mycard";

import Axios from "axios";

const App = () => {
  const [persondetails, setpersonDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE: ", data);

    const details = data.results[0];

    setpersonDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid className="p-4 bg-dark App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={persondetails} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
