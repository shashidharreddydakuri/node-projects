const fs = require('fs');
const { addCourse } = require('./addCourse');
const { courseAlloted } = require('./alloate');
const { registerCourse } = require('./register');
const filename = process.argv[2];

global.courseList = [];
global.registerEmp = [];
function main(dataInput) {
	var inputLines = dataInput.toString().split('\n');
	for (i = 0; i < inputLines.length; i++) {
		if (inputLines) {
			let input = inputLines[i].split(' ');
			switch (input[0]) {
				case 'CANCEL':
					let str = `${input[1]} CANCEL_ACCEPTED`;
					for (j = 0; j < registerEmp.length; j++) {
						if (registerEmp[j].course == input[1].trim()) {
							registerEmp[j].status = false;
						}
					}
					console.log(str);
					break;
				case 'ADD-COURSE-OFFERING':
					let addCoursName = addCourse(
						input[1],
						input[2],
						input[3],
						parseInt(input[4]),
						parseInt(input[5]),
						i
					);
					console.log(addCoursName);
					break;
				case 'REGISTER':
					let registerCourse1 = registerCourse(input[1], input[2].trim());
					console.log(registerCourse1);
					break;
				case 'ALLOT':
					let courseAlloted22 = courseAlloted(input[1], inputLines.length);
					break;
			}
		}
	}
}
data = fs.readFileSync(process.argv[2]).toString();
main(data);

module.exports = { main };
// fs.readFile(filename, "utf8", (err, data) => {
//     /*if (err) throw err
//     var inputLines = data.toString().split("\n")
//     // Add your code here to process input commands
//     */
// })
