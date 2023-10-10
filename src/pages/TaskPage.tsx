import { useParams } from "react-router-dom";
import { Task } from "../main";
import { useEffect, useState } from "react";

export default function TaskPage() {
  const params = useParams();

  const [task, setTask ] = useState<Task>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${params.taskID}`)
    .then(res => res.json())
    .then(task => setTask(task))
    .catch(err => console.log(err));
  }, []);
  
  return (<>
  <h3>{task?.title}</h3>
  <span>Completed: {task?.completed ? 'Yes' : 'No'}</span>
  </>)
}