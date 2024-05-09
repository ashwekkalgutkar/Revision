const Order = require('../models/Order');

const placeOrder = async (req, res) => {
  try {
    const { user, restaurant, items, totalPrice, deliveryAddress } = req.body;

    // for new orders
    const newOrder = new Order({
      user,
      restaurant,
      items,
      totalPrice,
      deliveryAddress
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user restaurant');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await Order.findByIdAndUpdate(id, { status });

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  placeOrder,
  getOrderById,
  updateOrderStatus
};