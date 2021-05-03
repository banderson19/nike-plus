async function commentFormHandler(event) {
    event.preventDefault();

    const comment_info = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    console.log(comment_info, post_id);
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);