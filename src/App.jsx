import { Suspense, useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Tickets from './Components/Tickets/Tickets'
import Tasks from './Components/Tasks/Tasks';
import ResolvedTask from './Components/ResolvedTask/ResolvedTask';
import Footer from './Components/Footer/Footer';


const fetchtickets = async () => {
  const res = await fetch('/tickets.json')
  return res.json()
};

const ticketPromise = fetchtickets();

function App() {

  const [progressCount, setProgressCount] = useState(0);
  const [resolveCount, setResolveCount] = useState(0);

  const [selectedTasks, setSelectedTasks] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  const removeTaskTicket = (taskTicket) => {
    const filteredTickets = selectedTasks.filter(tt => tt.id !== taskTicket.id);
    setSelectedTasks(filteredTickets);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='bg-gray-100'>
        <Banner progressCount={progressCount} resolveCount={resolveCount}></Banner>

        <div className="mx-auto mt-10 md:ms-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2">
              <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                <Tickets
                  ticketPromise={ticketPromise}
                  removeTaskTicket={removeTaskTicket}

                  progressCount={progressCount}
                  setProgressCount={setProgressCount}

                  selectedTasks={selectedTasks}
                  setSelectedTasks={setSelectedTasks}
                ></Tickets>
              </Suspense>
            </div>

            <div>
              <Tasks selectedTasks={selectedTasks} removeTaskTicket={removeTaskTicket}
                resolvedTask={resolvedTask} setResolvedTask={setResolvedTask}
                resolveCount={resolveCount} setResolveCount={setResolveCount}
                progressCount={progressCount} setProgressCount={setProgressCount}></Tasks>

              <ResolvedTask resolvedTask={resolvedTask}></ResolvedTask>
            </div>

          </div>
        </div>

        <Footer></Footer>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
