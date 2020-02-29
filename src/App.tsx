import React, { lazy, Suspense } from "react";
import "./App.scss";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/_common/Header/Header";

const Auth = lazy(() => import("./pages/Auth"));
const Main = lazy(() => import("./pages/Main"));

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <Suspense fallback={null}>
          <Switch>
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
