'use client';

import { twMerge } from 'tailwind-merge';

export default function EventsNav({ ...props }) {
	const steps = [];
	for (let i = 0; i < 4; i++) {
		steps.push(
			<li
				key={i}
				className={twMerge(
					'flex h-14 w-14 flex-col items-center justify-center rounded-full text-center text-2xl font-bold',
					props.active === i + 1
						? 'bg-prime-yellow'
						: props.active > i + 1
							? 'bg-prime-green-200'
							: 'bg-prime-green-100',
				)}
			>
				{i + 1}
			</li>,
		);
	}
	return (
		<nav className="mb-12">
			<ul className="flex justify-center gap-5">{steps}</ul>
		</nav>
	);
}
