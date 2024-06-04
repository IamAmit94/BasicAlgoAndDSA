console.log('start')


function importantAction(username, cb) {
    setTimeout(() => {
        cb(`Subscribe to  ${username}`)
    }, 0);
}


function likeTheVideo(video, cb) {
    setTimeout(() => {
        cb(`Like the ${video} video`)
    },1000)
}

function shareTheVideo(video, cb) {
    setTimeout(() => {
        cb(`Share the ${video} video`)
    }, 1000)
}


const message = importantAction('Code with me', function(message) {
    console.log(message);
    likeTheVideo('js int question', (action) => {
        console.log(action);
        shareTheVideo('js int question', (action) => {
            console.log(action);
        });
    });
})

console.log('Stop');