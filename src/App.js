import Navbar from "./components/Navbar";
import Sensor from "./pages/Sensor";
import Camera from "./pages/Camera";
import Setting from "./pages/Setting";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Switch>
          <Route path="/sensor" component={Sensor} />
          <Route path="/camera" component={Camera} />
          <Route path="/setting" component={Setting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
