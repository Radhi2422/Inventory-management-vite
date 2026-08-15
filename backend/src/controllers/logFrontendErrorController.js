exports.logFrontendError = async (req, res) => {
  try {
    const {
      message,
      stack,
      url,
      component,
      action,
      timestamp
    } = req.body;

    logger.error({
      source: "frontend",
      message,
      stack,
      url,
      component,
      action,
      timestamp
    });

    res.status(200).json({
      success: true
    });

  } catch (error) {
    next(error);
  }
};