'use client';

import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import EventsNav from '@/components/events/EventsNav';
import ButtonNav from '@/components/layout/ButtonNav';
import eventStorage from '@/lib/storage/eventStorage';
import teamStorage from '@/lib/storage/teamStorage';
import matchStorage from '@/lib/storage/matchStorage';
import playerStorage from '@/lib/storage/playerStorage';
import EditPlayers from '@/components/events/EditPlayers';
import EditMatches from '@/components/events/EditMatches';

export default function Summary() {
	const [event, setEvent] = useState({});
	const [teams, setTeams] = useState([]);
	const [matches, setMatches] = useState([]);
	const [showEdit, setShowEdit] = useState(false);
	const [showEditMatches, setShowEditMatches] = useState(false);

	useEffect(() => {
		setEvent(() => eventStorage.getEvent());
		setTeams(() => teamStorage.getTeams());
		setMatches(() =>
			matchStorage.getMatchesList().map((id) => matchStorage.getMatch(id)),
		);
	}, []);

	function stars(num) {
		const starArr = [];
		for (let i = 0; i < num; i++) {
			starArr.push(<FaStar key={i} className="text-prime-yellow" />);
		}
		for (let i = num; i < 5; i++) {
			starArr.push(<FaStar key={i} />);
		}
		return starArr;
	}

	function handleEditPlayers() {
		setShowEdit((prev) => !prev);
	}
	return (
		<main className="px-4 py-12 text-center">
			<EventsNav active={4} />
			<section className="my-12">
				<h1 className="mb-8 text-4xl font-bold">{event.name}</h1>
				<ul className="text-center">
					<li>
						<h2 className="text-2xl font-bold">
							الرياضة:{' '}
							<span>{event.sport === 'football' ? 'كرة قدم' : 'كرة طائرة'}</span>
						</h2>
					</li>
					<li>
						<h2 className="text-2xl font-bold">
							نظام التقييم: نقاط
							{/* <span>{event['score-type']}</span> */}
						</h2>
					</li>
					<li>
						<h2 className="text-2xl font-bold">
							عدد اللاعبين: <span>{event['players-number']}</span>
						</h2>
					</li>
					<li>
						<h2 className="text-2xl font-bold">
							عدد الفرق: <span>{teams.length}</span>
						</h2>
					</li>
				</ul>
			</section>
			<section className="my-12">
				<h1 className="mb-8 text-4xl font-bold">توزيع الفرق</h1>
				<div className="flex items-center gap-8 overflow-x-scroll">
					{teams.map((team) => {
						return (
							<div
								className="shrink-0 rounded-lg border-2 border-prime-orange p-4 shadow-lg"
								key={team.id}
							>
								<div className="mb-8 flex flex-1 flex-col items-start justify-between gap-2 text-start font-bold">
									<h3 className="text-start text-2xl font-bold text-prime-orange">
										{team.name}
									</h3>
									<div className="flex items-center gap-2">
										{stars(Math.floor(team['team-rating']))}
										<span>. {team['number-of-players']} لاعبين</span>
									</div>
								</div>
								<ul className="flex h-48 w-full list-inside list-decimal flex-col flex-wrap content-start gap-4 gap-x-12">
									{team.players.map((id) => {
										const player = playerStorage.getPlayer(id);
										return (
											<li key={player.id} className="text-start text-xl font-bold">
												{player.name}
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</section>
			<section className="my-12">
				<h1 className="mb-8 text-4xl font-bold">جدول المباريات</h1>
				<div className="flex h-[350px] flex-col items-center gap-8 overflow-y-scroll">
					{matches.map((match, i) => {
						const team1 = teamStorage.getTeam(match.teams.first);
						const team2 = teamStorage.getTeam(match.teams.second);

						return (
							<div
								className="w-full shrink-0 rounded-lg border-2 border-prime-orange p-4 shadow-lg"
								key={match.id}
							>
								<h3 className="t mb-8 text-4xl font-bold text-prime-orange">
									مباراة رقم {i + 1}
								</h3>
								<div className="flex flex-col gap-4 text-xl font-bold">
									<p className="flex justify-between">
										<span>{team1.name}</span>
										<span>V.S</span>
										<span>{team2.name}</span>
									</p>
									{/* <p>ملعب: </p> */}
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<section className="my-12 flex flex-col gap-4 font-bold">
				<button
					type="button"
					color="yellow"
					link="/"
					className="rounded-lg bg-prime-yellow px-20 py-2 text-xl font-bold text-prime-white"
					onClick={() => setShowEditMatches((prev) => !prev)}
				>
					تعديل جدول المباريات
				</button>
				<button
					type="button"
					color="yellow"
					link="/"
					className="rounded-lg bg-prime-yellow px-20 py-2 text-xl font-bold text-prime-white"
					onClick={handleEditPlayers}
				>
					تعديل الفرق
				</button>
				{/* <ButtonNav color="yellow" link="/">
					تعديل الفعالية
				</ButtonNav> */}
				{/* <ButtonNav color="yellow" link="/UploadPlayers">
					تعديل اللاعبين
				</ButtonNav> */}
				<ButtonNav color="green-200" link="/EventDashboard">
					بدء الفاعلية
				</ButtonNav>
			</section>
			{showEdit && (
				<EditPlayers
					active={showEdit}
					teams={teams}
					setActive={setShowEdit}
					setTeams={setTeams}
				/>
			)}
			{showEditMatches && (
				<EditMatches
					active={showEditMatches}
					setShowEditMatches={setShowEditMatches}
					mathces={matches}
					setMatches={setMatches}
				/>
			)}
		</main>
	);
}
