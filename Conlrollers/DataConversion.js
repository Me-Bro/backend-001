import User from "../Models/User.js";
import converter from "json-2-csv";
//import { json2csv } from "json-2-csv";

export const JsonToCsv = async (req, res) => {
  try {
    const users = await User.find({});

    const csv = converter.json2csv(users);
    console.log(csv);
    res.status(200).json(csv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
