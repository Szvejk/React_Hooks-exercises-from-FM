import React, { useState, useEffect } from 'react';
import styles from './Zadanie2.module.css';
import Axios from 'axios';

interface SinglePost {
	title: string;
	body: string;
	id: string;
}

const usePosts=()=>{
    const [page, setPage] = useState(1);
	const [post, setPost] = useState<SinglePost[]>([]);
    const [currentPost,setCurrentPosts]=useState<SinglePost[]>([])

	useEffect(() => {
		Axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
			setPost(res.data as SinglePost[]);
            setCurrentPosts(res.data.slice(0,4))
		});
	}, []);

    useEffect(()=>{
        setCurrentPosts(post.slice((page-1)*4,page*4))
    },[page])

	const plusPage = () => {
        const maxPage = Math.ceil(post.length / 4);
        if(page<maxPage){
            setPage((prev) => prev+1);
        }
	};
	const minusPage = () => {
		if(page>0){
            setPage((prev) => prev-1);
        }
	};

    return {currentPost,minusPage,page,plusPage}
}

const Posts = () => {

    const {currentPost,minusPage,page,plusPage}=usePosts()
	
	return (
		<>
			{currentPost.map((el) => {
				return (
					<div className={styles.wrapper} key={el.title}>
						<p>{el.title}</p>
						<p>{el.body}</p>
					</div>
				);
			})}

			<div>
				<button onClick={minusPage}>MINUS</button>
				<p>{page}</p>
				<button onClick={plusPage}>PLUS</button>
			</div>
		</>
	);
};

export default Posts;

// ## Zadanie 2 (useEffect)S
// Stwórz komponent Posts który pobierze dane Sze strony https://jsonplaceholder.typicode.com/posts pobrane dane załaduj do hooka useState, a następnie wyświetl title i body każdego posta. Pamiętaj żeby dane pobrały sie TYLKO RAZ (w strictMode w trybie deweloperskim od React 18 useEffect wykonuje sie zawsze dwa razy, inne sposoby na pobieranie danych poznasz razem z najczęściej używanymi bibliotekami)
