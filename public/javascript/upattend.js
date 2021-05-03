async function upattendClickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log(id);
}

document.querySelector('.upattend-btn').addEventListener('click', upattendClickHandler);