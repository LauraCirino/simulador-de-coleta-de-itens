let colletctItems = 0;
document.getElementById("collect").addEventListener('click', () => {
    while (colletctItems < 10) {
        colletctItems++;
        document.getElementById("items").textContent = `itens coletados: ${colletctItems} `;
        break;
    }

    if(colletctItems === 10){
        document.getElementById("win-menssage").textContent = "Parabens!Você coletou toda as moedas"
        document.getElementById("collect").disabled = true;
    }
});