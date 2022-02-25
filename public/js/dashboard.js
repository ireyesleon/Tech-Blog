// Function to add new post
const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create new post');
        }
    }
};

//Function to update post
const updatePostHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const title = document.querySelector('#post-title').value.trim();
        const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            window.location = document.referrer
        } else {
            alert('Failed to update post');
        }
    }
}
}


// Function to delete post
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            window.location = document.referrer
        } else {
            alert('Failed to delete post');
        }
    }
};

// Function to add a comment to a Post
const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#add-comment').value.trim();
    console.log(comment)
    
    if (comment) {
        const response = await fetch(`api/posts/:id`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create new post');
        }
    }
};

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
document.querySelector('#delete-button').addEventListener('click', delButtonHandler);
document.querySelector('.update-post-form').addEventListener('submit', updatePostHandler);
// document.querySelector('.comment-form').addEventListener('submit', newCommentHandler);