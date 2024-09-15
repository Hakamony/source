'use client';

import playerStorage from '@/lib/storage/playerStorage';

export default function ExportPlayersButton() {
	function handleClick() {
		const players = playerStorage.getPlayers();

		const jsonData = new Blob([JSON.stringify(players)], {
			type: 'application/json',
		});
		const jsonURL = URL.createObjectURL(jsonData);
		const link = document.createElement('a');
		link.href = jsonURL;
		link.download = `players.json`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	return (
		<div className="my-8 flex w-full text-center">
			<label
				htmlFor="export"
				className="flex-1 cursor-pointer rounded-lg bg-prime-green-200 py-2 text-lg font-bold text-prime-white"
			>
				حفظ ملف اللاعبين
			</label>
			<input
				type="button"
				name="export"
				id="export"
				className="hidden"
				onClick={handleClick}
			/>
		</div>
	);
}
