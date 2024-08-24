import Link from 'next/link';

export default function ButtonDev({ children, ...props }) {
	return (
		<button
			type="submit"
			className={`rounded-lg bg-prime-${props.color} px-20 py-2 text-xl font-bold text-prime-white`}
		>
			<Link href={props.link}>{children}</Link>
		</button>
	);
}
