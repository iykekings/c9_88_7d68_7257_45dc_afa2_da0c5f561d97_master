export function genDates(begin, end) {
  let res = [];
  let current = new Date(begin).getTime();
  const stop = new Date(end).getTime();
  while (current <= stop) {
    res.push(new Date(current).toISOString().split('T')[0]);
    current += 24 * 3600 * 1000;
  }
  return res;
}

export function getDatesFromString(date) {
  return date.split('\n').map((d) => d.split('to').map((s) => s.trim()));
}
export function getNamesFromString(date) {
  return date.split('\n').map((d) => d.trim());
}
