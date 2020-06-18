const Json = require('./Json');
const {info, strong} = require('./chalk');
const log = console.log;

module.exports = ({
  date, project, hours, desc
}) => {
  const file = 'data.json';
  const entry = [date.valueOf(), project, hours, desc];
  let data = Json.read(file, []);
  data.push(entry);
  Json.write(file, data);
  log(
    info('Logged'),
    strong(hours),
    info('hours, on'),
    strong(date.format('dddd YYYY-MM-DD')),
    info('for'),
    strong(project),
    info('project')
  );
};
