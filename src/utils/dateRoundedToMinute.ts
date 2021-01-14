/**
 * dateRoundedToMinute.
 *
 * @param {number} minutes
 * @param {Date} date
 * @returns {Date}, rounded to the nearest increment
 */
export default (minutes: number = 15, date: Date = new Date()): Date => {
  const milliseconds = 1000 * 60 * minutes; // convert minutes to ms
  const roundedDate = new Date(
    Math.round(date.getTime() / milliseconds) * milliseconds
  );

  return roundedDate;
};
