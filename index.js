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

function holidayCountdown(days, holiday) {
  return `It's ${days}, until ${holiday}!`
}
holidayCountdown(`20 days`, `Mother's Day`)
