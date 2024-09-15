'use client';

import { useState } from 'react';
import { CiSquareCheck } from 'react-icons/ci';
import playerStorage from '@/lib/storage/playerStorage';

export default function UploadFile(props) {
	const [file, setFile] = useState([]);
	function handleFileUpdate(e) {
		setFile(() => e.target.files[0]);
	}
	function handleFileSubmit(e) {
		if (file.name.split('.').pop().toLowerCase() === 'json') {
			const reader = new FileReader();
			reader.readAsText(file);
			reader.onload = () => {
				playerStorage.importPlayers(JSON.parse(reader.result));
			};
		} else {
			throw new Error('Invalid file type');
		}
	}
	return (
		<form className="my-4 text-center" id="uploadPlayers">
			<div className="my-8 flex w-full text-center">
				<label
					htmlFor="file"
					className="flex-1 cursor-pointer rounded-lg bg-prime-orange py-2 text-lg font-bold text-prime-white"
				>
					تحميل الملف (صيغة <span dir="ltr">.json</span>)
				</label>
				<input
					type="file"
					name="file"
					id="file"
					className="hidden"
					onChange={handleFileUpdate}
				/>
			</div>
			<div className="flex items-center justify-between">
				<p> تم اختيار الملف التالي: {file.name}</p>
				<button type="submit" htmlFor="uploadPlayers" onClick={handleFileSubmit}>
					<CiSquareCheck className="text-5xl text-prime-green-200" />
				</button>
			</div>
		</form>
	);
}
