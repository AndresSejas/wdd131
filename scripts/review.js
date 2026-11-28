const textNumber = document.querySelector('#textNumber');

let numberReviews = localStorage.getItem('numberReviews') || 0;

numberReviews++;

if (numberReviews === 1){
    textNumber.textContent ='Congratulations!! You submitted the first review🥳';
} else{
    textNumber.textContent =`Number of Reviews: ${numberReviews}`;
}

localStorage.setItem('numberReviews', numberReviews);
