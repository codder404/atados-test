import React from 'react';

import Layout from './components/Layout';
import Hero from './components/Hero';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
    <GlobalStyles />
    <Layout>
      <Hero />
    </Layout>
    </>
  );
}

export default App;
