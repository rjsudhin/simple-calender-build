const root = document.documentElement
const themeToggleBtn = document.querySelector('#theme-switching-btn')

root.classList.add('light')


themeToggleBtn.addEventListener('click', () => {
  if (root.className == 'light') {
    root.classList.remove('light')
    root.classList.add('dark')
    themeToggleBtn.classList.remove('fi-sr-heart')
    themeToggleBtn.classList.add('fi-rr-heart')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
    themeToggleBtn.classList.add('fi-sr-heart')
    themeToggleBtn.classList.remove('fi-rr-heart')
  }
  
  
})