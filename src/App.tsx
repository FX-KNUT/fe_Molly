import Main from "./components/Main";
import Gameboard from "./components/Gameboard";
import { BrowserView } from "electron";

const App: React.FC = () => {
  // const { app, BrowserView, BrowserWindow } = require("eletron");

  // app.whenReady().then(() => {
  //   const change = new BrowserWindow({ width: 800, height: 600 });
  //   const view = new BrowserView();
  //   change.setBrowserView(view);
  // });
  // 앱 사이즈 변경
  return (
    <div className="App">
      <Gameboard />
      <Main />
    </div>
  );
};

export default App;
