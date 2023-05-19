import './App.css'
import CovidData from './covidData'
import RenderData from './renderData'

function App() {
  return (
    <>
      <CovidData render={(data) => <RenderData data={data} />} />
    </>
  )
}

export default App
