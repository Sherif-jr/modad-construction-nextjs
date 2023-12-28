import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017");
mongoose.Promise = global.Promise;
export const db = {
  Admin: adminModel(),
  Project: projectModel(),
};

function adminModel() {
  const schema = new Schema(
    {
      name: { type: String },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.User || mongoose.model("User", schema);
}

function projectModel() {
  const schema = new Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      // img/s
      brand: { type: String, required: true },
      published: { type: Boolean, default: true },
      featured: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  );
  return mongoose.models.Project || mongoose.model("Project", schema);
}
