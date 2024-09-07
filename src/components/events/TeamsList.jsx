'use client';

import { useState } from 'react';
import teamStorage from '@/lib/storage/teamStorage';

export default function TeamsList({ ...props }) {
	
	function handleChange(e) {
		props.setUpdateTeam({
			...props.updateTeam,
			toTeam: e.target.value
		});
	}
	function handleSubmit(e) {
		e.preventDefault();
		// props.setToTeam((prev) => {
		// 	return {
		// 		...prev,
		// 		toTeam: newTeam,
		// 	};
		// });
		teamStorage.removePlayerFromTeam(props.updateTeam.id, props.updateTeam.fromTeam)
		teamStorage.addPlayerToTeam(props.updateTeam.id, props.updateTeam.toTeam)
		props.setTeams(teamStorage.getTeams())
		props.setShowEdit((prev) => !prev);
	}
	return (
		<form
			style={{ display: props.active ? 'flex' : 'none' }}
			className="fixed inset-x-2 flex flex-col gap-8 overflow-y-scroll rounded-lg border-2 border-solid border-prime-green-200 bg-prime-white p-16"
			onSubmit={handleSubmit}
		>
			<select
				name="change-team"
				id="change-team"
				value={props.updateTeam.toTeam}
				onChange={handleChange}
			>
				{teamStorage.getTeams().map((team) => {
					return (
						<option
							key={team.id}
							value={team.id}
							disabled={props.updateTeam.fromTeam === team.id}
						>
							{team.name}
						</option>
					);
				})}
			</select>
			<input
				type="submit"
				value="نقل"
				className="rounded-lg bg-prime-yellow px-20 py-2 text-xl font-bold text-prime-white"
			/>
		</form>
	);
}
