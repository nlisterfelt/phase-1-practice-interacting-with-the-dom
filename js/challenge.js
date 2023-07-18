const counterObj = document.getElementById('counter')
let counter = 0
let pauseBoolean = true
let interval

document.addEventListener('DOMContentLoaded',()=>{
    const pause = document.getElementById('pause')
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const heart = document.getElementById('heart')
    const formInput = document.getElementById('comment-form')
    startStopIncrement()
        
    pause.addEventListener('click', startStopIncrement)
    plus.addEventListener('click', plusFunc)
    minus.addEventListener('click', minusFunc)
    heart.addEventListener('click', heartFunc)
    formInput.addEventListener('submit', e => {
        e.preventDefault()
        const comment = document.querySelector('input#comment-input')
        commentFunc(comment.value)
    })
})

function plusFunc(){
    counter += 1
    counterObj.innerText = counter
}

function minusFunc(){
    counter -= 1
    counterObj.innerText = counter
}

function heartFunc(){
    const likes = document.querySelector('.likes')
    likes.innerText = `${counter} Likes`
}

function commentFunc(comment){
    const commentContainer = document.getElementById('list')
    const commentLI = document.createElement('li')
    commentLI.innerText = comment
    commentContainer.appendChild(commentLI)
}

function startStopIncrement(){
    pauseBoolean = pauseBoolean === false ? true : false
    if(pauseBoolean === false){
        startIncrement()
    } else {
        stopIncrement()
    }
}

function startIncrement(){
    if(!interval){
        interval=setInterval(plusFunc, 1000)
    }
}

function stopIncrement(){
    clearInterval(interval)
    interval = null
}