function happyHolidays(string) {
  return `Happy holidays!`
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}
happyHolidaysTo(`you`)

function happyHolidayTo(holiday, firstname) {
  return `Happy ${holiday}, ${firstname}!`
}
happyHolidayTo(`Independence Day,`, `you`)

function happyCountdown(holiday, days) {
  return `It's ${days} until {holiday}!`
}