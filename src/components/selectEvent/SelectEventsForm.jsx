'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
	MdOutlineDriveFileRenameOutline,
	MdOutlineSportsVolleyball,
} from 'react-icons/md';
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
			className="mt-8 flex min-h-[60vh] flex-col items-center justify-between rounded-xl bg-white p-4"
			onSubmit={handleFormSubmit}
		>
			<div className="flex w-full flex-col gap-8">
				<div className="w-full">
					<label
						for="name"
						htmlFor="name"
						className="mx-2 flex items-center gap-2 text-2xl font-bold"
					>
						<span>اسم الفعالية</span> <MdOutlineDriveFileRenameOutline />
					</label>
					<input
						type="text"
						name="name"
						id="name"
						value={form.name}
						className="mt-4 h-12 w-full rounded-lg bg-prime-white p-4 text-xl drop-shadow-md"
						placeholder="ادخل اسم الفعالية"
						onChange={handleFormChange}
						required
					/>
				</div>
				<div className="w-full">
					<label
						for="sport"
						htmlFor="sport"
						className="mx-2 flex items-center gap-2 text-2xl font-bold"
					>
						<span>اختر نوع الرياضة</span>
						<MdOutlineSportsVolleyball />
					</label>
					<select
						name="sport"
						id="sport"
						className="mt-4 h-12 w-full rounded-lg bg-prime-white text-gray-500 drop-shadow-md"
						value={form.sport}
						onChange={handleFormChange}
						required
					>
						<option value="" disabled>
							اختر
						</option>
						<option value="football">كرة قدم</option>
						<option value="volleyball">كرة طائرة</option>
						<option value="pingpong" disabled>
							تنس طاولة
						</option>
						<option value="padel" disabled>
							بادل
						</option>
					</select>
				</div>
			</div>
			<input
				type="submit"
				className="w-full rounded-lg bg-prime-green-200 px-20 py-2 text-xl font-bold text-prime-white"
				value="التالي"
			/>
		</form>
	);
}
