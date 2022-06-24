const { model} = require('mongoose')
const postModel = model('posts', {
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = postModel