'use client';

import { useEffect, useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import AddPlayer from './AddPlayer';
import playerStorage from '@/lib/storage/playerStorage';

export default function PlayersList() {
	const [showForm, setShowForm] = useState(false);
	const [players, setPlayers] = useState([]);

	useEffect(()=>{
		setPlayers(playerStorage.getPlayers())
	},[])

	function handleForm() {
		setShowForm((prev) => !prev);
	}

	const handleDelete = (id)=>{
		playerStorage.removePlayer(id)
		setPlayers(playerStorage.getPlayers()) 
	}
	function stars(num){
		const stars = []
		for(let i =0 ; i< num; i++){
			stars.push(<FaStar key = {i}className=" text-prime-yellow text-xl"/>)
		}
		for(let i = num; i< 5; i++){
			stars.push(<FaStar key = {i} className='text-xl' />)
		}
		return stars
	}

	return (
		<section className="mt-8">
			<h2 className="text-center text-4xl font-bold">قائمة اللاعبين المضافة</h2>
			<ul className="divide-y divide-y-2 divide-solid">
				{players.map((player) => {
					return (
						<li
							key={player.id}
							className="mt-2 flex items-center justify-between py-4"
						>
							<div className="flex flex-1 flex-col items-start justify-between text-2xl font-bold">
								<div>{player.name}</div>
								<div className="flex items-center gap-2">
									{stars(player.Rating)}
								</div>
							</div>
							<div className="flex flex-none gap-2">
								<button type="button" className="rounded-md bg-prime-yellow px-8 py-1">
									تعديل
								</button>
								<button
									type="button"
									className="rounded-md bg-red-500 px-8 py-1 text-prime-white"
									onClick={() => {handleDelete(player.id)}}
								>
									حذف
								</button>
							</div>
						</li>
					);
				})}
			</ul>
			<AddPlayer active={showForm} setPlayers={setPlayers} setShowForm={setShowForm}/>
			<button type="button" onClick={handleForm}>
				<FaCirclePlus
					className="fixed bottom-4 right-4 text-6xl text-prime-green-200 duration-200 data-[active=true]:rotate-45"
					data-active={showForm ? 'true' : 'false'}
				/>
			</button>
		</section>
	);
}
