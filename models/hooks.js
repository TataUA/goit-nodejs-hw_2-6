const handleSaveErr = (err, data, next) => {
  err.status = 400;
  next();
};

const runValidateAtUpdate = function (next) {
  this.options.runValidators = true;
  next();
};

module.exports = { handleSaveErr, runValidateAtUpdate };
