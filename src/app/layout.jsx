import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Hakamony',
	description: '2024 Summer Project',
	icons: {
		icon: ['/favicon.ico?v=4'],
		apple: ['/apple-touch-icon.png?v=4'],
		shortcut: ['/apple-touch-icon.png'],
	},
	className: 'font-main',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
