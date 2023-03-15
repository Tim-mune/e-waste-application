import { UnauthenticatedError } from "../Errors/index.js";
const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.createdBy.toString()) return;
  throw new UnauthenticatedError("Not authorized to access this route");
};
export default checkPermissions;
