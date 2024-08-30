import ButtonDev from '@/components/layout/ButtonNav';
import EventsNav from '@/components/events/EventsNav';
import Counter from '@/components/input/Counter';

export default function UploadPlayers() {
	return (
		<main className="px-4 py-12">
			<EventsNav active={3} />
			<form action="" className="flex flex-col gap-8">
				<div className="itemc-center flex justify-between">
					<label htmlFor="score-type" className="text-2xl font-bold">
						نظام التقييم
					</label>
					<select
						name="score-type"
						id="score-type"
						className="h-8 w-1/2 bg-white text-center"
						required
					>
						<option value="">اختر</option>
						<option value="1">نقاط</option>
						<option value="2">محدد بوقت</option>
					</select>
				</div>
				<div className="flex items-center justify-between">
					<h3 className="mb-4 text-2xl font-bold">عدد لاعبين الفريق</h3>
					<Counter className="w-full" />
				</div>
				<div className="itemc-center flex justify-between"></div>
				<div className="itemc-center flex justify-between"></div>
				<div className="itemc-center flex justify-between"></div>
				<button type="submit"></button>
			</form>
		</main>
	);
}
