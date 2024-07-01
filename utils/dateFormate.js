export function nowTime() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
}

export const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
