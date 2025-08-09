const monthTitle = document.querySelector('.month-title')
const select = document.querySelector('select')
const calender = document.querySelector('#calender')

// getting the current month
let monthCount = new Date().getMonth()
let currentMonth = gettingCurrentMonth(monthCount)

updateCalender(currentMonth)

select.addEventListener('change', () => {
  let choice = select.value
  updateCalender(choice)
})

// updating the currentMonth
function updateCalender(month) {
  let days = 31

  // add the title of heading
  monthTitle.textContent = month
  // creating of days with selected month
  for (let i = 1; i <= days; i++) {
    let li = document.createElement('li')
    li.classList.add('day')
    li.textContent = i
    calender.appendChild(li)
  }

}

// getting the current month with checking month count
function gettingCurrentMonth(count) {
  // make child nodes to an array
  const childrenArray = Array.from(select.children)
  // only returning the months
  const months = childrenArray.filter(gettingOnlyMonths)

  function gettingOnlyMonths(option) {
    return option.value != ''
  }
  console.log(months[count])
  return months[count].textContent
}