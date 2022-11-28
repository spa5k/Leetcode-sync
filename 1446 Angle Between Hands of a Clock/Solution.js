/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
const angleClock = (hour, minutes) => {
  const oneHour = 30;
  const oneMinute = 6;
  const angelForHour = parseFloat((hour * oneHour) + minutes / 2);
  const angelForMinute = minutes * oneMinute;
  const diff = Math.abs(angelForHour - angelForMinute);
  return Math.min(diff, 360 - diff);
};