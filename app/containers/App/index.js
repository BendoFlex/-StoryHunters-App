/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

<<<<<<< HEAD
import HomeSearch from 'containers/HomeSearch/HomeSearch';
import LoginPage from 'containers/LoginPage';
import RegisterPage from 'containers/RegisterPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/CustomHeader/Header';
=======
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
>>>>>>> e977ce4... init react boiler
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={HomeSearch} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
=======
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
>>>>>>> e977ce4... init react boiler
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
