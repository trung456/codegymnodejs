const student = [
            {
                name: "Nguyen Van A",
                sex: "female"
            },
            {
                name: "Nguyen Van B",
                sex: "female"
            },
            {
                name: "Nguyen Van C",
                sex: "female"
            }
        ];
const kt = student.every(student => student.sex = "female");
console.log(kt);