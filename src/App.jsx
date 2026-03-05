import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Tickets from './Components/Tickets/Tickets'
import Tasks from './Components/Tasks/Tasks';
import ResolvedTask from './Components/ResolvedTask/ResolvedTask';


const fetchtickets = async () => {
  const res = await fetch('/tickets.json')
  return res.json()
};

const ticketPromise = fetchtickets();

function App() {

  const [progressCount, setProgressCount] = useState(0);
  const [resolveCount, setResolveCount] = useState(0);

  const [selectedTasks, setSelectedTasks] = useState([]);
  // const [resolvedTask, setResolvedTask] = useState([])

  return (
    <>
      <Navbar></Navbar>

      <Banner progressCount={progressCount} resolveCount={resolveCount}></Banner>

      <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
        <Tickets
          ticketPromise={ticketPromise}
          progressCount={progressCount}
          setProgressCount={setProgressCount}

          selectedTasks={selectedTasks}
          setSelectedTasks={setSelectedTasks}
        ></Tickets>
      </Suspense>

      <Tasks selectedTasks={selectedTasks} 
        resolveCount={resolveCount} setResolveCount={setResolveCount}
        progressCount={progressCount} setProgressCount={setProgressCount}></Tasks>

      <ResolvedTask ></ResolvedTask>

    </>
  )
}

export default App
