import Image from 'next/image';
import hakamImg from '../../public/assets/hakamDraft.webp';
import Button from '@/components/layout/ButtonNav';

export default function Home() {
	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center font-main">
			<section>
				<Image src={hakamImg} alt="Picture of the author" width={500} />
			</section>
			<section className="flex flex-col gap-4 text-center">
				<Button link="/SelectEvent" color="orange">
					ابدأ الفاعلية
				</Button>
				<Button link="/SelectEvent" color="orange">
					عرض الفاعليات
				</Button>
				<Button link="/SelectEvent" color="orange">
					العاب عشوائية
				</Button>
			</section>
		</main>
	);
}
