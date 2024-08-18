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
            resolve (`Share the ${video} video`)
        }, 1000)
    })
   
}

importantAction("Amit")
  .then((res) => {
    console.log(res);
    likeTheVideo('BEta').then((res) => {
        console.log(res)
        shareTheVideo('Gama').then((res) => {
            console.log(res)
        })
    })
  })
  .catch((err) => console.log(err));


// Improved version for above code: Promise chaining

// importantAction("Amit")
//   .then((res) => {
//     console.log(res);
//    return likeTheVideo('js int question')
//   })
//   .then((res) => {
//     console.log(res)
//     return shareTheVideo('js int question')
//   })
//   .then((res) => {
//     console.log(res)    
//   })
//   .catch((err) => console.log(err));


console.log('Stop')


// The reason above code is called promise chaining is because we are getting the output and again we are 
// chaining it with other promise.