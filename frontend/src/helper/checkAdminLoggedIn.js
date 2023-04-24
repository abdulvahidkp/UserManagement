import jwtDecode from 'jwt-decode'

export const checkAdminLoggedIn = () => {
    let token = localStorage.getItem('admin');
    if(!token) return false;
    try {
        let decodedToken = jwtDecode(token);
        return true;
    } catch (error) {
        localStorage.removeItem('admin')
        return false
    }
}