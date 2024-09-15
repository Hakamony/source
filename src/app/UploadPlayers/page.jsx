import UploadFile from '@/components/events/UploadFile';
import EventsNav from '@/components/events/EventsNav';
import PlayersList from '@/components/events/PlayersList';
import ButtonDev from '@/components/layout/ButtonNav';
import ExportPlayersButton from '@/components/input/ExportPlayersButton';

export default function UploadPlayers() {
	return (
		<main className="px-2 py-12 text-center">
			<EventsNav active={2} />
			<section className="my-8 h-fit rounded-lg bg-white p-4 drop-shadow-md">
				<h2 className="text-center text-2xl font-bold">تحميل ملف اللاعبين</h2>
				<ExportPlayersButton />
				<UploadFile />
			</section>
			<hr className="mb-8 text-4xl font-bold text-black" />
			<ButtonDev color="bg-prime-green-200" link="/GameSettings">
				التالي
			</ButtonDev>
			<PlayersList />
		</main>
	);
}
