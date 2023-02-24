// external imports
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// internal imports
import Home from "./routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";
import Awards from "./routes/awards/awards.component";
import Team from "./routes/team/team.component";
import Contact from "./routes/contact/contact.component";
import NotFound from "./routes/not-found/not-found.component";
import Footer from "./components/footer/footer.component";

// styles
import { GlobalStyle } from "./global.styles";

// component
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='/awards' element={ <Awards /> } />
        <Route path='/team' element={ <Team /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='*' element={ <NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
