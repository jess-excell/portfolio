import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import useHeader from './hooks/useHeader';
import { ModalProvider } from './contexts/modalContext';

function App() {
  const { scrolled, width } = useHeader();

  return (
    <React.Fragment>
      <ModalProvider>
        <React.Fragment>
          <Header scrolled={scrolled} width={width}/>
          <MainContent scrolled={scrolled} width={width}/>
          <Footer />
        </React.Fragment>
      </ModalProvider>
    </React.Fragment>
  )
};

export default App;
