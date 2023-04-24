import jwtDecode from 'jwt-decode'

export const checkUserLoggedIn = () => {
    let token = localStorage.getItem('user');
    if(!token) return false;
    try {
        let decodedToken = jwtDecode(token);
        return true;
    } catch (error) {
        localStorage.removeItem('user')
        return false
    }
}