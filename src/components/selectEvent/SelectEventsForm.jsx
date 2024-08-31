'use client';

import { useState } from "react";
import ButtonDev from "../layout/ButtonNav";

export default function SelectEventsForm() {
    const [form, setForm] = useState({
        name: '',
        sport: '',
        'event-type':''
    })

	return (
		<form
			action=""
			className="mt-8 flex h-[80vh] flex-col items-center justify-center gap-16"
		>
			<div className="flex w-full flex-col items-center gap-4">
				<label for="name" htmlFor="name" className="text-4xl font-bold">
					اسم الفعالية
				</label>
				<input type="text" name="name" id="name" value={form.name} className="h-12 w-full" />
			</div>
			<div className="flex w-full flex-col items-center gap-4">
				<label for="sport" htmlFor="sport" className="text-4xl font-bold">
					اختر نوع الرياضة
				</label>
				<select
					name="sport"
					id="sport"
					className="h-12 w-full bg-white text-center"
					value={form.sport}
				>
					<option value="" disabled>
						اختر
					</option>
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
				<select
					name="event-type"
					id="type"
					className="h-12 w-full bg-white text-center"
                    value={form['event-type']}
                    required 
				>
					<option value="" disabled>
						اختر
					</option>
					<option value="league">دوري</option>
					<option value="winner" disabled>
						الفائز مستمر-قريباً-
					</option>
					<option value="time" disabled>
						مفتوحة -قريباً-
					</option>
					<option value="random" disabled>
						تحديات عشوائية -قريبا-
					</option>
				</select>
			</div>
			<ButtonDev color="green-200" link="/UploadPlayers">
				التالي
			</ButtonDev>
		</form>
	);
}
