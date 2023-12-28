import { apiHandler } from "@/backend/api-handler";
import { cookies } from "next/headers";

module.exports = apiHandler({
  POST: logout,
});

function logout() {
  cookies().delete("authorization");
}
