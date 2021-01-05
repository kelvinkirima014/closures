// closures
function  retirement(retirementAge) {
    return function (yearOfBirth) {
        let a = ' years left until retirement. ';
        let age = 2021 - yearOfBirth;
        console.log((retirementAge - age) +a);
    }
}
let retirementKenya = retirement(65);
retirementKenya(1990);
let retirementUs = retirement(66);
retirementUs(1990);


function interviewQuestion(job){
    return function (name) {
        if (job === 'designer'){
            console.log(name + ', can you please explain what UX design is?')

        }else if (job === 'teacher'){
            console.log('what subjects do you teach, ' + name + '?');

        }else {
            console.log('hello, what do you do?');
        }

    }
}
interviewQuestion('teacher')('Mark');