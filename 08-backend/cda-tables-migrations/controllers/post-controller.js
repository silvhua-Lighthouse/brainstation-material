import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getPosts = async (req, res) => {
  try {
    const data = await knex('post');
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving posts: ${err}`);
  }
}

const addPost = async (req, res) => {
  try {
    const newPost = req.body;
    newPost.likes = 0;
    newPost.created_at = new Date();
    newPost.updated_at = newPost.created_at;
    const result = await knex('post').insert(newPost);
    const newPostId = result[0];
    const createdPost = await knex('post').where({ id: newPostId });
    res.status(201).json(createdPost);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new post: ${error}`,
    });
  }
}

export {
  getPosts,
  addPost
}