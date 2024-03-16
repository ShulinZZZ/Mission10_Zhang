import { useEffect, useState } from 'react';
import { BowlerInfo } from '../types/BowlerInfo';

function BowlersList() {
  const [bowlersData, setbowlersData] = useState<BowlerInfo[]>([]);

  //useEffect: data transfer
  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:3000/BowlerInfo');
      const f = await rsp.json();
      setbowlersData(f);
    };
    fetchBowlerData();
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
          {bowlersData.map((f) => {
            return (
              <tr key={f.BowlerID}>
                <td>{`${f.BowlerFirstName} ${f.BowlerMiddleInit} ${f.BowlerLastName}`}</td>
                <td>{f.teamName}</td>
                <td>{f.BowlerAddress}</td>
                <td>{f.BowlerCity}</td>
                <td>{f.BowlerState}</td>
                <td>{f.BowlerZip}</td>
                <td>{f.BowlerPhoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BowlersList;
