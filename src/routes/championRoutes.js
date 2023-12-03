import Champion from "../models/championModel.js";

async function getChampions(req, res) {
  try {
    const champions = await Champion.findAll();
    res.status(200).json(champions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getChampionById(req, res) {
  try {
    const champion = await Champion.findByPk(req.params.id);
    if (champion) {
      res.status(200).json(champion);
    } else {
      res.status(404).json({ error: "Champion not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addNewChampion(req, res) {
  try {
    const champion = await Champion.create(req.body);
    res.status(201).json(champion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function uppdateChampion(req, res) {
  try {
    const champion = await Champion.findByPk(req.params.id);
    if (champion) {
      await champion.update(req.body);
      res.status(200).json({ data: champion });
    } else {
      res.status(404).json({ error: "Champion not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getChampions, getChampionById, addNewChampion, uppdateChampion };
