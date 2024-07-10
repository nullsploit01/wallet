export const generateRandomId = (length = 8) => {
  return Math.floor(Math.random() * Date.now())
    .toString(16)
    .substring(0, length)
}

export const getGreeting = (date: Date = new Date()): string => {
  const hours = date.getHours()

  if (hours < 12) return 'Good morning!'
  if (hours < 18) return 'Good afternoon!'
  return 'Good evening!'
}
