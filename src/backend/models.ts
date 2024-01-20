import ICarouselData from "@/interfaces/CarouselData.interface";
import mongoose, { Model, Schema, Document } from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017");
mongoose.Promise = global.Promise;
export const db = {
  Admin: adminModel(),
  Project: projectModel(),
  Carousel: carouselModel(),
  corpRes: corpResponsibilityModel(),
  News: newsModel(),
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
      company: { type: Schema.ObjectId, required: true },
      published: { type: Boolean, default: true },
      featured: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  );
  return mongoose.models.Project || mongoose.model("Project", schema);
}
function carouselModel() {
  const schema = new Schema(
    {
      title: {
        type: String,
        required: function (this: { location: ICarouselData["location"] }) {
          return this.location === "company" || this.location === "main"
            ? true
            : false;
        },
      },
      description: { type: String, required: true },
      type: {
        type: String,
        enum: ["image", "youtube"],
        required: function (this: { location: ICarouselData["location"] }) {
          return this.location === "company" || this.location === "main"
            ? true
            : false;
        },
      },
      media: { type: String, required: true },
      action: { type: String, required: false },
      companyId: {
        type: Schema.ObjectId,
        required: function (this: { location: ICarouselData["location"] }) {
          return this.location === "company" ? true : false;
        },
      },
      location: {
        type: String,
        enum: ["main", "company", "highlights"],
        required: true,
      },
      published: { type: Boolean, default: true },
      order: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );
  return mongoose.models.Carousel || mongoose.model("Carousel", schema);
}
function corpResponsibilityModel() {
  const schema = new Schema(
    {
      _id: { type: String, required: true },
      title: {
        type: String,
        required: true,
      },
      description: { type: String, required: true },

      media: { type: [String], required: true },
    },
    {
      timestamps: true,
    }
  );
  return (
    mongoose.models.corpResponsibility ||
    mongoose.model("corpResponsibility", schema)
  );
}

function newsModel() {
  const schema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: { type: String, required: true },

      media: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  return mongoose.models.News || mongoose.model("News", schema);
}
//carousel model
/*
title?: string;
description?: string;
media: string;
action?: string;
type?: "img"| "youtube";
location?: "main"|"company"|"highlights";
companyId?: string;
published: boolean;
*/

//company model
/*
id: string;
name: string;
path: string;
*/

//contact model
/*
address?: string;
phone?: string;
mail?: string;
facebook?: string;
instagram?: string;
xtwitter?: string;
youtube?: string;
*/
