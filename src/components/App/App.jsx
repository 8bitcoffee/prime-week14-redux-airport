import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const airlineList = useSelector(store => store.airlineList);
  const [airlineName, setAirlineName] = useState("");
  const [numPlanes, setNumPlanes] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let action={
      type: "ADD_AIRLINE",
      payload: {
        name: airlineName,
        planes: numPlanes
      }
    };
    dispatch(action);
    setAirlineName("");
    setNumPlanes("");
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={handleSubmit}>
        Name: <input value={airlineName} placeholder='Airline Name' onChange={(e)=>setAirlineName(e.target.value)}/>
        <br></br>
        Number: <input value={numPlanes} type="number" placeholder='Number of planes' onChange={(e)=>setNumPlanes(e.target.value)}/>
        <br></br>
        <button>Add Airline</button>
      </form>
      <br></br>
      <hr></hr>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Airline</th>
            <th># of planes</th>
          </tr>
        </thead>
        {airlineList.map((airline,index) => 
          <tr key={index}>
            <td>{airline.name}</td>
            <td>{airline.planes}</td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default App;
