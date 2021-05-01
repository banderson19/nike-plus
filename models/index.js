// import all models
const Post = require('./Post');
const User = require('./User');
const Attend = require('./Attend');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Post, {
  through: Attend,
  as: 'attended_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Attend,
  as: 'attended_posts',
  foreignKey: 'post_id'
});

Attend.belongsTo(User, {
  foreignKey: 'user_id'
});

Attend.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Attend, {
  foreignKey: 'user_id'
});

Post.hasMany(Attend, {
  foreignKey: 'post_id'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Attend };
