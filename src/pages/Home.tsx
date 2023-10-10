import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <>
      <Link to='products'>Products</Link>
      <Link to='users'>Users</Link>
    </>
  )
}