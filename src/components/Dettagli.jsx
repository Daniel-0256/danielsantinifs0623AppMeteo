import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

function Dettagli({ vento, pioggia, gradi, umidita, visibilita, condizione, descrizione, alba, tramonto}) {
  const temperaturaCelsius = convertFahrenheitToCelsius(gradi);

  return (
    <Container>
      <Row className="text-center d-flex justify-content-center">
        <Col sm={4} lg={5} className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>Temp. Percepita</Card.Title>
              <Card.Text>{temperaturaCelsius.toFixed(2)} °C</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={5} className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>Precipitazioni</Card.Title>
              <Card.Text>{pioggia}%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={5} className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>Umidità</Card.Title>
              <Card.Text>{umidita}%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={5} className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>Vento</Card.Title>
              <Card.Text>{vento} km/h</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={5} className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>Visibilità</Card.Title>
              <Card.Text>{visibilita}km</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={5} className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>Condizione: {condizione}</Card.Title>
              <Card.Text>{descrizione}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={5} className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>Alba</Card.Title>
              <Card.Text>{alba}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={5} className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>Tramonto</Card.Title>
              <Card.Text>{tramonto}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dettagli;

