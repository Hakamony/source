'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import eventStorage from '@/lib/storage/eventStorage';
import storageHelper from '@/lib/storage/storageHelper';

export default function SelectEventsForm() {
	const [form, setForm] = useState({
		name: '',
		sport: '',
		'event-type': '',
	});

	const router = useRouter();

	function handleFormChange(e) {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		storageHelper.localStorageConfig();
		eventStorage.updateEvent(form);
		router.push('/UploadPlayers');
	}

	return (
		<form
			action=""
			className="mt-8 flex h-[80vh] flex-col items-center justify-center gap-16"
			onSubmit={handleFormSubmit}
		>
			<div className="flex w-full flex-col items-center gap-4">
				<label for="name" htmlFor="name" className="text-4xl font-bold">
					اسم الفعالية
				</label>
				<input
					type="text"
					name="name"
					id="name"
					value={form.name}
					className="h-12 w-full p-2 text-xl"
					onChange={handleFormChange}
					required
				/>
			</div>
			<div className="flex w-full flex-col items-center gap-4">
				<label for="sport" htmlFor="sport" className="text-4xl font-bold">
					اختر نوع الرياضة
				</label>
				<select
					name="sport"
					id="sport"
					className="h-12 w-full bg-white p-2 text-center"
					value={form.sport}
					onChange={handleFormChange}
					required
				>
					<option value="" disabled>
						اختر
					</option>
					<option value="football">كرة قدم</option>
					<option value="volyball">كرة طائرة</option>
					<option value="pingpong" disabled>
						تنس طاولة
					</option>
					<option value="padel" disabled>
						بادل
					</option>
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
					onChange={handleFormChange}
				>
					<option value="" disabled>
						اختر
					</option>
					<option value="league" defaultChecked>
						دوري
					</option>
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
			<input
				type="submit"
				className="rounded-lg bg-prime-green-200 px-20 py-2 text-xl font-bold text-prime-white"
				value="التالي"
			/>
		</form>
	);
}
