import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Tickets from './Components/Tickets/Tickets'
import Tasks from './Components/Tasks/Tasks';


const fetchtickets = async () => {
  const res = await fetch('/tickets.json')
  return res.json()
};

const ticketPromise = fetchtickets();

function App() {

  const [selectedTasks, setSelectedTasks] = useState([]);

  const [progressCount, setProgressCount] = useState(0);


  return (
    <>
      <Navbar></Navbar>

      <Banner progressCount={progressCount}></Banner>

      <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
        <Tickets
          ticketPromise={ticketPromise}
          progressCount={progressCount}
          setProgressCount={setProgressCount}

          selectedTasks={selectedTasks}
          setSelectedTasks={setSelectedTasks}
        ></Tickets>
      </Suspense>

      <Tasks></Tasks>





    </>
  )
}

export default App
