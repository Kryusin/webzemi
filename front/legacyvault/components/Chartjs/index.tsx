export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Floating Bar Chart'
        }
    }
};

export function getWeekStr(dayNumber: number) {
    if (dayNumber < 0) {
        dayNumber = 7 + dayNumber;
    }
    const weekNumber = Math.abs(dayNumber)
    let weekStr = 'Sunday';
    if (weekNumber == 1) {
        weekStr = 'Monday'
    } else if (weekNumber == 2) {
        weekStr = 'Tuesday'
    } else if (weekNumber == 3) {
        weekStr = 'Wednesday'
    } else if (weekNumber == 4) {
        weekStr = 'Thursday'
    } else if (weekNumber == 5) {
        weekStr = 'Friday'
    } else if (weekNumber == 6) {
        weekStr = 'Saturday'
    }
    return weekStr;
}

export const data = (data: number[]) => {
    const date = new Date();
    const labels = [getWeekStr(date.getDay() - 6), getWeekStr(date.getDay() - 5), getWeekStr(date.getDay() - 4), getWeekStr(date.getDay() - 3), getWeekStr(date.getDay() - 2), getWeekStr(date.getDay() - 1), getWeekStr(date.getDay())];
    return {
        labels,
        datasets: [
            {
                label: '枚数',
                data: data,
                backgroundColor: [
                    '#00E609',
                    '#f5b2b2',
                    '#21C5FF',
                    '#BF8F00',
                    '#BF8F00',
                    '#808080',
                    '#FF0000'
                ],
            },
        ]
    }
}