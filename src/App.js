import Navbar from './Components/Navbar';
import News from './Components/News';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import Newsitem from './Components/Newsitem';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/NewsApp"  element={<News key="general"  category={"general"} />}> </Route>
          <Route exact path="/general"   element={<News key="general2" category={"general"} />}>  </Route>
          <Route exact path="/business"  element={<News key="business" category={"business"} /> }> </Route>
          <Route exact path="/sports"  element={<News key="sports" category={"sports"} />}></Route>
          <Route exact path="/technology"  element={<News key="technology" category={"technology"} />}>  </Route>
          <Route exact path="/health"  element={<News key="health" category={"health"} />}> </Route>
          <Route exact path="/science"  element={<News key="science" category={"science"} />}> </Route>
          <Route exact path="/entertainment"  element={<News key="entertainment" category={"entertainment"} />}> </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
