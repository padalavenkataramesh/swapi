import List from "./components/list";
import { useState, useRef } from 'react';
import axios from "axios";
import { BsTrophyFill } from 'react-icons/bs';

function App()
{
  const [ data, setData ] = useState([]);
  const [ url, setUrl ] = useState('https://swapi.dev/api/starships?page=1&sort=crew');
  let mostFilms = useRef(0);
  let mostAppearedShip = useRef(null);

  const getData = async () =>
  {
    try
    {
      const result = await axios.get(url);

      const filteredData = result.data.results.filter(each => each.crew <= 10);

      filteredData.forEach(ship =>
      {
        const noOfFilms = ship.films.length;
        if (noOfFilms > mostFilms.current)
        {
          mostFilms.current = noOfFilms;
          mostAppearedShip.current = ship.name;
        }
      });

      setData([ ...data, ...result.data.results ]);
      setUrl(result.data.next);
    }
    catch (e)
    {
      console.log(e);
    }
  };

  return (
    <div className="baseBlockCntnr pdngLG">
      <div className="flexCol textCntr alignCntr justifyCntr yollowClr">
        <img className="iconBoxMD" alt="starwar-logo" src="https://res.cloudinary.com/dtuwybqcu/image/upload/v1692898770/star-wars-logo-0_tjexp4.png" />
        <h3 className="pdngVXSM">Sample React project using SWAPI API</h3>
        <h4 className="pdngVXSM">Results are filtered to starships with a crew size less than 10 and sorted by crew size</h4>
        <div className="flexRow alignCntr justifyCntr pdngVXSM">
          <span>The starship that has featured in the most films will show a </span>&nbsp;
          <BsTrophyFill size={24} />
        </div>
      </div>
      {data.length === 0 && <div className="flexRow justifyCntr">
        <button onClick={getData} className="actionBox pdngXS brdrTSM brdrRadiusXSM pointer" type="button">
          Get Startships
        </button>
      </div>}
      <div className="flexCol">
        {data.map((ship, index) => <List key={index} mostAppearedShip={mostAppearedShip.current} ship={ship} />)}
      </div>
      {data.length > 0 && url &&
        <div className="flexRow justifyCntr">
          <button onClick={getData} className="actionBox pdngXS brdrTSM brdrRadiusXSM pointer" type="button">
            Load more
          </button>
        </div>
      }
    </div>
  );
}

export default App;
