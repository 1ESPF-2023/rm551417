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

let tmpCor = "";
let tmpImg = "";
let img = ["../img/banner-lateral-1.png","../img/banner-lateral-2.png","../img/banner-lateral-3.png"]

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

    // const img1 = document.querySelector(".img1");
    // img1.style.backgroundColor = `rgb(${r},${g},${b})`;
  
    // const img2 = document.querySelector(".img2");
    // img2.style.backgroundColor = `rgb(${r},${g},${b})`;
  
    // const img3 = document.querySelector(".img3");
    // img3.style.backgroundColor = `rgb(${r},${g},${b})`;

    tmp = setTimeout(mudarCor, 500);

}
function mudarImagens1(){

    let imgIndex = Math.floor(Math.random() * img.length);
    let imgSrc = img[imgIndex];
  
    const img1 = document.querySelector(".img1");
    img1.src = imgSrc;
  
    const img2 = document.querySelector(".img2");
    img2.src = imgSrc;
  
    const img3 = document.querySelector(".img3");
    img3.src = imgSrc;

    const img4 = document.querySelector(".img4");
    img4.src = imgSrc;

    const img5 = document.querySelector(".img5");
    img5.src = imgSrc;

    const img6 = document.querySelector(".img6");
    img6.src = imgSrc;
  
    tmpImagens = setTimeout(mudarImagens1, 1000);
}

mudarCor();
mudarImagens1();