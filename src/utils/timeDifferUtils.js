const calculateTimeDifference = (startDateTime, endDateTime) => {
    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);
    const timeDifference = endDate - startDate;

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerHour = 60 * 60 * 1000;

    const days = Math.floor(timeDifference / millisecondsPerDay);
    const hours = Math.floor((timeDifference % millisecondsPerDay) / millisecondsPerHour);
    const minutes = Math.floor((timeDifference % millisecondsPerHour) / (60 * 1000))
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedDays = days.toString().padStart(3, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedDays}d ${formattedHours}h ${formattedMinutes}m`;
}
export { calculateTimeDifference };