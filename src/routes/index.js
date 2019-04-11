import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Footer from "../components/Footer/index";
import Main from "../pages/main/index";
//BrownserRouter indica que as rotas serão executadas no navegador
//Switch assegura que 2 ou mais rotas não sejam chamadas ao mesmo tempo
const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
