import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { StateProvider } from './store/store'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <StateProvider>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Layout>
        </StateProvider>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
