const Post = require("../models/post");

const createPost = async (req, res) => {};
const createPostWithImage = async (req, res) => {};
const listOwnPost = async (req, res) => {}; //post que no tengan estado false
const listPublicPost = async (req, res) => {};
const updatePost = async (req, res) => {};
const deletePost = async (req, res) => {};

module.exports = {
  createPost,
  createPostWithImage,
  listOwnPost,
  listPublicPost,
  updatePost,
  deletePost,
};
