'use client';

import { FaUserPlus } from 'react-icons/fa';

export default function AddPlayer(props) {
	function handleNewPlayer(e) {
		e.preventDefault();
	}
	return (
		<form
			className="fixed bottom-20 right-2 flex h-fit w-[95vw] flex-col gap-8 rounded-lg border-2 border-solid border-prime-green-200 bg-prime-white p-4"
			style={{ display: props.active ? 'flex' : 'none' }}
		>
			<div>
				<h3 className="mb-4 text-2xl font-bold">اسم اللاعب</h3>
				<input type="text" name="name" id="name" className="h-12 w-full" required />
			</div>
			<div>
				<h3 className="mb-4 text-2xl font-bold" for="playerName">
					الفئة العمرية
				</h3>
				<div className="flex items-center justify-center gap-2">
					<div className="flex-1">
						<input
							type="radio"
							id="young"
							name="ageGroup"
							value="1"
							className="hidden"
							required
						/>
						<label
							for="young"
							className="text-prime-whit hover:bg-ptime-orange rounded-lg border-2 border-solid border-prime-orange bg-prime-white px-8 py-1.5 text-xl font-bold hover:bg-prime-orange hover:text-white active:bg-prime-orange active:text-white"
						>
							صغار
						</label>
					</div>
					<div className="flex-1">
						<input
							type="radio"
							id="youth"
							name="ageGroup"
							value="2"
							className="hidden"
						/>
						<label
							for="youth"
							className="text-prime-whit hover:bg-ptime-orange rounded-lg border-2 border-solid border-prime-orange bg-prime-white px-8 py-1.5 text-xl font-bold hover:bg-prime-orange hover:text-white active:bg-prime-orange active:text-white"
						>
							شباب
						</label>
					</div>
					<div className="flex-1">
						<input
							type="radio"
							id="adult"
							name="ageGroup"
							value="3"
							className="hidden"
						/>
						<label
							for="adult"
							className="text-prime-whit hover:bg-ptime-orange rounded-lg border-2 border-solid border-prime-orange bg-prime-white px-8 py-1.5 text-xl font-bold hover:bg-prime-orange hover:text-white active:bg-prime-orange active:text-white"
						>
							كبار
						</label>
					</div>
				</div>
			</div>
			<div>
				<h3 className="mb-4 text-2xl font-bold">تقييم اللاعب من 5 نجوم</h3>
				<select
					name="rating"
					id="rating"
					className="h-12 w-full bg-white text-center"
					required
				>
					<option value="">اختر</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<div className="flex justify-between">
				<button
					type="submit"
					htmlFor="uploadPlayers"
					onClick={handleNewPlayer}
					className="flex cursor-pointer items-center justify-center gap-4 rounded-lg bg-prime-green-200 px-16 py-2 text-xl font-bold text-prime-white"
				>
					اضف لاعب
					<FaUserPlus className="text-2xl" />
				</button>
				<span className="flex items-center justify-center rounded-lg border-2 border-solid border-prime-green-200 px-4 py-2 text-xl font-bold text-prime-green-200">
					40
				</span>
			</div>
		</form>
	);
}
