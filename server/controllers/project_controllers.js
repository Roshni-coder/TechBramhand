import Project from "../models/Project.js";
import { transporter } from "../config/mailer.js";

export const submitProject = async (req, res) => {
  try {
    const {
      target,
      budget,
      timeline,
      name,
      phone,
      contactEmail,
      description,
    } = req.body;

    if (!target || !budget || !timeline || !name || !phone || !contactEmail) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ✅ Save to DB
    await Project.create({
      target,
      budget,
      timeline,
      name,
      phone,
      contactEmail,
      description,
    });

    // ✅ Send email
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `🚀 New Project Request: ${target}`,
      html: `
        <h2>New Project Request</h2>
        <hr/>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${contactEmail}</p>
        <br/>
        <p><b>Target:</b> ${target}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Timeline:</b> ${timeline}</p>
        <br/>
        <p><b>Description:</b></p>
        <p>${description || "N/A"}</p>
      `,
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.error("❌ Submit Project Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
