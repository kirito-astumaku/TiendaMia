
import NAvbar from "./components/NAvbar";
import { BrowserRouter } from 'react-router-dom';
import Rutas from "./routers/Rutas";
import './app.css'

function App() {

  return (
    <div className="padre">
    <BrowserRouter>
      <NAvbar/>
      <Rutas/>
    </BrowserRouter>
     
    </div>
  )
}

export default App
