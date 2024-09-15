import { Cairo } from 'next/font/google';
import '../styles/globals.css';
import Image from 'next/image';
import texture from '../../public/assets/texture-full-screen.png';

const inter = Cairo({
	subsets: ['arabic'],
	weight: ['200', '300', '400', '700', '800', '900', '1000'],
});

export const metadata = {
	title: 'Hakamony',
	description: '2024 Summer Project',
	icons: {
		icon: ['/favicon.ico?v=4'],
		apple: ['/apple-touch-icon.png?v=4'],
		shortcut: ['/apple-touch-icon.png'],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="ar">
			<body className={`${inter.className} relative h-[100vh]`} dir="rtl">
				<Image
					alt="texture"
					src={texture}
					placeholder="blur"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: 'cover',
					}}
					className="-z-30 opacity-20"
				/>
				{children}
			</body>
		</html>
	);
}
