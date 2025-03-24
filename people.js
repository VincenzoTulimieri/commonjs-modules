const myName = require('./name.js')
const myHobbies = require('./hobbies.js')
console.log(myName)
console.log(myHobbies)

function  myProfile(){
    return {
        fullName: myName(),
        hobbies: myHobbies()
    }
}

console.log(myProfile())