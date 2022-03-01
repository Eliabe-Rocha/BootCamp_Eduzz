function calculadora(){
    const operacao = Number(prompt('Escolha qual operação deseja executar:\n 1 - Operações de Soma\n 2 - Operações de Subtração\n 3 - Operações de Multiplicação\n 4 - Operações de Divisão\n 5 - Operações de Resto da Divisão\n 6 - Operações de Potenciação'));
    if (!operacao || operacao <= 0 || operacao >= 7){
        alert("Erro - Digite uma opção válida");
        calculadora();
    } else {
        let n1 = Number(prompt('Digite o primeiro número'));
        let n2 = Number(prompt('Digite o segundo número'));
        let resultado;

        if (!n1 || !n2){
            alert("Erro - Digite um número válido")
        } else {
            function soma(){
                resultado = n1 + n2;
                alert(`A Soma de ${n1} e ${n2} é igual a ${resultado}`);
                novaop();
            };
        
            function subtracao(){
                resultado = n1 - n2;
                alert(`A Subtração de ${n1} e ${n2} é igual a ${resultado}`);
                novaop();
            };
        
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`A Multiplicação de ${n1} e ${n2} é igual a ${resultado}`);
                novaop();
            };
        
            function divisao(){
                resultado = n1 / n2;
                alert(`A Divisão de ${n1} e ${n2} é igual a ${resultado}`);
                novaop();
            };
        
            function resto(){
                resultado = n1 % n2;
                alert(`O Resto da divisão de ${n1} por ${n2} é igual a ${resultado}`);
                novaop();
            };
        
            function potencia(){
                resultado = n1 ** n2;
                alert(`A Potencia de ${n1} elevado a ${n2} é igual a ${resultado}`);
                novaop();
            };

            function novaop(){
                let denovo = prompt('Deseja realizar outra operação?\n Digite 1 - Sim e 2 - Não.');
        
                if(denovo == 1){
                    calculadora();
                }
                else if (denovo == 2){
                    alert("See you later");
                }
                else {
                    alert("Erro - Digite uma opção válida")
                    novaop();
                }
        
            }

        }
    
        switch (operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
            case 5:
                resto();
                break;
            case 6:
                potencia();
                break;
        }    
    }

    
}

calculadora();