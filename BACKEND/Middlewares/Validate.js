const Validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const status = 400;
    const msg = "Fill The Input Field Properly";
    const extraDetails = error.errors[0].message;
    next({ status, msg, extraDetails });
  }
};
export default Validate;
