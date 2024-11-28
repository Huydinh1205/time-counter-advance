export const formatTime = (time) => {
  let hour = Math.floor(time / 3600);
  let minute = Math.floor((time - hour * 3600) / 60);
  let second = time - minute * 60 - hour * 3600;
  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;
  if (second < 10) second = `0${second}`;

  return `${hour} : ${minute} : ${second}`;
};
