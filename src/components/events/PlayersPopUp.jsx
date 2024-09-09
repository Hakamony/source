import playerStorage from '@/lib/storage/playerStorage';

export default function PlayersPopUp({ ...props }) {
	return (
		<div
			className="fixed inset-x-2 top-1/3 h-fit flex-col gap-8 rounded-lg border-2 border-solid border-prime-dark bg-prime-white px-4 py-8 text-center"
			style={{ display: props.show ? 'flex' : 'none' }}
		>
			<h2 className="text-2xl font-bold">{props.team.name}</h2>
			<ul className="flex flex-col gap-4 divide-y-2 divide-gray-500 px-8">
				{props.team.players.map((id) => {
					const player = playerStorage.getPlayer(id);
					return (
						<li key={player.id} className="pt-4 text-center">
							{player.name}
						</li>
					);
				})}
			</ul>
			<button
				type="button"
				onClick={() => props.setShowTeam((prev) => !prev)}
				className="rounded-lg bg-red-700 px-20 py-2 text-xl font-bold text-prime-white"
			>
				اغلاق
			</button>
		</div>
	);
}
