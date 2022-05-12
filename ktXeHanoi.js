const checkListHanoi = (licensePlate) =>{
	const array = [ '29', '30', '31', '32', '33', '40'];
	for (const value of array) {
	 if (licensePlate.startsWith(value)){
		return true;
		}
	}
	return false;
}

const listLicensePlate = [ "29S2-03188", "33X3-33333", "40H3-01456", "28HB-10121"];

let listLicensePlateInHanoi = [];

for (const value of listLicensePlate){
	if (checkListHanoi(value)) {
		listLicensePlateInHanoi.push(value);
	}
}

console.log(listLicensePlateInHanoi, 'listLicensePlateInHanoi');