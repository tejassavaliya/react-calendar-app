import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()) {
	month = Math.floor(month);
	const year = dayjs().year();
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const daysMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			 currentMonthCount++;
			 return dayjs(new Date(year, month, currentMonthCount))
		})
	})

	return daysMatrix;

}

export function getWeek(weekStartDate = dayjs()) {
  const startOfWeek = weekStartDate.startOf('week'); // Get the start of the week (Sunday)
  let currentDayCount = 0;

  const daysMatrix = new Array(1).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      const day = startOfWeek.add(currentDayCount, 'day');
      currentDayCount++;
      return day;
    });
  });

  return daysMatrix;
}