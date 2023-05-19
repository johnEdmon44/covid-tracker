import './App.css'
import CovidData from './covidData'
import RenderData from './renderData'

function App() {
  return (
    <>
      <h1>Covid tracker</h1>
      <CovidData render={(data) => <RenderData data={data} />} />
    </>
  )
}

export default App
