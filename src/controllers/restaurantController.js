const Restaurant = require('../models/Restaurant');

const addRestaurant = async (req, res) => {
  try {
    const { name, address } = req.body;

    const newRestaurant = new Restaurant({
      name,
      address
    });
    await newRestaurant.save();

    res.status(201).json({ message: 'Restaurant added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRestaurantById,
  getAllRestaurants,
  addRestaurant
};