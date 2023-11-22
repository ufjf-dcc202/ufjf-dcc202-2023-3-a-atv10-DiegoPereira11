let joao = 1;
let maria = 2;
 
function getMaria(){
    return maria;
}

function getJoao(){
    return joao;
}

function deJoaoParaMaria(){
    joao = joao + maria;
    maria = 0;
}

function deMariaParaJoao(){
    maria = maria + joao;
    joao = 0;
}

export{getMaria, getJoao, deJoaoParaMaria, deMariaParaJoao};