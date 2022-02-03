document.addEventListener('DOMContentLoaded',function(){
    var text = document.getElementById("text")
    const promise1 = new Promise((resolve,reject) => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => resolve(data))
    })
    const promise2 = new Promise((resolve,reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => resolve(data))
    })
    Promise.all([promise1, promise2]).then(res => {
        for(let i=0;i<res[0].length;i++){
            for (let [key, value] of Object.entries(res[0][i])) {
                text.innerHTML+=key+":"+value+"<br>"
            }
            text.innerHTML+="<br>"
        }
        text.innerHTML+="<hr>"
        for(let i=0;i<res[1].length;i++){
            for (let [key, value] of Object.entries(res[1][i])) {
                text.innerHTML+=key+":"+value+"<br>"
            }
            text.innerHTML+="<br>"
        }
    })

})