const registerCourse = (email, course) => {
	if (!email || !course) {
		return 'input_data_error';
	}
	let courseDetails = courseList.find((o) => o.cId === course);
	if (!courseDetails) {
		return 'input_data_error';
	}
	const emailId = email.split('@');
	let name = emailId[0];
	let addEmp = {
		email,
		course: 'reg-course--' + name + '-' + courseDetails.courseName,
		courseId: courseDetails.cId,
		status: true,
	};
	if (registerEmp.length < courseDetails.maxEmp) {
		registerEmp.push(addEmp);
	} else {
		return 'course_error';
	}
	return 'reg-course--' + name + '-' + courseDetails.courseName + 'accepted';
};
module.exports = { registerCourse };
