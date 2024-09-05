import { FaRegSquareCheck } from 'react-icons/fa6';

export default function MatchPopUp({ ...props }) {
	return (
		<div
			className="fixed inset-x-2 top-1/3 h-fit flex-col gap-8 rounded-lg border-2 border-solid border-prime-dark bg-prime-white py-8 text-center"
			style={{ display: props.show ? 'flex' : 'none' }}
		>
			<h2 className="text-4xl font-bold">انهاء مباراة {props.matchId}</h2>
			<table className="table-auto font-bold">
				<thead>
					<tr>
						<th>الفرق</th>
						<th>النتيجة</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>القادحين</td>
						<td>28</td>
						<td>
							<FaRegSquareCheck className="text-2xl text-prime-green-200" />
						</td>
					</tr>
					<tr>
						<td>الزاحفين</td>
						<td>34</td>
						<td>
							<FaRegSquareCheck className="text-2xl text-prime-green-200" />
						</td>
					</tr>
				</tbody>
			</table>

			<div className="flex items-center justify-center gap-4 text-prime-white">
				<button
					type="button"
					className="rounded-lg bg-prime-green-200 px-12 py-1 text-xl font-bold"
				>
					انهاء
				</button>
				<button
					type="button"
					className="rounded-lg bg-red-500 px-12 py-1 text-xl font-bold"
					onClick={props.handlePopup}
				>
					الغاء
				</button>
			</div>
		</div>
	);
}
