const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to add new comment
// router.post('/', withAuth, async (req, res) => {
//     try {
//         const addComment = await Comment.create({
//             ...req.body,
//             user_id: req.session.user_id,
//         });

//         res.status(200).json(addComment);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

module.exports = router;