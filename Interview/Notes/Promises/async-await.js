//async await is the advance way of writing promises


console.log('start')


function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to  ${username}`)
        }, 1000);
    })
    
}


function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the ${video} video`)
        },1000)
    })
   
}

function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject (`Share the ${video} video`)
        }, 1000)
    })
   
}

// const result = async() => {
//     const msg1 = await importantAction('amit');
//     const msg2 = await likeTheVideo('js int question');
//     const msg3 = await shareTheVideo('js int question');
//     console.log({msg1, msg2, msg3})
// }


// updated approch to handle the error in async await 
const result = async() => {
    try {
        const msg1 = await importantAction('amit');
        console.log(msg1)
    const msg2 = await likeTheVideo('js int question');
    console.log(msg2)
    const msg3 = await shareTheVideo('js int question');
    console.log(msg3)
    // console.log({msg1, msg2, msg3})
    } catch (error) {
        console.log(`Promise failed`, error)
    }
}
result()

console.log('Stop')