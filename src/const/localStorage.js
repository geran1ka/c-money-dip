export const getLocalStorage = (key) => localStorage.getItem(key);

export const setLocalStorage = (key, value) => localStorage.setItem(key, value);

// export const setToken = token => {
//   localStorage.setItem('token', token);
// };

// export const getToken = () => {
//   let token = '';

//   if (localStorage.getItem('token')) {
//     token = localStorage.getItem('token');
//   }

//   return token;
// };

// export const deleteToken = () => {
//   setToken('');
// };
