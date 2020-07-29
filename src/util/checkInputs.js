const checkInput = (inputValue) => {
  const errors = {};
  Object.keys(inputValue).forEach((key) => {
    if (
        !inputValue[key] ||
      Object.keys(inputValue[key]).length === 0
      || inputValue[key].length === 0
      || inputValue[key] === ''
    ) {
      errors[key] = `${key} field can not be blank`;
    } else {
      /*
       *input Validation
       */
      if (key === 'serverType' || key === 'virtualMachines') {
        if (typeof inputValue[key] !== 'object') {
          errors[key] = `${key} must be an object`;
        }
      }

    }
  });
  return errors;
};
module.exports = checkInput;
