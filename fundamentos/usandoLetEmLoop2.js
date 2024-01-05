const funcs = []

for (let i = 0; i< 13; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[1]()
funcs[3]()