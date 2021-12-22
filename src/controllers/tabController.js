import { Tab } from "../models/tabs.js";

export const GetAllTabs = async (_, res) => {
  try {
    const allTabs = await Tab.find();

    if (allTabs) {
      res.json({ success: true, data: allTabs });
    }
  } catch (err) {
    console.log("err in getting all tabs data");
    res.status(500).send(err);
  }
};
