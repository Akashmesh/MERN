

const { ZodError } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      const status = 422;
      const message = "Validation Failed";
      const extraDetails = err.issues?.[0]?.message || "Invalid input data";

      const error = {
        status,
        message,
        extraDetails,
      };
      console.log("Validation Error:", error);
      next(error);
    } else {
      // handle unexpected error
      next({
        status: 500,
        message: "Internal Server Error",
        extraDetails: err.message || "Unexpected validation issue",
      });
    }
  }
};

module.exports = validate;
