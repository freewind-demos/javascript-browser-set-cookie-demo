function setCookie() {
  const cookieName = document.getElementById('cookieName').value;
  const cookieValue = document.getElementById('cookieValue').value;
  const newCookie = `${cookieName}=${cookieValue}; path=/`;
  document.cookie = newCookie;
  alert(`Done!\n${newCookie}\nCheck your cookie from browser console.`);
}
