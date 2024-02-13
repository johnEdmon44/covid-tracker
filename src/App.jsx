import './App.css'
import CovidData from './covidData'
import RenderData from './renderData'

function App() {
  return (
    <main>
      <p style={{textAlign: "center"}}>The API is currently down. Please check out the <a href="https://65cb3b73ad3addaa01fbe67b--admirable-daffodil-91cd5b.netlify.app/">v2 version</a> of the application.</p>
      <CovidData render={(data) => <RenderData data={data} />} />
    </main>
  )
}

export default App
