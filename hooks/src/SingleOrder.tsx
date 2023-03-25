import { useParams, useNavigate } from 'react-router-dom'

export const SingleOrder = () => {

  const param=useParams()
  const navigate = useNavigate();
  console.log(param); // {orderId: '1'}

  const goToHome=()=>{
navigate("/")
  }
  return (
    <button onClick={goToHome}>SingleOrder</button>
  )
}