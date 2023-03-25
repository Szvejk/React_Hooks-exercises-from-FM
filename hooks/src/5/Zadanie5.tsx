import { useRef, useState } from 'react';
import { useClickOutside } from '@react-hooks-library/core';

function Dropdown(props: {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}) {
	const { isOpen, setIsOpen } = props;
	const ref = useRef(null);

	useClickOutside(ref, () => {
		setIsOpen(false);
	});

	if (!isOpen) return null;

	return <div ref={ref}>This is a dropdown, click outside to close</div>;
}

export function Demo() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<div>
				<button onClick={() => setIsOpen(true)} disabled={isOpen}>
					Open Dropdown
				</button>
			</div>
			<div>
				<Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</div>
	);
}


