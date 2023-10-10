import { Link } from "react-router-dom";
import UserI from "../userInterface";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState<UserI[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(allUsers => setUsers(allUsers))
      .catch(err => console.log(err));
  }, []);

  if (users.length === 0) return <span>Loading...</span>

  return (
    <>
    {users.map(user => <Link to={String(user.id)} state={{ user }} key={user.id} >{user.name}</Link>)}
    </>
  )
}