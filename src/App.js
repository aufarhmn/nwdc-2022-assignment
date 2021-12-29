import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import Main from './components/Main';
import About from './components/About';
import Motivation from './components/Motivation';
import MySkills from './components/MySkills';
import Tech from "./components/Tech";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return <>
  <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
    <SoundBar />
    <AnimatePresence exitBeforeEnter>
    <Switch  location={location} key={location.pathname}>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/motivation" component={Motivation}/>
          <Route exact path="/skills" component={MySkills}/>
          <Route exact path="/tech" component={Tech}/>
        </Switch>
    </AnimatePresence>
        </ThemeProvider>
        </>
}

export default App