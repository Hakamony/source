'use client';

import { useEffect, useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import { TbUserEdit } from 'react-icons/tb';
import { AiOutlineUserDelete } from 'react-icons/ai';
import AddPlayer from './AddPlayer';
import playerStorage from '@/lib/storage/playerStorage';

export default function PlayersList() {
	const [showForm, setShowForm] = useState(false);
	const [players, setPlayers] = useState([]);
	const [form, setForm] = useState({
		name: '',
		Rating: '',
		'Age-Group': 0,
	});

	useEffect(() => {
		setPlayers(playerStorage.getPlayers());
	}, []);

	function handleForm() {
		setForm({
			name: '',
			Rating: '',
			'Age-Group': 0,
		});
		setShowForm((prev) => !prev);
	}

	const handleDelete = (id) => {
		playerStorage.removePlayer(id);
		setPlayers(playerStorage.getPlayers());
	};

	const handleUpdate = (name, Rating, ageGroup) => {
		setForm({
			name,
			Rating,
			'Age-Group': ageGroup.toString(),
		});
		setShowForm((prev) => !prev);
	};

	function stars(num) {
		const starsList = [];
		for (let i = 0; i < num; i++) {
			starsList.push(<FaStar key={i} className="text-lg text-prime-yellow" />);
		}
		for (let i = num; i < 5; i++) {
			starsList.push(<FaStar key={i} className="text-lg" />);
		}
		return starsList;
	}

	return (
		<>
			<section className="mt-8 rounded-lg bg-white px-2 py-8 drop-shadow-md">
				<h2 className="text-center text-2xl font-bold">قائمة اللاعبين المضافة</h2>
				<ul className="mt-4 flex flex-col gap-2">
					{players.map((player) => {
						return (
							<li
								key={player.id}
								className="mt-2 flex items-center justify-between rounded-lg bg-prime-white p-4 drop-shadow-md"
							>
								<div className="flex flex-1 flex-col items-start justify-between text-lg font-bold">
									<h4>{player.name}</h4>
									<div className="flex items-center gap-2">{stars(player.Rating)}</div>
								</div>
								<div className="flex w-1/3 flex-none gap-2">
									<button
										type="button"
										className="flex-1 rounded-md bg-prime-yellow py-2"
										onClick={() => {
											handleUpdate(player.name, player.Rating, player['Age-Group']);
										}}
									>
										<TbUserEdit className="w-full" />
									</button>
									<button
										type="button"
										className="flex-1 rounded-md bg-red-500 py-2 text-prime-white"
										onClick={() => {
											handleDelete(player.id);
										}}
									>
										<AiOutlineUserDelete className="w-full" />
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			</section>
			<AddPlayer
				active={showForm}
				setPlayers={setPlayers}
				setShowForm={setShowForm}
				form={form}
				setForm={setForm}
				players={players}
			/>
			<button type="button" onClick={handleForm}>
				<FaCirclePlus
					className="fixed bottom-4 right-4 text-6xl text-prime-green-200 duration-200 data-[active=true]:rotate-45"
					data-active={showForm ? 'true' : 'false'}
				/>
			</button>
		</>
	);
}
