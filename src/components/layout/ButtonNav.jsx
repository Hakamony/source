import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function ButtonNav({ children, ...props }) {
	return (
		<button
			type="button"
			className={twMerge(
				'rounded-lg px-20 py-2 text-xl font-bold text-prime-white',
				`bg-prime-${props.color}`,
			)}
		>
			<Link href={props.link}>{children}</Link>
		</button>
	);
}
