import styles from './App.css';
import Zadanie1 from './1/Zadanie1';
import Posts from './2/Posts';
import {Demo}  from './5/Zadanie5';
import useFetch from './4/useFetch' ;
import {Cart} from "./9/Zadanie9"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {SingleOrder} from "./SingleOrder"


export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

function App() {

	const {data,loading,error} = useFetch<Todo>("https://jsonplaceholder.typicode.com/todos")


if(loading) return <h1>LOADING...</h1>
if(error) return <h1>ERROR</h1>


	return (
		<div className='App'>
			{/* <ul>
			{data.map(post=>{
				return <li>{post.title}</li>
			})}
			</ul> 
			
			 <Zadanie1 />
			<Posts />
			<Demo /> */}
			<Cart />
		</div>
	// );
	// return <BrowserRouter>
	//  <header>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/business">Business</Link>
    //       </li>
    //       <li>
    //         <Link to="/business/clients">Clients</Link>
    //       </li>
    //       <li>
    //         <Link to="/business/orders">Orders</Link>
    //       </li>
    //       <li>
    //         <Link to="/business/orders/1">Order 1</Link>
    //       </li>
    //       <li>
    //         <Link to="/business/orders/add">Add</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    //   <Routes>
    //     <Route element={<div>Page 1</div>} path="" />
    //     <Route path="/business">
    //       <Route index element={<div>Business</div>} />
    //       <Route element={<div>Business/clients</div>} path="clients" />
    //       <Route path="orders">
    //         <Route index element={<div>Business/orders</div>} />
    //         <Route path=":orderId" element={<SingleOrder />} />
    //       </Route>
    //     </Route>
    //     <Route element={<div>404</div>} path="*"/>
    //   </Routes>
    // </BrowserRouter>
)}

export default App;
