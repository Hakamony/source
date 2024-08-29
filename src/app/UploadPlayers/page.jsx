import UploadFile from '@/components/events/UploadFile';
import EventsNav from '@/components/events/EventsNav';
import AddPlayer from '@/components/events/AddPlayer';

export default function UploadPlayers() {
	return (
		<main className="px-4 py-12">
			<EventsNav active={2} />
			<section className="mt-8">
				<h2 className="text-center text-4xl font-bold">تحميل ملف اللاعبين</h2>
				<UploadFile />
				<hr className="text-4xl text-black" />
			</section>
			<section className="mt-8">
				<h2 className="text-center text-4xl font-bold">اضافة\تعديل اللاعبين</h2>
				<AddPlayer />
			</section>
		</main>
	);
}
