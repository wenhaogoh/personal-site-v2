import { createHmac } from "crypto";

import { ENV } from "../shared/consts";

const encrypt = (password: string) =>
  createHmac("sha256", ENV.AUTHENTICATION_SECRET)
    .update(password)
    .digest("hex");

export default encrypt;
