import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { syncEmails } from "./imap";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/sync", async (req, res) => {
  try {
    await syncEmails();
    res.send("Emails synced successfully!");
  } catch (err) {
    res.status(500).send("Error syncing emails: " + err);
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
