import Image from 'next/image';
import { IoRocketSharp } from 'react-icons/io5';
import { IoMdConstruct } from 'react-icons/io';
import hakamImg from '../../public/assets/hakamDraft.png';
import ButtonNav from '@/components/layout/ButtonNav';

export default function Home() {
	return (
		<main className="h-100vh font-main flex h-screen w-screen flex-col items-center justify-start gap-8 py-8">
			<section>
				<Image src={hakamImg} alt="Picture of the author" width={200} />
			</section>
			<section className="flex flex-col gap-4 text-center">
				<ButtonNav link="/SelectEvent" color="bg-prime-orange">
					<div className="flex items-center justify-center gap-4">
						<span>ابدأ الفاعلية</span>
						<IoRocketSharp />
					</div>
				</ButtonNav>
				<ButtonNav link="/" color="bg-gray-400">
					<div className="flex items-center justify-center gap-4">
						<span>عرض الفاعليات</span>
						<IoMdConstruct />
					</div>
				</ButtonNav>
				<ButtonNav link="/" color="bg-gray-400">
					<div className="flex items-center justify-center gap-4">
						<span>العاب عشوائية</span>
						<IoMdConstruct />
					</div>
				</ButtonNav>
			</section>
		</main>
	);
}
