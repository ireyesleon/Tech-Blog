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


document.querySelector('#delete-button').addEventListener('click', delButtonHandler);
document.querySelector('.update-post-form').addEventListener('submit', updatePostHandler);