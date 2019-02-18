import React, { Component } from 'react'
import './App.css'
import { Layout, Header, Navigation, Content } from 'react-mdl'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

class App extends Component {
  render() {
    return (
      <div style={{ height: '300px', position: 'relative' }}>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <span style={{ color: '#ddd' }} />
                <strong>Mario-sakti Shopping cart</strong>
              </span>
            }
          >
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </Navigation>
          </Header>
          {/* <Drawer title="Title">
            <h1>Welcome to the site</h1>
          </Drawer> */}
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App
