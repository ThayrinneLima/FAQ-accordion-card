let quest = document.querySelectorAll('.quest')
let reply = document.querySelectorAll('.reply')
console.log(quest)
console.log(reply)


function expand(n){
    n-- 

    //desativar cabeçalho e resposta
    for( let i = 0; i<quest.length; i++){

        quest[i].classList.remove('quest-active')
        reply[i].classList.remove('reply-active')
    }

    //ativar cabeçalho
    quest[n].classList.add('quest-active')

    //ativar resposta
    reply[n].classList.add('reply-active')
}