import Main from "./components/Main";
import Gameboard from "./components/Gameboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Gameboard />
      <Main />
    </div>
  );
};

export default App;
