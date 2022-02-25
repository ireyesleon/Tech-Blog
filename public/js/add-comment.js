// Function to add a new comment to a post
const newCommentHandler = async (event) => {
    event.preventDefault();

        const comment = document.querySelector('#add-comment').value.trim();

    if (comment) {
        const response = await fetch(`/api/comments/`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/post');
        } else {
            alert('Failed to add comment');
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', newCommentHandler);