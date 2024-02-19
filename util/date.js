export function getFormatDate(date) {
  return date.toISOString().slice(0 ,10);
}

export function getDaysMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
 