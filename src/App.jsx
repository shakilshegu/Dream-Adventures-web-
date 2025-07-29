
import './App.css'
import Layout from './components/layout/Layout'
import DestinationCards from './components/sections/DestinationCards'
import Features from './components/sections/Features'
import Hero from './components/sections/Hero'
function App() {

  return (
    <>
    <Layout>
      <Hero />
      <DestinationCards />
      <Features />
      {/* Additional sections will be added here */}
    </Layout>
    </>
  )
}

export default App
