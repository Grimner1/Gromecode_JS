
const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
allStudentsList
    .filter(students => studentsForRetake.indexOf(students) === -1)
    .map(name => 'Good job, ' + name);



//example 1:

//input:
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

getMessagesForBestStudents(allStud, retakeStud);

//output:
//['Good job, a', 'Good job, c']