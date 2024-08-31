import Menu from '@/components/layout/Menu';

export default function UploadPlayers() {
	const dummyEvent = {
		id: 26473,
		name: 'event1',
		'start-time': '13-7-2024 18:45',
		'end-time': '13-7-2024 21:45',
		sport: 'Volley Ball',
		'score-type': 'points',
		'fields-number': 3,
		'players-number': 35,
		'max-team-player': 6,
		'total-coast': 600,
		'teams-number': 5,
		'matches-number': 15,
		teams: [2334, 3583, 9830, 2234, 7384],
		'event-type': 'league',
		status: 2, // 0: not started, 1: on going, 2: done
	};
	const dummyMatch = [
		{
			id: 24,
			number: 3,
			teams: {
				first: 24,
				second: 46,
			},
			scores: {
				first: 24,
				second: 18,
			},
			'start-time': '18:45',
			'end-time': '20:45',
			status: 1, // 0: not started, 1: on going, 2: done
		},
		{
			id: 25,
			number: 2,
			teams: {
				first: 24,
				second: 46,
			},
			scores: {
				first: 24,
				second: 18,
			},
			'start-time': '18:45',
			'end-time': '20:45',
			status: 1, // 0: not started, 1: on going, 2: done
		},
		{
			id: 26,
			number: 1,
			teams: {
				first: 24,
				second: 46,
			},
			scores: {
				first: 24,
				second: 18,
			},
			'start-time': '18:45',
			'end-time': '20:45',
			status: 0, // 0: not started, 1: on going, 2: done
		},
		{
			id: 27,
			number: 5,
			teams: {
				first: 24,
				second: 46,
			},
			scores: {
				first: 24,
				second: 18,
			},
			'start-time': '18:45',
			'end-time': '20:45',
			status: 0, // 0: not started, 1: on going, 2: done
		},
	];
	const dummyTeams = [
		{
			id: 2334,
			name: 'فريق القادحين',
			players: [24, 35, 68, 14],
			'match-played': {
				won: 2,
				tie: 0,
				lose: 1,
			},
			'team-rating': 4.1,
			'number-of-players': 6,
		},
		{
			id: 2335,
			name: 'فريق الرهيبين',
			players: [24, 35, 68, 14],
			'match-played': {
				won: 2,
				tie: 0,
				lose: 1,
			},
			'team-rating': 4.1,
			'number-of-players': 6,
		},
		{
			id: 2336,
			name: 'اساطير الشورما',
			players: [24, 35, 68, 14],
			'match-played': {
				won: 2,
				tie: 0,
				lose: 1,
			},
			'team-rating': 4.1,
			'number-of-players': 6,
		},
		{
			id: 2337,
			name: 'تيم الرهيبين',
			players: [24, 35, 68, 14],
			'match-played': {
				won: 2,
				tie: 0,
				lose: 1,
			},
			'team-rating': 4.1,
			'number-of-players': 6,
		},
	];
	return (
		<main className="px-4 py-12">
			<nav className="flex items-center justify-between">
				<h1 className="text-4xl font-bold">{dummyEvent.name}</h1>
				<Menu />
			</nav>
			<section className="my-12 flex flex-col gap-8">
				{Array.from({ length: dummyEvent['fields-number'] }, (_, i) => {
					return (
						<div
							className="rounded-lg border-2 border-prime-orange p-4 text-center shadow-lg"
							key={dummyEvent['fields-number'][i]}
						>
							<h3 className="text-6xl font-bold text-prime-orange">ملعب {i + 1}</h3>
							<div className="mt-4 flex flex-col gap-4 text-xl font-bold">
								<p className="flex justify-between">
									<span>{dummyTeams[0].name}</span>
									<span>V.S</span>
									<span>{dummyTeams[1].name}</span>
								</p>
								<p className="text-start">مباراة: 1 </p>
							</div>
							<div className="mt-4 flex justify-center gap-4">
								<button
									type="button"
									className="rounded-lg bg-prime-green-200 px-12 py-1 text-xl font-bold text-prime-white"
								>
									انهاء
								</button>
								<button
									type="button"
									className="rounded-lg bg-prime-yellow px-12 py-1 text-xl font-bold text-prime-dark"
								>
									تعديل
								</button>
							</div>
						</div>
					);
				})}
			</section>
		</main>
	);
}
