import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { OverallStatusPage } from './pages/overall-status-page';

function App() {
  return (
    <AppWrapper className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={OverallStatusPage} />
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-items: center;
`;

export default App;
