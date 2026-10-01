import Contact from "../models/contact.model.js";

import {
  sendContactNotification,
  sendContactConfirmation,
} from "../services/email.service.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, service, budget, message } = req.body;

    if (!name || !email || !service || !budget || !message) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    const normalizedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedService = service.trim();
    const normalizedBudget = budget.trim();
    const normalizedMessage = message.trim();

    if (
      !normalizedName ||
      !normalizedEmail ||
      !normalizedService ||
      !normalizedBudget ||
      !normalizedMessage
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const contact = await Contact.create({
      name: normalizedName,
      email: normalizedEmail,
      service: normalizedService,
      budget: normalizedBudget,
      message: normalizedMessage,
    });

    try {
      await sendContactNotification(contact);
      await sendContactConfirmation(contact);
    } catch (emailError) {
      console.error("Contact email failed:", emailError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Your project inquiry has been received.",
      data: {
        id: contact._id,
      },
    });
  } catch (error) {
    console.error("Contact creation failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};
