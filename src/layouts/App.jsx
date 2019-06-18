import React, { Suspense } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from 'utils/theme/theme'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from "store/store";
import routes from 'router/route'
import { withTranslation } from 'react-i18next';
import Header from 'component/Header/Header';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Provider store={configureStore()}>
        <Wrapper />
      </Provider>
    </Suspense>
  );
}

export default App;

const Loader = () => (
  <div className="App">
    <img src={'https://i.pinimg.com/originals/f9/56/88/f95688dd1ac02f459fe016d141a67bd2.gif'} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

const Container = () => {
  return(
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Switch>
          {routes.map(({ component, name, path, exact }) => {
            return <Route path={path} component={component} key={name} exact={exact} />
          })}
          <Redirect to={'/page/0'}/>
        </Switch>
      </Router>
    </MuiThemeProvider>
  )
};

const Wrapper = withTranslation()(Container)