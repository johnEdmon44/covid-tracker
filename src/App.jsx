import './App.css'
import CovidData from './covidData'
import RenderData from './renderData'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <CovidData render={(data) => <RenderData data={data} />} />
    </>
  )
}

export default App
