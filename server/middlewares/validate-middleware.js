const { ZodError } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      // Use `issues` instead of `errors`
      const message = err.issues?.[0]?.message || "Invalid input data";
      console.log("Validation Error:", message);
      return res.status(400).json({ msg: message });
    }

    console.error("Unexpected validation error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = validate;
