import storageHelper from "./storageHelper";

const isValidTeam = (data) => {
	const requiredFields = {
		id: 'string',
		name: 'string',
		Rating: 'number',
		'Age-Group': 'number',
	};
    storageHelper.validFields(requiredFields, data)
	if (data.Rating < 0 || data.Rating > 5) {
		throw new Error(`Rating out of boundary`);
	}
	if (data['Age-Group'] < 1 || data['Age-Group'] > 3) {
		throw new Error(`Age-Group out of boundary`);
	}
};