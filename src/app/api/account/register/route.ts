import { apiHandler } from "@/backend/api-handler";
import Admin from "@/backend/dao/admin.dao";
import joi from "joi";

module.exports = apiHandler({
  POST: register,
});
const admin = new Admin();
async function register(req: Request) {
  const body = await req.json();
  await admin.register(body);
}

register.schema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().min(6).required(),
});
