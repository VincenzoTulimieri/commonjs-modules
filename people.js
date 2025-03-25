const myName = require('./name.js')
const myHobbies = require('./hobbies.js')
console.log(myName)
console.log(myHobbies)

function  myProfile(){
    return {
        fullName: myName('vincenzo', 'tulimieri'),
        hobbies: myHobbies('videogames','football','formula 1')
    }
}

console.log(myProfile())