import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import QRCode from "qrcode";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://raghavultimate92004:Notho 92004@an-ano-nymus.0tkl0.mongodb.net/?appName=An-Ano-nymus";


mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Connection to DB failed:", error);
  });

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Contact = new mongoose.model("Contact", contactSchema);

app.post("/api/contact", async (req, res) => {
  console.log(req.body);
  const { name, email, subject, message } = req.body;
  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).send({ message: "Successfully sent message" });
  } catch (error) {
    console.error("Error message is not sent:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    console.log("Received message:", message);

    // Broadcast the message to all other clients
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

console.log("WebSocket server started on ws://localhost:8080");

// Simulate a database for storing payment requests
const payments = {};
// Payment details
// const upi_id = "9351027145@ybl";
const upi_id = "7982644217@ptsbi";
const payee_name = "Test User";

// Create a payment request
app.post("/create-payment", (req, res) => {
  const { amount, courseName, email } = req.body;
  const paymentId = uuidv4();
  payments[paymentId] = { amount, courseName, email, paid: false };
  QRCode.toDataURL(
    `upi://pay?pa=${upi_id}&pn=${encodeURIComponent(
      payee_name
    )}&am=${amount}&cu=INR`,
    (err, url) => {
      if (err) {
        return res.status(500).json({ error: "Failed to generate QR code" });
      }
      console.log(paymentId,payee_name,payments);
      res.json({
        url: `upi://pay?pa=${upi_id}&pn=${encodeURIComponent(
          payee_name
        )}&am=${amount}&cu=INR`,
        paymentId: paymentId,
      });
    }
  );
});

// Handle payment confirmation
app.post("/pay/:paymentId", (req, res) => {
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
      // user: "rohit.20bcgc024@jecrcu.edu.in",
      user: "raghavultimate92004@gmail.com",
      // pass: "$rohitkumar18$",
      pass: "Notho92004",
    },
  });

  const mailOptions = {
    from: "rohit.20bcgc024@jecrcu.edu.in",
    to: email,
    subject: "Payment Confirmation",
    text: `Your payment of INR ${amount} for ${description} has been successfully processed.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.json({
    success: true,
    message: `Payment ID ${paymentId} processed successfully`,
  });
});

const port = 5000 || 6000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
