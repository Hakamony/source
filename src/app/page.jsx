import Image from 'next/image';
import hakamImg from '../../public/assets/hakamDraft.png';
import Button from '@/components/layout/ButtonNav';

export default function Home() {

	return (
		<main className="h-100vh flex h-screen w-screen flex-col items-center justify-between py-8 font-main">
			<section>
				<Image src={hakamImg} alt="Picture of the author" width={300} />
			</section>
			<section className="flex flex-col gap-4 text-center">
				<Button link="/SelectEvent" color="orange">
					ابدأ الفاعلية
				</Button>
				<Button link="/PtrvEvents" color="orange">
					عرض الفاعليات
				</Button>
				<Button link="/RandomGames" color="orange">
					العاب عشوائية
				</Button>
			</section>
		</main>
	);
}
