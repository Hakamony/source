import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function ButtonNav({ children, ...props }) {
	return (
		<button
			type="button"
			className={twMerge(
				'rounded-lg bg-prime-white px-16 py-2 text-xl font-bold text-prime-white',
				props.color,
			)}
		>
			<Link href={props.link}>{children}</Link>
		</button>
	);
}
