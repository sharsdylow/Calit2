import Navbar from "./components/Navbar";
import Sensor from "./pages/Sensor";
import Camera from "./pages/Camera";
import Setting from "./pages/Setting";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sensor" component={Sensor} />
          <Route path="/camera" component={Camera} />
          <Route path="/setting" component={Setting} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
