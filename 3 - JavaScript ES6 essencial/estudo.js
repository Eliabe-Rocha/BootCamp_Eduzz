/**fuction getName(){
    return "Eliabe Rocha Da Cruz"
}

fuction logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName)*/

function soma(a){
    function(b){
        return a + b;
    }
}

const soma2 = soma(2);

soma2(3);
soma2(4);
soma2(5);
