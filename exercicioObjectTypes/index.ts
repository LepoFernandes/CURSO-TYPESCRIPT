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


console.log("NOVO EXERCICIO")
console.log("NOVO EXERCICIO")
console.log("NOVO EXERCICIO")


interface baseConfig{
    [index: string] : number | string | boolean
    id : number
    username: string
}


interface userConfig <T extends baseConfig>{
    config: T
}

function showUserConfig<T extends baseConfig>(user: userConfig<T>){
    console.log("")
    console.log("User config: ")

   for(const index in user.config){
    console.log(`${index}: ${user.config[index]}`)
   }
}

const user1: userConfig<baseConfig> = {
    config: {
    id: 10,
    username: "Lucas",
    darkMode: true,
    theme: "blue"
}};

const user2: userConfig<baseConfig> = {
    config:{
    id: 17,
    username: "Vitor",
    notifications: false,
    volume: 15
}};

const user3: userConfig<baseConfig> = {
    config:{
    id: 529,
    username: "Pedro",
    language: "Portuguese",
    theme: "pink"
}};

const user4: userConfig<baseConfig> = {
    config:{
    id: 485,
    username: "Murilo"
}};

showUserConfig(user1)
showUserConfig(user2)
showUserConfig(user3)
showUserConfig(user4)


console.log("NOVO EXERCICIO")
console.log("NOVO EXERCICIO")
console.log("NOVO EXERCICIO")


interface basicUser {
    [index: string] : boolean | string | number
    id: number
    name: string
}

interface adminUser extends basicUser{
    permissions: boolean
    deleteUsers: boolean
}

interface regularUser extends basicUser{
    subscriptionType: "free" | "premium"
    postsCreated: number
    profileComplete: boolean
}

interface guestUser extends basicUser{
    temporary: boolean
    expiresAt: string
    acessLimited: boolean
}

function printUserInfo(user: basicUser){
    console.log("")
    console.log("Users info:")

    for(const item in user){
        console.log(`${item}: ${user[item]}`)
    }
}


const admin: adminUser = {
    id: 1,
    name: "Lucas",
    permissions: true,
    deleteUsers: true
};

const regular: regularUser = {
    id: 2,
    name: "Raquel",
    subscriptionType: "premium",
    postsCreated: 42,
    profileComplete: true
};

const guest: guestUser = {
    id: 3,
    name: "Murilo",
    temporary: true,
    expiresAt: "2025-12-01",
    acessLimited: true
};

printUserInfo(admin)
printUserInfo(regular)
printUserInfo(guest)