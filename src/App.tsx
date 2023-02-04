// external imports
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// internal imports
import Home from "./routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";

// styles
import { GlobalStyle } from "./global.styles";

// component
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
};

export default App;
