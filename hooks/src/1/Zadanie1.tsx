import React, { useState } from 'react';
import styles from './Zadanie1.module.css';

const kidForm = [
	{
		name: 'Barbara',
		age: 10,
	},
	{
		name: 'Katarzyna',
		age: 12,
	},
];

const Zadanie1 = () => {
	const [kids, setKids] = useState(kidForm);
	const [name, setName] = useState('');
	const [age, setAge] = useState("");

	const handleSubmit = () => {
		setKids((prev) => [...prev, { age:Number(age), name }]);
        setName("")
        setAge("")
	};

	console.log(kids);

	return (
		<div className={styles.wrapper}>
			<div className={styles.form}>
				<label htmlFor='name'> Imię </label>
				<input
					type='text'
					id='nameID'
					onChange={(e) => setName(e.target.value)}
					value={name}
				></input>
				<label htmlFor='age'> Age </label>
				<input
					type='number'
					id='ageID'
					onChange={(e) => setAge(e.target.value)}
					value={age}
				></input>
				<button className={styles.submit} onClick={handleSubmit}>
					Submit
				</button>
			</div>
			<div>{kids.map((el) => <div key={el.name}>{el.name} {el.age}</div>)}</div>
		</div>
	);
};

export default Zadanie1;
