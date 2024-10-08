'use client';

import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { TbArrowsTransferUp } from 'react-icons/tb';
import playerStorage from '@/lib/storage/playerStorage';
import teamStorage from '@/lib/storage/teamStorage';
import TeamsList from './TeamsList';

export default function EditPlayers({ ...props }) {
	const [showTeam, setShowTeam] = useState(true); // To be edited later
	const [updateTeam, setUpdateTeam] = useState({
		id: 0,
		fromTeam: 0,
		toTeam: 0,
	});
	const [showEdit, setShowEdit] = useState(false);
	function handleUpdate(id, fromTeam) {
		setShowEdit((prev) => !prev);
		setUpdateTeam({
			...updateTeam,
			id,
			fromTeam,
			toTeam: fromTeam,
		});
	}
	return (
		<div
			style={{ display: props.active ? 'flex' : 'none' }}
			className="fixed inset-x-0 bottom-0 top-12 flex flex-col gap-8 rounded-lg rounded-b-none border-2 border-b-0 border-solid border-prime-orange bg-white p-4"
		>
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold">تعديل الفرق</h2>
				<button
					onClick={() => {
						props.setActive((prev) => !prev);
					}}
					type="button"
				>
					<IoCloseCircle className="flex-0 text-4xl text-red-700" />
				</button>
			</div>
			<ul className="flex flex-col gap-4 overflow-y-scroll">
				{props.teams.map((team) => {
					return (
						<li
							key={team.id}
							className="rounded-lg border-2 border-solid border-prime-orange p-4 shadow-md"
							// onClick={handleShowTeam}
						>
							<div className="mb-4 flex items-center justify-between">
								<span className="text-xl font-bold">{team.name}</span>
								<IoIosArrowDown
									className="transition active:rotate-90"
									actvie={showTeam}
								/>
							</div>
							<ul
								className="hidden flex-col gap-4 data-[active=true]:flex"
								data-active={showTeam}
							>
								{team.players.map((id) => {
									const player = playerStorage.getPlayer(id);
									return (
										<li
											key={player.id}
											className="itmes-center flex justify-between text-start text-xl font-bold"
										>
											<div>{player.name}</div>
											<button
												type="button"
												className="rounded-md bg-prime-yellow px-4 py-1"
												onClick={() => handleUpdate(player.id, team.id)}
											>
												<TbArrowsTransferUp className="w-full" />{' '}
											</button>
										</li>
									);
								})}
							</ul>
						</li>
					);
				})}
			</ul>

			<TeamsList
				updateTeam={updateTeam}
				setUpdateTeam={setUpdateTeam}
				active={showEdit}
				setShowEdit={setShowEdit}
				setTeams={props.setTeams}
			/>
		</div>
	);
}
