import jwt from "jsonwebtoken";
import { db } from "../models";
import bcrypt from "bcrypt";
import { IAdmin } from "@/interfaces/Admin.interface";
import { Query } from "mongoose";

export default class Admin {
  login = async ({ email, password }: IAdmin) => {
    const admin = await db.Admin.findOne({ email });

    if (!(admin && bcrypt.compareSync(password, admin.password))) {
      throw "Username or password is incorrect";
    }
    const token = jwt.sign({ sub: admin.id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    return {
      admin: admin.toJSON(),
      token,
    };
  };
  register = async (params: any) => {
    // validate
    if (await db.Admin.findOne({ email: params.email })) {
      throw 'Email "' + params.email + '" is already registered';
    }

    // const user = new User(params);

    // hash password
    if (params.password) {
      const hash = bcrypt.hashSync(params.password, 10);
      db.Admin.create({ email: params.email, password: hash });
    }

    // save user
    // await user.save();
  };
  getAllAdmins = async () => {
    const admins = await db.Admin.find({}, { password: false });
  };
}
