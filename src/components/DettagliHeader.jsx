function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

const DettagliHeader = ({gradi, condizione, gradiMax, gradiMin}) => {
  const temperaturaCelsius = convertFahrenheitToCelsius(gradi);
  const temperaturaCelsiusMax = convertFahrenheitToCelsius(gradiMax);
  const temperaturaCelsiusMin = convertFahrenheitToCelsius(gradiMin);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <p id="gradiP" className="text-light">{temperaturaCelsius.toFixed(2)}°</p>
        <p className="text-light" id="condizione">{condizione}</p>
        <div className="d-flex">
            <p className="text-light pe-2">MAX: {temperaturaCelsiusMax.toFixed(2)}°</p>
            <p className="text-light ps-2">MIN: {temperaturaCelsiusMin.toFixed(2)}°</p>
        </div>
      </div>
    </>
  );
};

export default DettagliHeader;
