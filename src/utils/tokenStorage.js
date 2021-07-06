const TOKEN_KEY_NAME = 'token';

export const getToken = () =>{
    return localStorage.getItem(TOKEN_KEY_NAME);

}

export const setToken = (token) =>{
  return localStorage.setItem(TOKEN_KEY_NAME, token);
}