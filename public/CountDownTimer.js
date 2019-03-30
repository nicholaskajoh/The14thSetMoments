const convocationDate = new Date('2019-07-19');

setInterval(function() {
  const now = new Date();
  let mSecsLeft = convocationDate.getTime() - now.getTime();
  mSecsLeft = mSecsLeft > 0 ? mSecsLeft : 0; 

  const mSecsInOneDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(mSecsLeft / mSecsInOneDay);
  mSecsLeft = mSecsLeft % mSecsInOneDay;

  const mSecsInOneHour = 1000 * 60 * 60;
  const hours = Math.floor(mSecsLeft / mSecsInOneHour);
  mSecsLeft = mSecsLeft % mSecsInOneHour;

  const mSecsInOneMin = 1000 * 60;
  const minutes = Math.floor(mSecsLeft / mSecsInOneMin);
  mSecsLeft = mSecsLeft % mSecsInOneMin;

  const mSecsInOneSec = 1000;
  const seconds = Math.floor(mSecsLeft / mSecsInOneSec);

  document.getElementById('timeLeft').textContent = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
}, 1000);