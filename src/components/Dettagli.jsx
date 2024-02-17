import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "../CSS/StyleDettagli.css";

function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

function Dettagli({
  vento,
  pioggia,
  gradi,
  umidita,
  visibilita,
  condizione,
  descrizione,
  alba,
  tramonto,
}) {
  const temperaturaCelsius = convertFahrenheitToCelsius(gradi);

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Row
          id="containerDettagli"
          className="text-center d-flex justify-content-center flex-wrap"
        >
          <Card className="cardDettagli">
            <Card.Title>Temp. Percepita</Card.Title>
            <Card.Text>{temperaturaCelsius.toFixed(2)} °C</Card.Text>
          </Card>

          <Card className="cardDettagli">
            <Card.Title>Precipitazioni</Card.Title>
            <Card.Text>{pioggia}%</Card.Text>
          </Card>

          <Card className="cardDettagli">
            <Card.Title>Umidità</Card.Title>
            <Card.Text>{umidita}%</Card.Text>
          </Card>

          <Card className="cardDettagli">
            <Card.Title>Vento</Card.Title>
            <Card.Text>{vento} km/h</Card.Text>
          </Card>

          <Card className="cardDettagli">
            <Card.Title>Visibilità</Card.Title>
            <Card.Text>{visibilita}km</Card.Text>
          </Card>

          <Card className="cardDettagli">
            <Card.Title>Condizione: {condizione}</Card.Title>
            <Card.Text>{descrizione}</Card.Text>
          </Card>

          <Card className="cardDettagli">
            <Card.Title>Alba</Card.Title>
            <Card.Text>{alba}</Card.Text>
          </Card>

          <Card className="cardDettagli">
            <Card.Title>Tramonto</Card.Title>
            <Card.Text>{tramonto}</Card.Text>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Dettagli;
