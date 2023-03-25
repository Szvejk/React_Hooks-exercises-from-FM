import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch<T>(url:string) {
	const [data, setData] = useState<T[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
 useEffect(() => {
	setLoading(true)
		axios
			.get(url)
			.then((response) => {
				setData(response.data as T[]);
			})
			.catch((err:Error) => {
				setError(err.message);
			})
			.finally(() => {
				setLoading(false);
			});
	},[url]);
    return{data,loading,error}
}

export default useFetch;
