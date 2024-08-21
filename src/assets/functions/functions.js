import Axios from 'axios'
export const infos = async () => {
    let list = []
    const url = "https://jsonplaceholder.typicode.com/users"
    list = await Axios.get(url)
    return { loading: false, list: list?.data }
}
export const handleLogin = ({ email, password }) => {
    if (email.length === 0) {
        alert("Email should n't be empty")
        return 0
    } else if (password.length === 0) {
        alert("Password should n't be empty")
        return 0
    } else if (password.length < 8) {
        alert("Password length should be minimum 8 character.")
        return 0
    }
    alert("Login Api Calling....")
}
export const handleSignUp = ({ name, email, zip, password, cPassword }) => {
    if (name.length === 0) {
        alert("Name should n't be empty")
        return 0
    } else if (email.length === 0) {
        alert("Email should n't be empty")
        return 0
    } else if (zip.length === 0) {
        alert("Zip should n't be empty")
        return 0
    } else if (password.length === 0) {
        alert("Password should n't be empty")
        return 0
    } else if (password.length < 8) {
        alert("Password length should be minimum 8 character.")
        return 0
    } else if (cPassword.length === 0) {
        alert("Confirm Password should n't be empty")
        return 0
    } else if (cPassword.length < 8) {
        alert("Confirm Password length should be minimum 8 character.")
        return 0
    } else if (password !== cPassword) {
        alert("Password mismatch")
        return 0
    }
    alert("Sign Up Api Calling....")
}