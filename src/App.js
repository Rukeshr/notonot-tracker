import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Shopping',
            day: 'Feb 28th',
            reminder: true
        },
        {
            id: 2,
            text: 'Going to Bengaluru',
            day: 'Mar 1th',
            reminder: true
        }
    ]
)

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('All tasks are Done!') }
    </div>
  )
}

export default App;
