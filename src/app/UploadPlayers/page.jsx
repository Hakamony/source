import UploadFile from '@/components/events/UploadFile';
import EventsNav from '@/components/events/EventsNav';
import PlayersList from '@/components/events/PlayersList';
import ButtonDev from '@/components/layout/ButtonNav';

export default function UploadPlayers() {
	return (
		<main className="px-4 py-12 text-center">
			<EventsNav active={2} />
			<section className="mt-8">
				<h2 className="text-center text-4xl font-bold">تحميل ملف اللاعبين</h2>
				<UploadFile />
				<hr className="text-4xl text-black" />
			</section>
			<ButtonDev color="green-200" link="/UploadPlayers">
				التالي
			</ButtonDev>
			<PlayersList />
		</main>
	);
}
