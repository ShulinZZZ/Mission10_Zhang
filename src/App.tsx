import './App.css';
import Header from './Header';
import BowlersList from './Bowlers/BowlersList';
// import bowlersData from './BowlingLeague.sqlite';

function Welcome() {
  return (
    <div>
      <h1> Welcome to Bowling League</h1>
      <p>
        This site lists out the information about the bowlers on Marlins or
        Sharks Teams in the Bowling League
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header title="Mission 10_Zhang -- BOWLING LEAGUE" />
      <Welcome />
      <BowlersList />
    </div>
  );
}

export default App;
