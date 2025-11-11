export function startOfWeek(date = new Date()) {
  const d = new Date(date)
  const day = d.getDay() // 0 Sunday
  const diff = d.getDate() - day // back to Sunday
  d.setHours(0,0,0,0)
  d.setDate(diff)
  return d
}
