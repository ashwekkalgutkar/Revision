const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.post('/', restaurantController.addRestaurant);
router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);
router.get('/:id/menu', restaurantController.getRestaurantMenu);
router.post('/:id/menu', restaurantController.addItemToMenu);
router.put('/:id/menu/:menuId', restaurantController.updateMenuItem);
router.delete('/:id/menu/:menuId', restaurantController.deleteMenuItem);

module.exports = router;
