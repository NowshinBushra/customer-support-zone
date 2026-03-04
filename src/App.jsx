import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Tickets from './Components/Tickets/Tickets'


const fetchtickets = async() => {
  const res = await fetch('/tickets.json')
  return res.json()
};

function App() {

  const ticketPromise = fetchtickets();

  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
        <Tickets ticketPromise={ticketPromise}></Tickets>
      </Suspense>
      

      


    </>
  )
}

export default App
