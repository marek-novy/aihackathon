import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

const SYSTEM_CONTENT = `You are master travel advisor with 20 years of traveling experience.
Generate a list of potential activities suitable for a trip based on the provided details. The response must be in JSON format, containing an array of exactly 10 suggested activities. Activity names have to be general, like "hiking", "island hopping" or "cooking classes". Ensure the activities are diverse and suitable for the destination. Details: Destination: [Destination], Duration: [Duration], Number of Travellers: [Number of Travellers]."
Example Input:
{
  "Destination": "Thailand",
  "Duration": "2 weeks",
  "Number of Travellers": "2"
}
Example Output:
{
    "activities": [
        "Island Hopping",
        "Cultural Tours",
        "Temple Visits",
        "Diving",
        "Trekking",
        "Cooking Classes",
        "River Cruises",
        "Snorkeling",
        "Shopping"
    ]
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userContent = {
      Destination: req.body.destination,
      Duration: req.body.duration,
      "Number of Travellers": req.body.persons,
    };

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: "user", content: JSON.stringify(userContent) },
        { role: "system", content: SYSTEM_CONTENT },
      ],
      model: "gpt-4",
      temperature: 0.9,
      max_tokens: 50,
      top_p: 0.8,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res
      .status(200)
      .json({ response: chatCompletion.choices[0].message.content });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
