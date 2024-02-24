import Carousel from './components/Carousel'
import './App.css'

import { images } from './data/imageData.json'

function App() {

  return (
    <>
      <h1 className='heading'>Image Carousel</h1>
      <Carousel data={images} />
    </>
  )
}

export default App
