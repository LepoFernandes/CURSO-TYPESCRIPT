//EXERCICIO DO CHAT GPT

interface UserProfile{
    readonly id: number
    name: string
    email?: string
    age?: number
    role: "admin" | "user" | "guest"
}

function printUser(user: UserProfile){
   let message = `User ${user.id} with the name ${user.name}`

   if(user.email){
    message += `, email ${user.email}`
   }
   if(user.age){
    message += `, ${user.age} years `
   }

   message += `in the role of ${user.role}`

   console.log(message)
}

const userA: UserProfile ={
    id: 89,
    name:"Lucas Fernandes",
    age: 26,
    email:"lucasgomes@email.com",
    role:"admin"
}

const userB: UserProfile ={
    id: 57,
    name:"Raquel Freitas",
    age: 25,
    role:"user"
}

const userC: UserProfile ={
    id: 77,
    name:"Murilo Fernandes",
    role:"user"
}

const userD: UserProfile ={
    id: 82,
    name: "Luisa Fontoura",
    email:"luisa@email.com",
    role: "guest"
}

printUser(userA)
printUser(userB)
printUser(userC)
printUser(userD)