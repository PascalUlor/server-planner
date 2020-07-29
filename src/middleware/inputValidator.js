const checkItem = require('../util/checkInputs');
const requestHandler = require('../util/requestHandler');


const inputValidator =(req, res, next) => {
    const { serverType, virtualMachines } = req.body;

    const check = checkItem({
        serverType, virtualMachines,
      });

    if (Object.keys(check).length > 0) {
        return requestHandler.error(res, 400, 'Request Failed', check)
        // return res.status(400).json({
        //   statusCode: 400,
        //   check,
        // });
      }
    next();
};

module.exports = inputValidator;