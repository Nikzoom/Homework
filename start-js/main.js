const user =
{
    Nikita: {
        name: 'Nikita',
        age: 15,
        inadmin: true,
        userHello(name) {
            console.log(`Hello ${name}`)
        },
    }
}
console.log(user)
user.Nikita.userHello(`Nikita`)

const users = [

    {
        name: 'Ivan',
        age: 14,
        inadmin: false
    },


    {
        name: 'Awton',
        age: 21,
        inadmin: false
    },


    {
        name: 'Alex',
        age: 16,
        inadmin: true
    }
    ,

    {
        name: 'Tom',
        age: 17,
        inadmin: false
    }
    ,

    {
        name: 'Anna',
        age: 19,
        inadmin: true
    }
    ,

    {
        name: 'Dmitry',
        age: 22,
        inadmin: false
    }
    ,

    {
        name: 'Elena',
        age: 20,
        inadmin: false
    }
    ,

    {
        name: 'Maxim',
        age: 18,
        inadmin: true
    }
    ,

    {
        name: 'Sophia',
        age: 16,
        inadmin: false
    }
    ,

    {
        name: 'Pavel',
        age: 24,
        inadmin: true
    }
    ,

    {
        name: 'Olga',
        age: 23,
        inadmin: false
    },


    {
        name: 'Kirill',
        age: 17,
        inadmin: false
    }
    ,

    {
        name: 'Maria',
        age: 25,
        inadmin: true
    }
    ,

    {
        name: 'Artem',
        age: 19,
        inadmin: false

    }

]
let checkUser = 0
function checkUsers(array, check)  {
    for (let i = 0; i < array.length; i++) {
        if (array[i].inadmin === check) {
            checkUser++
        }
    }
    return checkUser
}
const result = checkUsers(users, false)
console.log(result)