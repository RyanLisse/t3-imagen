import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(500).json({ data: "Invalid request" });
  } else {
    const { description, artStyle } = req.body;

    const prompt = `${description}, in the style of ${artStyle}`;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    const { data } = response.data;

    if (!data[0]) {
      res.status(500).json({ data: "No images returned" });
    } else {
      const imageUrl = data[0].url || "";
      res.status(201).json({
        data: imageUrl,
      });
    }
  }
}