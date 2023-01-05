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
		console.log('input_data_error');
		return 'input_data_error';
	}
	var milliseconds = new Date().getTime();
	let obj = {
		courseName,
		instructor,
		date,
		minEmp,
		maxEmp,
		cId: 'offering--' + courseName + '-' + instructor,
		timestamp: milliseconds,
		id: num,
		status: true,
	};
	courseList.push(obj);
	return 'offering--' + courseName + '-' + instructor;
};

module.export = { addCourse };
