const addCourse = (
	courseName,
	instructor,
	date,
	minEmp,
	maxEmp,
	num,
	status
) => {
	if (!courseName || !instructor || !date || !minEmp || !maxEmp) {
		console.log('INPUT_DATA_ERROR');
		return 'INPUT_DATA_ERROR';
	}
	var milliseconds = new Date().getTime();
	let obj = {
		courseName,
		instructor,
		date,
		minEmp,
		maxEmp,
		cId: 'OFFERING-' + courseName + '-' + instructor,
		timestamp: milliseconds,
		id: num,
		status: true,
	};
	courseList.push(obj);
	return 'OFFERING-' + courseName + '-' + instructor;
};
module.exports = { addCourse };
