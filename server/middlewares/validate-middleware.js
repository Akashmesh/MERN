// const { ZodError } = require("zod");

// const validate = (schema) => async (req, res, next) => {
//   try {
//     const parsedBody = await schema.parseAsync(req.body);
//     req.body = parsedBody;
//     next();
//   } catch (err) {
//     if (err instanceof ZodError) {
//       // Use `issues` instead of `errors`
//       const message = err.issues?.[0]?.message || "Invalid input data";
//       console.log("Validation Error:", message);
//       return res.status(400).json({ msg: message });
//     }

//     console.error("Unexpected validation error:", err);
//     return res.status(500).json({ msg: "Internal server error" });
//   }
// };

// module.exports = validate;


// const validate = (schema) => async (req, res, next) => {
//   try {
//     const parseBody = await schema.parseAsync(req.body);
//     req.body = parseBody;
//    next();
//   } catch (err) {
//     const status = 422;
//     const message = "Fill the input properly";
//     const extraDetails = err.error[0].message;

//     const error = {
//       status,
//       message,
//       extraDetails,
//     };
//     console.log(error);
//     next(error);
//   }
// };

// module.exports = validate;

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
