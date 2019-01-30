import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header1 from "../elements/Header/Header1";
import Home from "../../containers/HomeContainer";
import Movie from "../../containers/MovieContainer";
import NotFound from "../elements/NotFound/NotFound";
import Kategorite from "../Pages/kategorite/Kategorite";
import Serialet from "../Pages/seriale/Serialet";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header1 />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/kategorite" component={Kategorite} exact />
        <Route path="/seriale" component={Serialet} exact />
        <Route path="/:movieId" component={Movie} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
