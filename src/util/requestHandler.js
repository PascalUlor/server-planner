const requestHandler = {
    success(res, statusCode, message, result) {
        return res.status(statusCode).json({
          success: true,
          statusCode,
          message,
          result,
        });
    },
    error(res, statusCode, message, err) {
      return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        err,
      });
    },
  };
  
  module.exports = requestHandler;
  