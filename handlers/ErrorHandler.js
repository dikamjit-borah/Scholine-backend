const errorHandler = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        status: error.status || 500,
        message: error.message,
      },
    });
  }

  const logError = (error, req, res, next) => {
    console.log(error);
    next(error);
  }

  const urlNotFoundError = (req, res, next) => {
    const error = new Error("Url Not Found");
    error.status = 404;
    next(error);
  }



module.exports = { errorHandler, logError, urlNotFoundError}