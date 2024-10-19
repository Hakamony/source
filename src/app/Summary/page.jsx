'use client';

import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import teamIcon from '../../../public/assets/team-icon.jpg';
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
			starArr.push(<FaStar key={i} className="text-sm text-prime-yellow" />);
		}
		for (let i = num; i < 5; i++) {
			starArr.push(<FaStar key={i} className="text-sm" />);
		}
		return starArr;
	}

	function handleEditPlayers() {
		setShowEdit((prev) => !prev);
	}

	const eventName = {
		football: 'كرة قدم',
		volleyball: 'كرة طائرة',
		padel: 'بادل',
	};

	return (
		<main
			className="overflow-hidden px-2 py-12 text-center"
			style={{ touchAction: showEdit || showEditMatches ? 'none' : 'auto' }}
		>
			{/* <StorageButton /> */}
			<EventsNav active={4} />
			<section className="my-12 rounded-xl bg-white p-4">
				<h1 className="mb-4 text-4xl font-bold">{event.name}</h1>
				<hr className="mb-8 text-4xl font-bold text-black" />
				<ul className="text-center">
					<li>
						<h2 className="flex justify-between px-20 text-lg font-bold">
							<span>الرياضة:</span>
							<span>{eventName[event.sport]}</span>
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
								className="relative shrink-0 rounded-lg border-2 border-prime-orange bg-white p-4 shadow-lg drop-shadow-md"
								key={team.id}
							>
								<ul className="flex h-48 w-full list-inside list-decimal flex-col flex-wrap content-start gap-4 gap-x-12">
									{team.players.map((id) => {
										const player = playerStorage.getPlayer(id);
										return (
											<li key={player.id} className="text-start text-lg font-bold">
												{player.name}
											</li>
										);
									})}
								</ul>
								<div className="mt-4 flex flex-1 flex-col items-start justify-between gap-2 border-t-2 border-prime-orange pt-2 text-start font-bold">
									<h3 className="flex w-full items-center justify-between text-start text-2xl font-bold text-prime-orange">
										<span>{team.name}</span>
										<Image
											src={teamIcon}
											alt="Picture of the author"
											width={40}
											className="rounded-full border-2 border-prime-orange"
										/>
									</h3>
									<div className="flex items-center gap-2">
										{stars(Math.floor(team['team-rating']))}
										<span className="text-sm font-normal">
											. {team['number-of-players']} لاعبين
										</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<div className="rounded-xl bg-white p-2">
				<section className="my-12">
					<h1 className="mb-8 text-4xl font-bold">جدول المباريات</h1>
					<ul className="flex h-[350px] flex-col items-center divide-y divide-white overflow-y-scroll rounded-lg bg-prime-white">
						{matches.map((match, i) => {
							const team1 = teamStorage.getTeam(match.teams.first);
							const team2 = teamStorage.getTeam(match.teams.second);

							return (
								<li
									className="flex w-full shrink-0 items-center justify-center gap-2 bg-prime-white py-6 text-lg font-bold"
									key={match.id}
								>
									<div className="flex flex-1 items-center justify-end gap-2">
										<span>{team1.name}</span>
										<Image
											src={teamIcon}
											alt="Picture of the author"
											width={30}
											className="rounded-full"
										/>
									</div>
									<p className="flex flex-col items-center justify-center pb-2 text-sm font-normal">
										<span>V.S</span>
										<span>مباراة: {i + 1}</span>
									</p>
									<div className="flex flex-1 items-center justify-start gap-2">
										<Image
											src={teamIcon}
											alt="Picture of the author"
											width={30}
											className="rounded-full"
										/>
										<span>{team2.name}</span>
									</div>
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
					<ButtonNav color="bg-prime-yellow text-prime-dark" link="/GameSettings">
						تعديل الفعالية
					</ButtonNav>
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
