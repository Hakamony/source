'use client';

import { twMerge } from 'tailwind-merge';
import { FaCircle } from 'react-icons/fa6';
import { FaRegCircle } from 'react-icons/fa';

export default function EventsNav({ ...props }) {
	const steps = [];
	for (let i = 0; i < 4; i++) {
		steps.push(
			<li key={i}>
				{i + 1 === props.active ? (
					<FaCircle className="text-2xl" />
				) : i + 1 > props.active ? (
					<FaRegCircle className="text-2xl" />
				) : (
					<FaCircle className="text-2xl" />
				)}
			</li>,
		);
	}
	return (
		<nav className="mb-12 flex justify-center">
			<ul className="flex w-fit justify-center gap-8 rounded-lg bg-white px-8 py-2 drop-shadow-md">
				{steps}
			</ul>
		</nav>
	);
}
