import { El_Messiri } from 'next/font/google';
import '../styles/globals.css';

const inter = El_Messiri({
	subsets: ['arabic'],
	weight: ['400', '500', '600', '700'],
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
			<body className={`${inter.className} h-[100vh]`} dir="rtl">
				{children}
			</body>
		</html>
	);
}
