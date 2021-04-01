import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import PositionBox from './components/PositionBox'
import ThreeImage from './components/ThreeImage'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      
      {/******Router Home******/}
      <Route
        path="/"
        exact
      >
        <PositionBox />
        <ThreeImage />
      </Route>

      {/******Router Home******/}
      <Route
        path="/xe-khach"
      >
        <a href="">Hello</a>
      </Route>

      <Footer />
    </Router>
  )
}

export default App
