import Button from '@/components/layout/ButtonNav';

export default function Home() {
	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center">
			<Button link="/SelectEvent" color="orange">
				ابدأ الفاعلية
			</Button>
		</main>
	);
}
