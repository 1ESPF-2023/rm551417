// // Recuperando o botão com o getElementById
// const botao = document.getElementById("btn-1");

// // Recuperar um item específico com a função querySelector(parâmetro)
// // const seletor = document.querySelector("li")
// // console.log(seletor.textContent)

// // Recuperar uma lista de elementos com a função querySelectorAll
// const seletores = document.querySelectorAll("li");

// seletores.forEach((item)=>{
//     if(item.textContent == "Item-15"){
//         let meuItem = item
//         console.log(`Item selecionado : ${meuItem.textContent}`);
//         meuItem.textContent = "Tá dominado!"
//     }
// })
//     // Ou seletores.forEach((item)=>{console.log(`Item selecionado : ${meuItem.textContent}`);})
// console.log(seletores);

// setTimeOut
// setIterval
// Random
// Math.ceil
// Math.Random
// Math.Floor

let tmp = "";

function mudarCor(){

    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    const cabecalho = document.querySelector(".cabecalho");
    cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

    const banner1 = document.querySelector(".banner-1");
    banner1.style.backgroundColor = `rgb(${r},${g},${b})`;

    const banner2 = document.querySelector(".banner-2");
    banner2.style.backgroundColor = `rgb(${r},${g},${b})`;

    tmp = setTimeout(mudarCor, 500);

}

mudarCor();