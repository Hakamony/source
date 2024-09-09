import Image from 'next/image';
import hakamImg from '../../public/assets/hakamDraft.png';
import ButtonNav from '@/components/layout/ButtonNav';

export default function Home() {
	return (
		<main className="h-100vh font-main flex h-screen w-screen flex-col items-center justify-between py-8">
			<section>
				<Image src={hakamImg} alt="Picture of the author" width={300} />
			</section>
			<section className="flex flex-col gap-4 text-center">
				<ButtonNav link="/SelectEvent" color="orange">
					ابدأ الفاعلية
				</ButtonNav>
				<ButtonNav link="/" color="dark">
					عرض الفاعليات - قريبا -
				</ButtonNav>
				<ButtonNav link="/" color="dark">
					العاب عشوائية - قريبا -
				</ButtonNav>
			</section>
		</main>
	);
}
