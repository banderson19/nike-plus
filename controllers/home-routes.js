const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Attend } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_content',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE post.id = attend.post_id)'), 'attend_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_info', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', {
                posts,
                loggedOn: req.session.loggedOn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get single post
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'post_content',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE post.id = attend.post_id)'), 'attend_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_info', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostData.get({ plain: true });

            res.render('single-post', {
                post,
                loggedOn: req.session.loggedOn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedOn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
