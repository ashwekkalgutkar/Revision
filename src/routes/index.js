const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/api/users', userRoutes);
router.use('/api/restaurants', restaurantRoutes);
router.use('/api/orders', orderRoutes);

module.exports = router;