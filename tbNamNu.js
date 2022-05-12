const array = [
			{ 
				name: "tung",
				gender: 'male',
				poin: 8
			},
			{ 
				name: "nam",
				gender: 'male',
				poin: 7
			},
			{ 
				name: "trung",
				gender: 'male',
				poin: 9
			},
			{ 
				name: "trang",
				gender: 'female',
				poin: 10
			},
			{ 
				name: "tham",
				gender: 'female',
				poin: 6
			},
			{ 
				name: "hang",
				gender: 'female',
				poin: 8
			},
];

let arrMalePoin = [];
let arrFemalePoin = [];

for (const value of array){
	if (value.gender === "male"){
		arrMalePoin.push(value.poin);
	}else {
		arrFemalePoin.push(value.poin);
	}
};

const avaragePoin = (arr) => {
	const totalPoin = arr.reduce((total, currentValue) => {
		return total + currentValue;
	});
	return totalPoin/arr.length;
}

console.log("diem tb cua nam " + avaragePoin(arrMalePoin));
console.log("diem tb cua nu " + avaragePoin(arrFemalePoin));

let males = 0;
let females = 0;
let totalMalePoin = 0;
let totalFemalePoin = 0;

for (const value of array){
	if (value.gender === "male"){
		totalMalePoin = totalMalePoin + value.poin;
		males++
	}else {
		totalFemalePoin = totalFemalePoin +value.poin;
		females++
	}
};

console.log("diem tb cua nam c2 " + totalMalePoin/males);
console.log("diem tb cua nu c2" + totalFemalePoin/females);

