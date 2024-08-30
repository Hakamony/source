'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

function Counter({ ...props }) {
	const [num, setNum] = useState(0);

	const handlePlus = () => {
		setNum((p) => p + 1);
	};

	const handleMinus = () => {
		if (num > 0) {
			setNum((p) => p - 1);
		}
	};
	return (
		<div className={twMerge('flex items-center justify-around', props.className)}>
			<button
				type="button"
				onClick={handlePlus}
				className="rounded-r-lg text-center text-4xl font-bold text-prime-dark"
			>
				+
			</button>
			<div className="flex items-center justify-center text-center text-4xl font-bold text-prime-dark">
				{num}
			</div>
			<button
				type="button"
				onClick={handleMinus}
				className="items-center rounded-l-lg text-center text-4xl font-bold text-prime-dark"
			>
				-
			</button>
		</div>
	);
}

export default Counter;
