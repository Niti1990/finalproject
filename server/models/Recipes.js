import mongoose from 'mongoose'
const { Schema } = mongoose

const recipesSchema = new Schema({
	title: String,
	body: String,
	description: String,
})

//using the model method to declare model
const Recipe = mongoose.model('Recipe', recipesSchema)

export default Recipe
