import React from 'react';
import Dashboad from './Components/dashboad/Dashboad';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {

    return (<div className='main-content' >
      <Header />
      <Dashboad/>
      <Footer/>
    </div>)
  }
}
export default App;
