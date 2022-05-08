import express from 'express'
import {
	getAllRecipes,
	getSingleRecipe,
} from '../controllers/recipesController.js'

const router = express.Router()

//create route for CRUD operations at endpoint "Receipes"

router.route('/').get(getAllRecipes)

//create route for CRUD operations at endpoint "for one receipe"
router.route('/:id').get(getSingleRecipe)

//export routes
export default router;
