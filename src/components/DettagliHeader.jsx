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
        <p id="gradiP" className="">{temperaturaCelsius.toFixed(2)}°</p>
        <p className="" id="condizione">{condizione}</p>
        <div className="d-flex">
            <p className="fs-3 pe-2">MAX: {temperaturaCelsiusMax.toFixed(2)}°</p>
            <p className="fs-3 ps-2">MIN: {temperaturaCelsiusMin.toFixed(2)}°</p>
        </div>
      </div>
    </>
  );
};

export default DettagliHeader;
