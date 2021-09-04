import React, {Suspense, useState, useEffect} from 'react';
import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import Layout from './components/Layout'
import styled from 'styled-components';
 

const Loader = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  display: flex;
  justify-content: center;
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  align-items: center;
`;

const Loadwrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const screenLoad = () => (
    <Loadwrap>
      <Loader type="Bars" color="#e20074" height={50} width={50} />
    </Loadwrap>
  );

function App() {
    return (
        <Router>
            <Layout>
            <Suspense fallback={screenLoad()}>
                <AppWithRouterAccess/>
            </Suspense> 
            </Layout>
        </Router>
    );
}

export default App;
