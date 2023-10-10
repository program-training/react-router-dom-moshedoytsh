import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Task } from "../main";

export default function TodosPage() {
  const params = useParams();

  const [tasks, setTasks ] = useState<Task[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${params.id}`)
    .then(res => res.json())
    .then(tasks => setTasks(tasks))
    .catch(err => console.log(err));
  }, []);
  return (
    <>
    <h2>ToDos</h2>
    <ul>
      {tasks.map(task => {
        return <Link to={String(task.id)} key={task.id}><li>{task.title}</li></Link>
      })}
    </ul>
    </>
  )
}