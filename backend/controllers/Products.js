import Products from "../models/ProductModel.js";
import Users from "../models/UserModel.js";

export const getProducts = async (req, res) => {
  try {
    const response = await Products.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductbyId = async (req, res) => {
  try {
    const response = await Products.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, userId } = req.body;
  try {
    await Products.create({
      name: name,
      price: price,
      userId: userId,
    });
    res.status(200).json({ msg: "Product berhasil ditambahkan" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateProduct = (req, res) => {};

export const deleteProduct = (req, res) => {};
