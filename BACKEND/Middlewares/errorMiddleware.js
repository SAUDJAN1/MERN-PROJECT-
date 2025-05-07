export const errorMiddleWare = (err, req, res, next) => {
  const status = err.status || 500;
  const msg = err.msg || "Backend Error";
  const extraDetails = err.extraDetails || null;
  return res.status(status).json({ success: false, msg, extraDetails });
};
