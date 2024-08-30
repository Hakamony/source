import EventsNav from '@/components/events/EventsNav';
import ButtonDev from '@/components/layout/ButtonNav';

export default function SelectEvent() {
	return (
		<main className="px-4 py-12 font-main">
			<EventsNav active={1} />
			<form
				action=""
				className="mt-8 flex h-[80vh] flex-col items-center justify-center gap-16"
			>
				<div className="flex w-full flex-col items-center gap-4">
					<label for="name" htmlFor="name" className="text-4xl font-bold">
						اسم الفعالية
					</label>
					<input type="text" name="name" id="name" className="h-12 w-full" />
				</div>
				<div className="flex w-full flex-col items-center gap-4">
					<label for="sport" htmlFor="sport" className="text-4xl font-bold">
						اختر نوع الرياضة
					</label>
					<select
						name="sport"
						id="sport"
						className="h-12 w-full bg-white text-center"
					>
						<option value="">اختر</option>
						<option value="football">كرة قدم</option>
						<option value="volyball">كرة طائرة</option>
						<option value="pingpong">تنس طاولة</option>
						<option value="padel">بادل</option>
					</select>
				</div>
				<div className="flex w-full flex-col items-center gap-4">
					<label for="type" htmlFor="type" className="text-4xl font-bold">
						اختر نوع الفعالية
					</label>
					<select name="type" id="type" className="h-12 w-full bg-white text-center">
						<option value="">اختر</option>
						<option value="league">دوري</option>
						<option value="winner">الفائز مستمر</option>
						<option value="time">مفتوحة</option>
						<option value="" disabled>
							تحديات عشوائية -قريبا-
						</option>
					</select>
				</div>
				<ButtonDev color="green-200" link="/UploadPlayers">
					التالي
				</ButtonDev>
			</form>
		</main>
	);
}
