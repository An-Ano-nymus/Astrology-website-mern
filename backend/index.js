import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import QRCode from "qrcode";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config(); // Load environment variables

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ✅ MongoDB Connection
const uri = process.env.MONGO_URI || "mongodb+srv://raghavultimate92004:rTlXOFzEnpEiTw5y@an-ano-nymus.0tkl0.mongodb.net/?appName=An-Ano-nymus";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // 10 seconds timeout
    });
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

connectDB();

// ✅ Contact Schema & Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Successfully sent message" });
  } catch (error) {
    console.error("❌ Error sending message:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ WebSocket Setup
import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    console.log("Received message:", message);
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("✅ WebSocket server started on ws://localhost:8080");

// ✅ Payment Processing
const payments = {};
const upi_id = "7982644217@ptsbi";
const payee_name = "Test User";

app.post("/create-payment", (req, res) => {
  const { amount, courseName, email } = req.body;
  const paymentId = uuidv4();
  payments[paymentId] = { amount, courseName, email, paid: false };

  QRCode.toDataURL(
    `upi://pay?pa=${upi_id}&pn=${encodeURIComponent(payee_name)}&am=${amount}&cu=INR`,
    (err, url) => {
      if (err) {
        return res.status(500).json({ error: "Failed to generate QR code" });
      }
      console.log(paymentId, payee_name, payments);
      res.json({
        url: `upi://pay?pa=${upi_id}&pn=${encodeURIComponent(payee_name)}&am=${amount}&cu=INR`,
        paymentId,
      });
    }
  );
});

// ✅ Payment Confirmation & Email Notification
app.post("/pay/:paymentId", async (req, res) => {
  const paymentId = req.params.paymentId;
  if (!payments[paymentId]) {
    return res.status(404).json({ error: "Payment request not found" });
  }
  payments[paymentId].paid = true;

  // Send email notification
  const { email, amount, description } = payments[paymentId];
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // ✅ Secure Password Storage
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Payment Confirmation",
    text: `Your payment of INR ${amount} for ${description} has been successfully processed.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }

  res.json({ success: true, message: `Payment ID ${paymentId} processed successfully` });
});

// ✅ Start Server
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
