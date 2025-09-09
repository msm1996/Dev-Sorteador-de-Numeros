function gerenciarNumero(){
    const min =  Math.ceil (document.querySelector(".min").value)
    const max = Math.floor (document.querySelector(".max").value)

    if(min < max){
        const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(resultado)
    }else{
        alert("o valor minimo tem que ser menor que o maior")
    }

    

    

    

}
