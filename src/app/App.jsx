import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme } from 'styles/themes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import SiteNav from 'components/layout/navigation/SiteNav';
import { siteLinks } from 'utils/data';
import Home from 'components/screens/Home';
import Gallery from 'components/screens/Gallery';
import Artists from 'components/screens/Artists';
import Artwork from 'components/screens/Artwork';
import Artist from 'components/screens/Artist';
import AboutApp from 'components/screens/AboutApp';
import NotFound from 'components/screens/NotFound';
import ScrollUpButton from 'components/layout/buttons/ScrollUpButton';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window instanceof Window) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

const App = () => {
  const [theme, setTheme] = useState('default');

  const handleThemeToggle = () => {
    if (theme === 'default') {
      setTheme('darkTheme');
    } else {
      setTheme('default');
    }
    console.log(theme);
  };
  return (
    <ThemeProvider theme={theme === 'default' ? defaultTheme : darkTheme}>
      <Router>
        <div
          id='app'
          style={
            theme === 'default'
              ? { backgroundColor: '#eee' }
              : { backgroundColor: '#111' }
          }
        >
          <ScrollToTop />
          <SiteNav
            links={siteLinks}
            toggleTheme={handleThemeToggle}
            theme={theme}
          />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/gallery'} component={Gallery} />
            <Route exact path={'/artists'} component={Artists} />
            <Route exact path={'/gallery/artwork/:id'} component={Artwork} />
            <Route exact path={'/artists/:id'} component={Artist} />
            <Route exact path={'/about'} component={AboutApp} />
            <Route component={NotFound} />
          </Switch>
          <ScrollUpButton />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
