import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Card = () => {
    const params = useParams();
    const [user, setUser] = useState({});

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(response => response.json())
      .then(data => setUser(data));
    },[])
  return (
    <div style={{textAlign: 'center'}}>
        <h1>User</h1>
        <h1>{user.name}</h1>
    </div>
  )
}

export default Card