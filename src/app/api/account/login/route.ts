import { cookies } from "next/headers";
import joi from "joi";

import { apiHandler } from "@/backend/api-handler";
import Admin from "@/backend/dao/admin.dao";

apiHandler;

module.exports = apiHandler({
  POST: login,
});
const admin = new Admin();

async function login(req: Request) {
  const body = await req.json();
  const { admin: adminInfo, token } = await admin.login(body);

  // return jwt token in http only cookie
  cookies().set("authorization", token, { httpOnly: true });

  return adminInfo;
}

login.schema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});
