// external imports
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// internal imports
import Home from "./routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";
import NotFound from "./routes/not-found/not-found.component";

// styles
import { GlobalStyle } from "./global.styles";
import Footer from "./components/footer/footer.component";

// component
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='*' element={ <NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
