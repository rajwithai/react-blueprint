import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: ["http://localhost:8080", "http://localhost:5173"] }));
app.use(express.json());

// ── Nodemailer Transporter ────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP connection on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error.message);
  } else {
    console.log("✅ SMTP server is ready to send emails");
  }
});

// ── Email HTML Template Helper ────────────────────────────────────────────────
function buildEmailHtml(title, rows) {
  const rowsHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;font-weight:600;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top;width:160px;">${label}</td>
          <td style="padding:10px 16px;color:#111827;font-size:14px;word-break:break-word;">${value || "<em style='color:#9ca3af'>—</em>"}</td>
        </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%);padding:32px 36px;">
              <p style="margin:0 0 4px 0;color:#60a5fa;font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">AliphAI</p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">${title}</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:24px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
                ${rowsHtml}
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:16px 36px 32px;border-top:1px solid #f3f4f6;">
              <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">
                This email was sent automatically from the <strong>aliphai.ai</strong> website.<br/>
                Please respond directly to the sender's email address.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Route: Contact Form ───────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, company, interest, message } = req.body;

  if (!name || !email || !interest || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields." });
  }

  const html = buildEmailHtml("New Contact Form Submission", [
    ["Full Name", name],
    ["Email", `<a href="mailto:${email}" style="color:#3b82f6;">${email}</a>`],
    ["Company", company],
    ["Interested In", interest],
    ["Message", message.replace(/\n/g, "<br/>")],
  ]);

  try {
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_FROM_EMAIL,
      replyTo: email,
      subject: `Contact: ${interest} — ${name}`,
      html,
    });

    console.log(`📧 Contact email sent from ${email}`);
    res.json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error("❌ Failed to send contact email:", err.message);
    res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

// ── Route: Demo Request Form ──────────────────────────────────────────────────
app.post("/api/demo", async (req, res) => {
  const { name, email, organization, title, companySize, industry, products } = req.body;

  if (!name || !email || !organization || !title) {
    return res.status(400).json({ success: false, error: "Missing required fields." });
  }

  const productList = Array.isArray(products) && products.length > 0
    ? products.join(", ")
    : null;

  const html = buildEmailHtml("New Demo Request", [
    ["Full Name", name],
    ["Email", `<a href="mailto:${email}" style="color:#3b82f6;">${email}</a>`],
    ["Organization", organization],
    ["Job Title", title],
    ["Company Size", companySize],
    ["Industry", industry],
    ["Products Interested In", productList],
  ]);

  try {
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_FROM_EMAIL,
      replyTo: email,
      subject: `Demo Request: ${name} — ${organization}`,
      html,
    });

    console.log(`📧 Demo request email sent from ${email}`);
    res.json({ success: true, message: "Demo request submitted successfully." });
  } catch (err) {
    console.error("❌ Failed to send demo email:", err.message);
    res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

// ── Route: Waitlist/Newsletter ──────────────────────────────────────────────────
app.post("/api/waitlist", async (req, res) => {
  const { email, source } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: "Missing required fields." });
  }

  const html = buildEmailHtml("New Waitlist Signup", [
    ["Email", `<a href="mailto:${email}" style="color:#3b82f6;">${email}</a>`],
    ["Source", source || "Website"],
  ]);

  try {
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_FROM_EMAIL,
      replyTo: email,
      subject: `Waitlist Signup: ${email}`,
      html,
    });

    console.log(`📧 Waitlist email sent from ${email}`);
    res.json({ success: true, message: "Waitlist joined successfully." });
  } catch (err) {
    console.error("❌ Failed to send waitlist email:", err.message);
    res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

// ── Route: Healthcare Partner ──────────────────────────────────────────────────
app.post("/api/healthcare", async (req, res) => {
  const { name, org, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: "Missing required fields." });
  }

  const html = buildEmailHtml("New Healthcare Partner Application", [
    ["Full Name", name],
    ["Email", `<a href="mailto:${email}" style="color:#3b82f6;">${email}</a>`],
    ["Organization", org || ""],
    ["Role", role || ""],
  ]);

  try {
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_FROM_EMAIL,
      replyTo: email,
      subject: `Healthcare Partner: ${name} — ${org}`,
      html,
    });

    console.log(`📧 Healthcare partner email sent from ${email}`);
    res.json({ success: true, message: "Healthcare application submitted successfully." });
  } catch (err) {
    console.error("❌ Failed to send healthcare email:", err.message);
    res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

// ── Health Check ──────────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

// ── Start Server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Mailer server running on http://localhost:${PORT}`);
});
