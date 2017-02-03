import React, { PropTypes } from 'react';

import Layout from './shared/Layout/Layout';
import Header from './components/Header/Header';
import Navbar from './components/Header/components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const App = ({ children }) => (
  <Layout>
    <Header>
      <Navbar />
    </Header>
    <Main>
      {children}
    </Main>
    <Footer />
  </Layout>
);

App.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default App;
