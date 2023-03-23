
/*
Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
*/



const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const elemUl = document.querySelector('.gallery')
elemUl.style.display = 'block';
elemUl.style.listStyle = 'none';
elemUl.style.gap = '40px';
elemUl.style.textAlign = 'center';



// const element = images.map(image => {
//     const elemLi = document.createElement('li');
//     const elemImg = document.createElement('img');

//     elemImg.src = `${image.url}`
//     elemImg.alt = image.alt
//     elemImg.width = 250;

//     elemUl.append(elemImg, elemLi)
//     return elemUl;
// })

const markup = images.map(({ url, alt }) => `<li><img src=${url} alt=${alt} style= width:200px ></li>`).join('');
  

elemUl.insertAdjacentHTML("afterbegin", markup);




// images.forEach(image => {
//     const elemLi = document.createElement('li');
//     const elemImg = document.createElement('img');

//     elemImg.src = `${image.url}`
//     elemImg.alt = image.alt
//     elemImg.width = 250
//     elemLi.append(elemImg, elemLi)
   
  
// })