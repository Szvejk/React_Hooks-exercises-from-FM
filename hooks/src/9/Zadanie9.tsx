import { useReducer } from 'react';

interface Product {
	id: number;
	quantity: number;
	title: string;
}

// typy funkcji reducera
type ActionType =
	| { type: 'addToCart'; payload: Product }
	| { type: 'deleteFromCart'; payload: Product['id'] }
	| {
			type: 'changeQuantity';
			payload: Product;
	  }
	| { type: 'clear' };

const initialState: Product[] = [];

function reducer(
	state: typeof initialState,
	action: Readonly<ActionType>
): typeof initialState {
	switch (action.type) {
		case 'addToCart':
			const repetitionIndex = state.findIndex(
				(el) => el.title === action.payload.title
			);
			if (repetitionIndex !== -1) {
				const copy = [...state];
				copy[repetitionIndex].quantity += 1;
				return copy;
			} else return [...state, action.payload];

		case 'deleteFromCart':
			return state.filter((product) => product.id !== action.payload);
		case 'changeQuantity':
			const deleteIndex = state.findIndex(
				(el) => el.title === action.payload.title
			);

			if (deleteIndex !== -1 && state[deleteIndex].quantity > 0) {
				const copy = [...state];
				copy[deleteIndex].quantity -= 1;
				return copy;
			} else {
				return [...state];
			}

		case 'clear':
			return [];
		default:
			return state;
	}
}

const product1 = {
	id: 1,
	quantity: 1,
	title: 'botki',
};
// Dzięki temu w komponencie otrzymamy później podpowiadanie składni
export function Cart() {
	const [state, dispatch] = useReducer(reducer, initialState);

	console.log(state);
	return (
		<>
			<button
				onClick={() => dispatch({ type: 'addToCart', payload: product1 })}
			>
				Add product to cart
			</button>
			<button onClick={() => dispatch({ type: 'deleteFromCart' })}>-</button>
			<button
				onClick={() =>
					dispatch({
						type: 'changeQuantity',
						payload: { title: 'botki', quantity: 1, id: 1 },
					})
				}
			>
				Change
			</button>
			<h2>Produkty w koszyku</h2>
			{state.map((product) => {
				return (
					<li>
						{product.title} - {product.quantity}
					</li>
				);
			})}
		</>
	);
}
