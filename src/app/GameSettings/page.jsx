import EventsNav from '@/components/events/EventsNav';
import Counter from '@/components/input/Counter';
import ButtonNav from '@/components/layout/ButtonNav';

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
						className="h-10 w-1/2 bg-white text-center"
						required
					>
						<option value="" disabled>
							اختر
						</option>
						<option value="1">نقاط</option>
						<option value="2">محدد بوقت</option>
					</select>
				</div>
				<div className="flex items-center justify-between gap-2">
					<h3 className="mb-4 text-2xl font-bold">عدد لاعبين الفريق</h3>
					<Counter className="h-10 w-1/2 bg-white pt-1 text-center" />
				</div>
				<div className="flex items-center justify-between gap-2">
					<h3 className="mb-4 text-2xl font-bold">عدد الملاعب</h3>
					<Counter className="h-10 w-1/2 bg-white pt-1 text-center" />
				</div>
				<div className="itemc-center flex justify-between">
					<label htmlFor="score-type" className="text-2xl font-bold">
						نظام البطولة
					</label>
					<select
						name="score-type"
						id="score-type"
						className="h-10 w-1/2 bg-white text-center"
						required
					>
						<option value="" disabled>
							اختر
						</option>
						<option value="league">دوري</option>
						<option value="winner">الفائز مستمر</option>
					</select>
				</div>
				<div className="itemc-center flex justify-between">
					<label htmlFor="price" className="text-2xl font-bold">
						التكلفة الكلية
					</label>
					<input
						type="number"
						name="price"
						id="price"
						required
						className="h-10 w-1/2 bg-white text-center text-2xl font-bold"
						placeholder="0"
					/>
				</div>
				<ButtonNav color="green-200" link="/Summary">
					التالي
				</ButtonNav>
			</form>
		</main>
	);
}
