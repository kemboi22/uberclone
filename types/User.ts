interface LoginUser {
    email: string,
    password: string
}

interface User extends LoginUser {
    name: string,
    confirmPassword: string
}