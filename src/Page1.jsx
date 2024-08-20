import { useNavigate } from "react-router-dom"

const Page1 = () => {
    const navigate = useNavigate();
  return (
    <div style={{textAlign: 'center'}}>
        <h1>Page1</h1>
        <button onClick={()=>{
            navigate(-1)
        }}>go back</button>
        <button onClick={()=>{
            navigate('/')
        }}>go home</button>
    </div>
  )
}

export default Page1