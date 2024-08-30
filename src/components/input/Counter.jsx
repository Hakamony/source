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
		<div
			className={twMerge(
				'mx-2 flex h-12 items-center rounded-lg border-2 border-solid border-prime-dark',
				props.className,
			)}
		>
			<button
				type="button"
				onClick={handlePlus}
				className="rounded-r-lg text-center text-4xl font-bold text-prime-dark"
			>
				+
			</button>
			<div className="flex items-center justify-center text-center text-6xl text-white">
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
