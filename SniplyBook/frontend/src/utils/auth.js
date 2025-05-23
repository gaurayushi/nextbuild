export function setToken(token) {
  localStorage.setItem('token', token);
}
export function logout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}
