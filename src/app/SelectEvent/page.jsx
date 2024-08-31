import EventsNav from '@/components/events/EventsNav';
import SelectEventsForm from '@/components/selectEvent/SelectEventsForm';

export default function SelectEvent() {
	return (
		<main className="font-main px-4 py-12">
			<EventsNav active={1} />
			<SelectEventsForm />
		</main>
	);
}
