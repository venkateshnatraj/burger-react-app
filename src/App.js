import React from 'react'
import Layout from './components/layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { StateProvider } from './store/store'

function App() {
  return (
    <div>
      <StateProvider>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </StateProvider>
    </div>
  )
}

export default App
