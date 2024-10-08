'use client';

import { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import playerStorage from '@/lib/storage/playerStorage';

export default function AddPlayer({
	form,
	setForm,
	active,
	setPlayers,
	setShowForm,
	players,
}) {
	function handleFormChange(e) {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	}

	function handleNewPlayer(e) {
		e.preventDefault();
		const toBeUpdated = players.find((player) => player.id === form.id);
		if (!toBeUpdated) {
			playerStorage.addPlayer({
				name: form.name,
				Rating: Number(form.Rating),
				'Age-Group': Number(form['Age-Group']),
			});
		} else {
			playerStorage.updatePlayer(toBeUpdated.id, {
				name: form.name,
				Rating: Number(form.Rating),
				'Age-Group': Number(form['Age-Group']),
			});
		}
		setPlayers(playerStorage.getPlayers());
		setForm({
			id: '',
			name: '',
			Rating: '',
			'Age-Group': '0',
		});
		setShowForm((prev) => !prev);
	}

	return (
		<form
			className="fixed bottom-20 right-2 flex h-fit w-[95vw] flex-col gap-8 rounded-lg border-2 border-solid border-prime-green-200 bg-prime-white p-4"
			style={{ display: active ? 'flex' : 'none' }}
			onSubmit={handleNewPlayer}
		>
			<div>
				<h3 className="mb-4 text-2xl font-bold">اسم اللاعب</h3>
				<input
					type="text"
					name="name"
					id="name"
					className="h-12 w-full rounded-lg p-2 drop-shadow-md"
					placeholder="ادخل اسم اللاعب"
					value={form.name}
					onChange={handleFormChange}
					required
				/>
			</div>
			<div>
				<h3 className="text-2xl font-bold" for="playerName">
					الفئة العمرية
				</h3>
				<div className="mt-6 flex items-center justify-center gap-2">
					<input
						type="radio"
						id="none"
						name="Age-Group"
						value="0"
						className="hidden"
						onChange={handleFormChange}
						checked={form['Age-Group'] === '0'}
						disabled
						required
					/>
					<div className="flex-1">
						<input
							type="radio"
							id="young"
							name="Age-Group"
							value="1"
							className="hidden"
							onChange={handleFormChange}
							checked={form['Age-Group'] === '1'}
							required
						/>
						<label
							for="young"
							className="text-prime-whit hover:bg-ptime-orange rounded-lg border-2 border-solid border-prime-orange bg-prime-white px-8 text-lg font-bold hover:bg-prime-orange hover:text-white"
						>
							صغار
						</label>
					</div>
					<div className="flex-1">
						<input
							type="radio"
							id="youth"
							name="Age-Group"
							value="2"
							className="hidden"
							onChange={handleFormChange}
							checked={form['Age-Group'] === '2'}
							required
						/>
						<label
							for="youth"
							className="text-prime-whit hover:bg-ptime-orange rounded-lg border-2 border-solid border-prime-orange bg-prime-white px-8 text-lg font-bold hover:bg-prime-orange hover:text-white"
						>
							شباب
						</label>
					</div>
					<div className="flex-1">
						<input
							type="radio"
							id="adult"
							name="Age-Group"
							value="3"
							className="hidden"
							onChange={handleFormChange}
							checked={form['Age-Group'] === '3'}
							required
						/>
						<label
							for="adult"
							className="text-prime-whit hover:bg-ptime-orange rounded-lg border-2 border-solid border-prime-orange bg-prime-white px-8 text-lg font-bold hover:bg-prime-orange hover:text-white"
						>
							كبار
						</label>
					</div>
				</div>
			</div>
			<div>
				<h3 className="mb-4 text-2xl font-bold">تقييم اللاعب من 5 نجوم</h3>
				<select
					name="Rating"
					id="rating"
					className="h-12 w-full rounded-lg bg-white p-2 text-center drop-shadow-md"
					onChange={handleFormChange}
					value={form.Rating}
					required
				>
					<option value="" disabled>
						اختر
					</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<button
				type="submit"
				htmlFor="uploadPlayers"
				className="flex cursor-pointer items-center justify-center gap-4 rounded-lg bg-prime-green-200 px-16 py-2 text-xl font-bold text-prime-white"
			>
				اضف لاعب
				<FaUserPlus className="text-2xl" />
			</button>
		</form>
	);
}
