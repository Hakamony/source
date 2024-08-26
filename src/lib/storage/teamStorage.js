import storageHelper from './storageHelper';

const isValidTeam = (data) => {
	const requiredFields = {
		id: 'string',
		name: 'string',
		'number-of-players': 'number',
		players: typeof [],
		'team-rating': 'number',
		'match-played': typeof {},
		points: 'number',
	};
	const requiredFieldsMatchPlayed = {
		won: 'number',
		tie: 'number',
		lose: 'number',
		total: 'number',
	};
	storageHelper.validFields(requiredFields, data);
    storageHelper.validFields(requiredFieldsMatchPlayed, data['match-played'])
    storageHelper.validIdList(data.players)
    
};


