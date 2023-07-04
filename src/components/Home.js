import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import { NewButtonPanel } from './NewButtonPanel'
import { SearchView } from './SearchView'
const Home = () => {
  return (
    <>
        <ResponsiveAppBar />
        <NewButtonPanel />
        <SearchView/>
    </>
  )
}

export default Home