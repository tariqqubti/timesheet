const fs = require('fs');

exports.read = (path, fallback) => {
  if(fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
    return data ? JSON.parse(data) : fallback;
  }
  return fallback;
};

exports.write = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data), 'utf8');
};