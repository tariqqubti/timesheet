const Json = require('./Json');
const {info, strong} = require('./chalk');

const log = console.log;

const isBetween = (from, to) => ([milliseconds]) => {
  return milliseconds >= from.valueOf() &&
    milliseconds <= to.valueOf();
};

module.exports = ({from, to}) => {
  const data = Json.read('data.json', []);
  const sum = data
    .filter(isBetween(from, to))
    .map(([,, hours]) => hours)
    .reduce((acc, x) => acc + x, 0);
  log(
    info('Total hours from'),
    strong(from.format('dddd YYYY-MM-DD')),
    info('to'),
    strong(to.format('dddd YYYY-MM-DD')),
    info('is:'),
    strong(sum)
  );
};