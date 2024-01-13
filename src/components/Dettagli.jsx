import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

function Dettagli({ vento, pioggia, gradi, umidita }) { 
  const temperaturaCelsius = convertFahrenheitToCelsius(gradi);

  return (
    <ListGroup>
      <ListGroup.Item className='dettagli'>Velocità del vento: {vento} km/h</ListGroup.Item>
      <ListGroup.Item className='dettagli'>Probabilità di pioggia: {pioggia}%</ListGroup.Item>
      <ListGroup.Item className='dettagli'>Temperatura: {temperaturaCelsius.toFixed(2)} °C</ListGroup.Item>
      <ListGroup.Item className='dettagli'>Umidità: {umidita}%</ListGroup.Item>
    </ListGroup>
  );
}

export default Dettagli;
