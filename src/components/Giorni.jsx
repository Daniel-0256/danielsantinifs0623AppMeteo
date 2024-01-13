/* 
import Card from "react-bootstrap/Card";

const Giorni = () => {
  const [orario, setOrario] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (searchValue !== "") {
          const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}?&key=HTGMVQ4MGW4SF4CU6KS6ZG37K`
          );

          if (response.ok) {
            const data = await response.json();
            setOrario([data]);
          } else {
            alert("errore di caricamento");
          }
        }
      } catch (error) {
        console.log("Errore:", error);
      }
    };

    fetchWeatherData();
  }, [searchValue]);

  return (
    <Row>
      {orario.map((ora, index) => (
        <Col key={index} lg={1} className="pb-1 pt-1">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                <h3>{ora.days[0].hours.datetime}</h3>
              </Card.Title>
              <Card.Text>
                <p>{ora.days[0].hours.temp}</p>
                <p>{ora.days[0].hours.conditions}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          ;
        </Col>
      ))}
    </Row>
  );
};

export default Giorni;
 */
