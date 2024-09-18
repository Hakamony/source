'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EventsNav from '@/components/events/EventsNav';
// import Counter from '@/components/input/Counter';
// import ButtonNav from '@/components/layout/ButtonNav';
import eventStorage from '@/lib/storage/eventStorage';
import generateTeams from '@/lib/Algorithems/generateTeams';
import generateMatches from '@/lib/Algorithems/generateMatches';

export default function GameSettings() {
	const [form, setForm] = useState({
		'score-type': 'points',
		'max-team-player': 0,
		'fields-number': 0,
		'event-type': 'league',
		'total-cost': '',
	});

	const router = useRouter();

	function handleFormChange(e) {
		if (e.target.type === 'number') {
			setForm({
				...form,
				[e.target.name]: Number(e.target.value),
			});
		} else {
			setForm({
				...form,
				[e.target.name]: e.target.value,
			});
		}
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		eventStorage.updateEvent(form);
		generateTeams.generateTeamsByMaxPlayers(form['max-team-player']);
		generateMatches();
		router.push('/Summary');
	}

	const handlePlus = (e) => {
		setForm((prev) => {
			return {
				...form,
				[e.target.name]: prev[e.target.name] + 1,
			};
		});
	};

	const handleMinus = (e) => {
		if (form[e.target.name] > 0) {
			setForm((prev) => {
				return {
					...form,
					[e.target.name]: prev[e.target.name] - 1,
				};
			});
		}
	};

	return (
		<main className="px-2 py-12">
			<EventsNav active={3} />
			<form
				action=""
				className="flex flex-col gap-6 rounded-lg bg-white p-4 drop-shadow-md"
				onSubmit={handleFormSubmit}
			>
				<h2 className="text-center text-2xl font-bold">اعدادات الفاعلية</h2>
				<div className="flex h-fit flex-col gap-6 divide-y">
					<div className="flex items-center justify-between pt-6">
						<label htmlFor="score-type" className="text-xl font-bold">
							نظام التقييم
						</label>
						<select
							name="score-type"
							id="score-type"
							className="h-10 w-1/2 rounded-lg bg-white text-center drop-shadow"
							required
							onChange={handleFormChange}
							value={form['score-type']}
						>
							<option value="" disabled>
								اختر
							</option>
							<option value="points">نقاط</option>
							<option value="time" disabled>
								محدد بوقت
							</option>
						</select>
					</div>
					<div className="flex items-center justify-between gap-2 pt-6">
						<h3 className="text-xl font-bold">عدد لاعبين الفريق</h3>
						{/* <Counter
						className="h-10 w-1/2 bg-white pt-1 text-center"
						onChange={(e) => handleFormChange(e)}
						value={form['max-team-player']}
					/> */}
						<div className="flex w-1/2 items-center justify-around drop-shadow">
							<button
								type="button"
								onClick={handlePlus}
								className="w-1/4 rounded-r-lg bg-white text-center text-4xl font-bold text-prime-dark hover:bg-prime-green-100"
								name="max-team-player"
							>
								+
							</button>
							<input
								type="number"
								name="max-team-player"
								id="max-team-player"
								required
								className="h-10 w-1/2 text-center text-4xl font-bold text-prime-dark"
								placeholder="0"
								onChange={handleFormChange}
								value={form['max-team-player']}
							/>
							<button
								type="button"
								onClick={handleMinus}
								className="w-1/4 items-center rounded-l-lg bg-white text-center text-4xl font-bold text-prime-dark hover:bg-prime-green-100"
								name="max-team-player"
							>
								-
							</button>
						</div>
					</div>
					<div className="flex items-center justify-between gap-2 pt-6">
						<h3 className="text-xl font-bold">عدد الملاعب</h3>
						{/* <Counter
						className="h-10 w-1/2 bg-white pt-1 text-center"
						onChange={(e) => handleFormChange(e)}
						value={form['fields-number']}
					/> */}
						<div className="flex w-1/2 items-center justify-around drop-shadow">
							<button
								type="button"
								onClick={handlePlus}
								className="w-1/4 rounded-r-lg bg-white text-center text-4xl font-bold text-prime-dark hover:bg-prime-green-100"
								name="fields-number"
							>
								+
							</button>
							<input
								type="number"
								name="fields-number"
								id="fields-number"
								required
								className="h-10 w-1/2 text-center text-4xl font-bold text-prime-dark"
								placeholder="0"
								onChange={handleFormChange}
								value={form['fields-number']}
							/>
							<button
								type="button"
								onClick={handleMinus}
								className="w-1/4 items-center rounded-l-lg bg-white text-center text-4xl font-bold text-prime-dark hover:bg-prime-green-100"
								name="fields-number"
							>
								-
							</button>
						</div>
					</div>
					<div className="flex items-center justify-between pt-6">
						<label htmlFor="score-type" className="text-xl font-bold">
							نظام البطولة
						</label>
						<select
							name="event-type"
							id="type"
							className="h-10 w-1/2 rounded-lg bg-white text-center drop-shadow"
							value={form['event-type']}
							required
							onChange={handleFormChange}
						>
							<option value="" disabled>
								اختر
							</option>
							<option value="league">دوري</option>
							<option value="winner" disabled>
								الفائز مستمر-قريباً-
							</option>
							<option value="time" disabled>
								مفتوحة -قريباً-
							</option>
							<option value="random" disabled>
								تحديات عشوائية -قريبا-
							</option>
						</select>
					</div>
					<div className="itemc-center flex justify-between pt-6">
						<label htmlFor="price" className="text-xl font-bold">
							التكلفة الكلية
						</label>
						<input
							type="number"
							name="total-cost"
							id="total-cost"
							required
							className="h-10 w-1/2 rounded-lg bg-white text-center text-2xl font-bold drop-shadow"
							onChange={handleFormChange}
							placeholder="0"
							value={form['total-cost']}
						/>
					</div>
				</div>
				<input
					type="submit"
					className="rounded-lg bg-prime-green-200 px-20 py-2 text-xl font-bold text-prime-white"
					value="التالي"
				/>
			</form>
		</main>
	);
}
