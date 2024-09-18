'use client';

import eventStorage from '@/lib/storage/eventStorage';
import matchStorage from '@/lib/storage/matchStorage';
import pastEventStorage from '@/lib/storage/pastEventStorage';
import teamStorage from '@/lib/storage/teamStorage';

export default function StorageButton() {
	const handleButton = () => {
		const nextMatchId = matchStorage.getNextMatch();
		const matchList = matchStorage.getMatchesList()

		matchStorage.updateMatch(matchList[1], {added: true});
		// matchStorage.updateMatch(matchList[1], {added: true});
		// matchStorage.updateMatch(matchList[5], {added: true});


		// for(let i =0; i < matchList.length; i++){
		// 	matchStorage.updateMatch(matchList[i], {status: 0, added: false});
		// }
		const position = matchList.indexOf(nextMatchId);
		const match = matchStorage.getMatch(nextMatchId);

		console.log(position);
		console.log(match);
	};

	return (
		<button onClick={handleButton} type="button">
			run
		</button>
	);
}
