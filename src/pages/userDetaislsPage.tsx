import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import UserI from "../userInterface"

export default function UserDefaultPage({  }) {
  const params = useParams();

  const [user, setUser] = useState<UserI>();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(res => res.json())
    .then(user => setUser(user))
    .catch(err => console.log(err));
  }, []);

  if (!user) return <span>Loading...</span>

  return (<div>
    <span>name: {user.name}</span>
    <span>email: {user.email}</span>
    <span>address: {user.address.street} {user.address.suite} {user.address.city}</span>
    <span>phone: {user.phone}</span>
    <Link to={'todos'}>Todos</Link>
  </div>)
}