import { db } from "../models";

export default class CorpRes {
  addOrUpdateCorpRes = async function (data: {
    title: string;
    description: string;
    media: string[];
  }) {
    let existing = await db.corpRes.findByIdAndUpdate(
      "corp-Responsibility",
      data,
      { new: true, runValidators: true }
    );

    if (!existing) {
      existing = await db.corpRes.create({
        _id: "corp-Responsibility",
        ...data,
      });
    }
    return existing;
  };
  getCorpRes = async function () {
    const res = await db.corpRes.findById("corp-Responsibility");
    return res;
  };
}
