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
import StorageButton from '@/components/StorageButton';

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
		<main className="px-2 py-12 text-center">
			{/* <StorageButton /> */}
			<EventsNav active={4} />
			<section className="my-12 rounded-xl bg-white p-4">
				<h1 className="mb-4 text-4xl font-bold">{event.name}</h1>
				<hr className="mb-8 text-4xl font-bold text-black" />
				<ul className="text-center">
					<li>
						<h2 className="flex justify-between px-20 text-lg font-bold">
							<span>الرياضة:</span>
							<span>{event.sport === 'football' ? 'كرة قدم' : 'كرة طائرة'}</span>
						</h2>
					</li>
					<li>
						<h2 className="flex w-full justify-between px-20 text-lg font-bold">
							<span>نظام التقييم: </span>
							<span>{}نقاط</span>
						</h2>
					</li>
					<li>
						<h2 className="flex w-full justify-between px-20 text-lg font-bold">
							<span>عدد اللاعبين:</span>
							<span>{event['players-number']}</span>
						</h2>
					</li>
					<li>
						<h2 className="flex w-full justify-between px-20 text-lg font-bold">
							<span>عدد الفرق:</span>
							<span>{teams.length}</span>
						</h2>
					</li>
					<li>
						<h2 className="flex w-full justify-between px-20 text-lg font-bold">
							<span>تكلفة الفاعيلة: </span>
							<span>{event['total-cost']}</span>
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
								className="shrink-0 rounded-lg border-2 border-prime-orange bg-white p-4 shadow-lg drop-shadow-md"
								key={team.id}
							>
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
								<div className="mt-8 flex flex-1 flex-col items-start justify-between gap-2 border-t-2 border-prime-orange text-start font-bold">
									<h3 className="text-start text-2xl font-bold text-prime-orange">
										{team.name}
									</h3>
									<div className="flex items-center gap-2">
										{stars(Math.floor(team['team-rating']))}
										<span>. {team['number-of-players']} لاعبين</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<div className="rounded-xl bg-white p-4">
				<section className="my-12">
					<h1 className="mb-8 text-4xl font-bold">جدول المباريات</h1>
					<ul className="flex h-[350px] flex-col items-center gap-8 overflow-y-scroll rounded-lg bg-prime-white py-4">
						{matches.map((match, i) => {
							const team1 = teamStorage.getTeam(match.teams.first);
							const team2 = teamStorage.getTeam(match.teams.second);

							return (
								<li
									className="flex w-full shrink-0 justify-center gap-4 bg-prime-white py-4 text-lg font-bold shadow-md"
									key={match.id}
								>
									<span>{team1.name}</span>
									<p className="flex flex-col items-center text-sm">
										<span>V.S</span>
										<span>مباراة: {i + 1}</span>
									</p>
									<span>{team2.name}</span>
								</li>
							);
						})}
					</ul>
				</section>
				<section className="my-12 flex flex-col gap-4 font-bold">
					<button
						type="button"
						color="yellow"
						link="/"
						className="rounded-lg bg-prime-yellow py-2 text-xl font-bold text-prime-dark"
						onClick={() => setShowEditMatches((prev) => !prev)}
					>
						تعديل جدول المباريات
					</button>
					<button
						type="button"
						color="yellow"
						link="/"
						className="rounded-lg bg-prime-yellow py-2 text-xl font-bold text-prime-dark"
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
					<ButtonNav color="bg-prime-green-200" link="/EventDashboard">
						بدء الفاعلية
					</ButtonNav>
				</section>
			</div>
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
