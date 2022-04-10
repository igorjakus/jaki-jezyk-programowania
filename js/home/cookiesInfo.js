const cookiesAcceptedCookieName = 'cookies-accepted';
const cookiesInfoEl = document.querySelector('.cookies-info');

cookiesInfoEl.querySelector('.btn-close').addEventListener('click', () => {
  cookiesInfoEl.classList.remove('show');
  localStorage.setItem(cookiesAcceptedCookieName, '1');
});

if (localStorage.getItem(cookiesAcceptedCookieName) !== '1') {
  cookiesInfoEl.style.display = 'flex';
  cookiesInfoEl.classList.add('show');
}
