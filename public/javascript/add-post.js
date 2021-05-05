async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_canyon = document.querySelector('input[name="post-canyon"]').value;
    const post_time = document.querySelector('input[name="post-time"]').value;
    const post_activity = document.querySelector('input[name="post-activity"]').value;

    const post_content = ` ${post_canyon} @ ${post_time} , ${post_activity}`;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);