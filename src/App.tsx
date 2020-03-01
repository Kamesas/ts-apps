import React, { lazy, Suspense } from "react";
import "./App.scss";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/_common/Header/Header";

const Calculator = lazy(() => import("./pages/CalculatorPage"));
const Auth = lazy(() => import("./pages/Auth"));
const Main = lazy(() => import("./pages/Main"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={null}>
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/" exact>
              <Main />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
