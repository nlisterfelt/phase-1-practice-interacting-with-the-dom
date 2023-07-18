const counterObj = document.getElementById('counter')
let counter = 0
let pauseBoolean = false

document.addEventListener('DOMContentLoaded',()=>{
    const pause = document.getElementById('pause')
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const heart = document.getElementById('heart')
    const formInput = document.getElementById('comment-form')
    
    /*while(pauseBoolean === true){
            increment()
    }*/
    
    pause.addEventListener('click', e=> {
        pauseBoolean = !pauseBoolean
    })
    plus.addEventListener('click', plusFunc)
    minus.addEventListener('click', minusFunc)
    heart.addEventListener('click', heartFunc)
    formInput.addEventListener('submit', e => {
        e.preventDefault()
        const comment = document.querySelector('input#comment-input')
        commentFunc(comment.value)
    })
})

function increment(){
    setTimeout(plusFunc(), 1000)
}

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