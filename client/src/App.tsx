import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  interface Car {
    name: string;
    country: {
      name: string;
      continent: string;
      population: number;
    };
  }

  const [array, setArray] = useState<Car[]>([]);

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log("response.data.car", response.data.cars);
    setArray(response.data.cars);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <p>Week 6 - Lesson 2</p>
      <div>
        {array.map((car, index) => (
          <p className="list-none" key={index}>
            {car.name} from {car.country.name} in {car.country.continent}.
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
