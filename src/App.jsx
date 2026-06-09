// import './App.css'
import Home from './pages/Home.jsx'
import CookieBanner from './components/overlay/cookie-overlay.jsx';
import PentausSide from './assets/pentauslogoside.png';

function App() {

  return (
    <>
      <Home />
      <img src={PentausSide} alt="Penta" className="fixed left-0 w-[25px] top-1/2 translate-y-1/2 z-30 lg:w-[40px]" />
      <CookieBanner />
    </>
  )
}

export default App
