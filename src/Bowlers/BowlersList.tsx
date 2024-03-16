import { useEffect, useState } from 'react';
import { BowlerInfo } from '../types/BowlerInfo';

function BowlersList() {
  const [bowlersData, setbowlersData] = useState<BowlerInfo[]>([]);

  //useEffect: data transfer
  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5281/api/Bowler');
      const b = await rsp.json();
      setbowlersData(b);
    };
    fetchBowlerData();
    //if we do not find anything, return empty array
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowler Information</h4>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlersData.map((b) => {
            return (
              <tr key={b.bowlerID}>
                <td>{`${b.bowlerFirstName} ${b.bowlerMiddleInit} ${b.bowlerLastName}`}</td>
                <td>{b.team.teamName}</td>
                <td>{b.bowlerAddress}</td>
                <td>{b.bowlerCity}</td>
                <td>{b.bowlerState}</td>
                <td>{b.bowlerZip}</td>
                <td>{b.bowlerPhoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BowlersList;
