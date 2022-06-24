const postModel = require('../../models/postModel')

exports.createPost = async( req, res ) => {

  const data = req.body

  try {
    const newpost = await postModel.create(data)
    res.status(201).json({successMessage: "post criado com sucesso!", newpost})
  } catch (error) {
    res.status(400).json({errorMessage: `Ocorreu um erro: ${error}`})
  }
}

exports.getAllPosts = async( req, res ) => {
  try{
    const posts = await postModel.find()
    res.status(200).json({posts})
  } catch (error) {
    res.status(400).json({errorMessage: `Ocorreu um erro: ${error}`})
  }
}

exports.updateOnePost = async ( req, res ) => {
  const id = req.params.id
  const data = req.body
  try{
    await postModel.updateOne({_id: id}, data)
    const postUpdated = await postModel.findOne({_id: id})
    res.status(200).json({succesMessage: "post atualizado com sucesso!", postUpdated})
  } catch (error) {
    res.status(400).json({errorMessage: `Ocorreu um erro: ${error}`})
  }
}

exports.deleteOnePost = async ( req, res ) => {
  const id = req.params.id
  try{
    await postModel.findByIdAndDelete(id)
    res.status(200).json({succesMessage: "post deletado"})
    //statement
  } catch (error) {
    res.status(400).json({errorMessage: `Ocorreu um erro: ${error}`})
  }
}