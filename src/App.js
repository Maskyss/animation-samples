import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cursor3D from "./pages/cursor3d";
import Scroll1 from "./pages/scroll1";
import Scroll2 from "./pages/scroll2";
import MettyYourStuff from "./pages/meetyourstaff";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/Cursor3D'>Cursor3D</Link>
            </li>
            <li>
              <Link to='/scroll1'>scroll1</Link>
            </li>
            <li>
              <Link to='/scroll2'>scroll2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/Cursor3D'>
            <Cursor3D />
          </Route>
          <Route path='/scroll1'>
            <Scroll1 />
          </Route>
          <Route path='/scroll2'>
            <Scroll2 />
          </Route>
          <Route path='/meety'>
            <MettyYourStuff />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
