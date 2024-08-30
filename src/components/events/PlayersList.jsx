'use client';

import { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import AddPlayer from './AddPlayer';

export default function PlayersList() {
	const playersList = [
		{ id: '1', name: 'folan folany', Rating: 4, 'Age-Group': 3 },
		{ id: '2', name: 'folan this', Rating: 4, 'Age-Group': 2 },
		{ id: '3', name: 'folan mesh', Rating: 2, 'Age-Group': 3 },
		{ id: '4', name: 'folan hala', Rating: 5, 'Age-Group': 2 },
		{ id: '5', name: 'folan you', Rating: 3, 'Age-Group': 1 },
		{ id: '6', name: 'folan folany', Rating: 4, 'Age-Group': 3 },
		{ id: '7', name: 'folan this', Rating: 4, 'Age-Group': 2 },
		{ id: '8', name: 'folan mesh', Rating: 2, 'Age-Group': 3 },
		{ id: '9', name: 'folan hala', Rating: 5, 'Age-Group': 2 },
		{ id: '10', name: 'folan you', Rating: 3, 'Age-Group': 1 },
	];

	const [showForm, setShowForm] = useState(false);
	function handleForm() {
		setShowForm((prev) => !prev);
	}

	return (
		<section className="mt-8">
			<h2 className="text-center text-4xl font-bold">قائمة اللاعبين المضافة</h2>
			<ul className="divide-y divide-y-2 divide-solid">
				{playersList.map((player) => {
					return (
						<li
							key={player.id}
							className="mt-2 flex items-center justify-between py-4"
						>
							<div className="flex flex-1 flex-col items-start justify-between text-2xl font-bold">
								<div>{player.name}</div>
								<div className="flex items-center gap-2">
									<FaStar /> <FaStar /> <FaStar /> <FaStar />
								</div>
							</div>
							<div className="flex flex-none gap-2">
								<button type="button" className="rounded-md bg-prime-yellow px-8 py-1">
									تعديل
								</button>
								<button
									type="button"
									className="rounded-md bg-red-500 px-8 py-1 text-prime-white"
								>
									حذف
								</button>
							</div>
						</li>
					);
				})}
			</ul>
			<AddPlayer active={showForm} />
			<button type="button" onClick={handleForm}>
				<FaCirclePlus
					className="fixed bottom-4 right-4 text-6xl text-prime-green-200 duration-200 data-[active=true]:rotate-45"
					data-active={showForm ? 'true' : 'false'}
				/>
			</button>
		</section>
	);
}
