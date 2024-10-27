import express from "express";
import fs from "fs/promises";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const readFile = async (filename: string) => {
  try {
    const rawData = await fs.readFile(
      `${__dirname}/../database/${filename}.json`,
      "utf-8"
    );
    const data = JSON.parse(rawData);
    return data;
  } catch (error) {
    console.error("Error reading file", error);
    return null;
  }
};

app.get("/whiskeys", async (req, res) => {
  const whiskeys = await readFile("whiskeys");
  if (!whiskeys) return res.sendStatus(500);

  res.json(whiskeys);
});

app.listen(4000);
