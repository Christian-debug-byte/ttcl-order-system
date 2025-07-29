const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    // Sent request to Server as Body (Json)
    const data = { name, description, price, stock, category, imageUrl };
    data = req.body;
    // Create data into DB after request sent from Frontend
    if (!data.name) {
      res.status(400);
    } else {
      const savedProduct = await Product.create({ data });
    }
    // Replay message from server
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
