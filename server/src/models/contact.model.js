import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 150,
    },

    service: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    budget: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "proposal", "won", "lost"],
      default: "new",
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
