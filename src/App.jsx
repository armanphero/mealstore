import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader';

function App() {
  const {state} = useNavigation();
  return (
    <>
      <Header />
      <div className='min-h-[calc(100vh-136px)]'>
        {
          state === "loading" && <Loader />
        }
        {
          state !== "loading" && <Outlet></Outlet>
        }
      </div>
      <Footer />
    </>
  )
}

export default App
