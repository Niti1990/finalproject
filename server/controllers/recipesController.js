import Recipe from '../models/Recipes.js'
//CRUD operations on the User model. Try: GET, POST, PUT, DELETE, then send a status of success and the json of the entries matching the conditions. Catch send a status of error and the error message.For each operation that is performed on the route users/:id, we need to extract the id from the request parameter



//find All Recipes
export const getAllRecipes = async (req, res) => {
	try {
		const recipes = await Recipe.find()
		res.status(200).json(recipes)
	} catch (err) {
		res.status(500).json({ error: error.message })
	}
}
// find single recipe
export const getSingleRecipe = async (req, res) => {
	try {
		const { id } = req.params
		const singleRecipe = await Recipe.findById(id)
		res.status(200).json(singleRecipe)
		console.log(singleRecipe)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}


