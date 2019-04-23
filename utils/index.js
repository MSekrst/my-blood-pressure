export const getFormattedDateString = timestamp => {
  const date = new Date(timestamp)

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`
}

export const getFormattedTimeString = timestamp => {
  const date = new Date(timestamp)

  return `${date.getHours()}:${date.getMinutes()}`
}
