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

// let tmpCor = "";
// let tmpImg = "";
// let img = ["../img/banner-lateral-1.png","../img/banner-lateral-2.png","../img/banner-lateral-3.png"]

// function mudarCor(){

//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     const cabecalho = document.querySelector(".cabecalho");
//     cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

//     const banner1 = document.querySelector(".banner-1");
//     banner1.style.backgroundColor = `rgb(${r},${g},${b})`;

//     const banner2 = document.querySelector(".banner-2");
//     banner2.style.backgroundColor = `rgb(${r},${g},${b})`;

    // const img1 = document.querySelector(".img1");
    // img1.style.backgroundColor = `rgb(${r},${g},${b})`;
  
    // const img2 = document.querySelector(".img2");
    // img2.style.backgroundColor = `rgb(${r},${g},${b})`;
  
    // const img3 = document.querySelector(".img3");
    // img3.style.backgroundColor = `rgb(${r},${g},${b})`;

//     tmpCor = setTimeout(mudarCor, 500);

// }

// function mudarImagens(){

//     let imgIndex = Math.floor(Math.random() * img.length);
//     let imgSrc = img[imgIndex];
  
//     const img1 = document.querySelector(".img1");
//     img1.src = imgSrc;
  
//     const img2 = document.querySelector(".img2");
//     img2.src = imgSrc;
  
//     const img3 = document.querySelector(".img3");
//     img3.src = imgSrc;

//     const img4 = document.querySelector(".img4");
//     img4.src = imgSrc;

//     const img5 = document.querySelector(".img5");
//     img5.src = imgSrc;

//     const img6 = document.querySelector(".img6");
//     img6.src = imgSrc;
  
//     tmpImg = setTimeout(mudarImagens, 2000);
// }

// mudarCor();
// mudarImagens();

// function mudaBanner(){
//     const imgElement1 = document.querySelector(".banner-1 img");
//     // console.log(imgElement1);
//     let num = Math.ceil(Math.random() * 3);
//     // imgElement1.src = "./img/banner-lateral-"+num+".png";
//     imgElement1.src = `./img/banner-lateral-${num}.png`;
//     setTimeout(mudaBanner2,2000)
// }

// function mudaBanner2(){
//     const imgElement2 = document.querySelector(".banner-2 img");
//     // console.log(imgElement1);
//     let num = Math.ceil(Math.random() * 3);
//     // imgElement1.src = "./img/banner-lateral-"+num+".png";
//     imgElement2.src = `./img/banner-lateral-${num}.png`;
//     setTimeout(mudaBanner,2000)
// }

// mudaBanner();

// function mudaBanner(){
//     const imgElement = document.querySelector(".banner-1 img");
//     let num = Math.ceil(Math.random() * 3);
//     imgElement.src = `./img/banner-lateral-${num}.png`;

//     const imgElement2 = document.querySelector(".banner-2 img");
//     num = Math.ceil(Math.random() * 3);
//     imgElement2.src = `./img/banner-lateral-${num}.png`;

//     setTimeout(mudaBanner,2000);
// }

// mudaBanner();

// const botao = document.querySelector("button");
const botoes = document.querySelectorAll("button");
botoes.forEach((botao)=>{
    botao
});

// console.log(botao);
botao.addEventListener("click", function(){
    if(this.textContent == "LIGAR"){
        const imgElement = document.querySelector(".img[alt = 'Lampada apagada']");
        imgElement.src = "./img/pic_bulbon.gif";
        imgElement.alt = "Lampada acesa";
        this.textContent = "DESLIGAR";
    }
    else{
        const imgElement = document.querySelector(".img[alt = 'Lampada acesa']");
        imgElement.src = "./img/pic_bulboff.gif";
        imgElement.alt = "Lampada apagada";
        this.textContent = "LIGAR";
    }
});