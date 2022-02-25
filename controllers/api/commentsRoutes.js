const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to add new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const addComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(addComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Route to update an specific comment
router.put('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.update({
            content: req.body.content,
            user_id: req.session.user_id
        },  
            {
            where: {
                id: req.params.id
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment was found'});
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to delete specific comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!'});
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;