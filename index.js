let dbUsers = [
    {
        username: "zikry",
        password: "123",
        email: "zikry@gmail.com"
    },
        {
        username: "daus",
        password: "123",
        email: "daus@gmail.com"
    },
        {
        username: "haziq",
        password: "haziq",
        email: "haziq@gmail.com"
    }
]

function login(username, password) {
    console.log("Someone try to login with username:", username, "and password:", password)
    let matched = dbUsers.find(element =>
        element.username == username
    ) // finding element in the array
    if (matched) {
        if (matched.password == password) {
            return matched
        } else {
            return "Passwords do not match"}
    } else {
        return "Username not found"
    }
}

function register (newusername, newpassword, newemail) {
    // todo: check if username exist
    let userCheck = dbUsers.find(element =>
        element.username == newusername
    ) // check username in database
    if (userCheck){
        return "User already registered"
    } else {
        dbUsers.push({
            username: newusername,
            password: newpassword,
            email: newemail
        })
    }
    

}
//try to login
console.log(login("zikry", "123"))
console.log(login("fir", "doo"))

//try to register
register("firdaus", "doo", "firdaus@gmail.com")
console.log(register("zikry", "wdj", "help@gmail.com"))