console.log("%cguessing_game.js is running...", "color: red");

//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.	

// Pseudocode :
// prompt guessNumber
// Math.random
// counter = 5 live
// descending counter, live -= 1
// if guessNumber > randomNumber, down
// if guessNumber < randomNumber, up
// else, congrats!!
// if counter > 0, prompt guessNumber
// else, game over
let guessNumber = document.querySelector('.guess-number');
const result = document.querySelector('.result');
const win = document.querySelector('.win');
const btnCheck = document.querySelector('.btn-check');
const btnAgain = document.querySelector('.btn-again');
let attempt = document.querySelector('.attempts');
let scale = document.querySelector(`.scale`);
let tahmin;
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
let live = 5;
let min = 1;
let max = 100;
const arrayAttempts = new Array;

document.getElementById("guess-number").focus();

console.log(scale);
btnAgain.addEventListener(`click`, () => {
	window.location.reload();
});


btnCheck.addEventListener(`click`, () => {
    tahmin = guessNumber.value;
    console.log(tahmin);
    if (tahmin!=''){
    
	
		console.log('%cindex.js line:46 liveeeeee', 'color: #007acc;', live);
		console.log('%cindex.js line:46 tahmin:', 'color: #007acc;', tahmin);
		console.log('%cindex.js line:46 randomNumber: ', 'color: #007acc;', randomNumber);
		console.log('%cindex.js line:39 typeOf(xxx)', 'color: #007acc;', typeof(Number(live)));
		live --;
		if (Number(tahmin) == Number(randomNumber)){
			document.getElementById("btn-check").disabled = true;
		}
		if (Number(tahmin) == Number(randomNumber) && Number(live) == 4){
			console.log(`Congrats!! You win on 1st try.`);
			win.innerText = `Congrats!! You win on 1ST try.`;
			win.style.color = `green`;}
		if ((tahmin == randomNumber) && (live==3)){
			console.log(`Congrats!! You win on 2nd try.`);
			win.innerText = `Congrats!! You win on 2nd try.`;
			win.style.color = `green`;}
		if ((tahmin == randomNumber) && (live==2)){
			console.log(`Congrats!! You win on 3rd try.`);
			win.innerText = `Congrats!! You win on 3rd try.`;
			win.style.color = `green`;}
		if ((tahmin == randomNumber) && (live<2)){
			console.log(`Congrats!! Your ${5 - live}th try.`);
			win.innerText = `Congrats!! You win on ${5 - live}th try.`;
			win.style.color = `green`;}    
		
		else {
			arrayAttempts.push(guessNumber.value);
			console.log('%cindex.js line:72 arrayAttempts', 'color: #007acc;', arrayAttempts);
			document.getElementById('array-attemps').innerText = arrayAttempts
			console.log(`You have only ${live} lives!!`)
			result.innerText = `You have only ${live} lives!!`;
			result.style.color = `gray`

			
			attempt.innerHTML = Number(attempt.innerHTML)+1;

			console.log(guessNumber.value);

			if (tahmin > randomNumber) {
				
				max = tahmin;
				scale.innerHTML = `Too high! :  Correct answer is between ${min} and ${tahmin}`;
				deleteHeart()
			
			} 
			else if (tahmin < randomNumber) {
				min = tahmin;
				scale.innerHTML = `Too low!  :  Correct answer is between ${tahmin} and ${max}`;
				deleteHeart()
			} 
		}
		
		if (live == 0 && tahmin != randomNumber) {
			console.log("Game over! :(");
			result.innerText = `Game over! \t :( `;
			document.getElementById("btn-check").disabled = true;
		}
		
		document.getElementById("guess-number").focus();
		guessNumber.value = ``;
		} else {
			scale.innerHTML = `Can't be empty!`;
			document.getElementById("guess-number").focus();
		}

});

const deleteHeart = () => {
	const listHearts = document.getElementById("lives");
	// console.log('%cindex.js line:77 listHearts:', 'color: #007acc;', listHearts);
	let elementHeart = document.querySelector(".img-lives");
	elementHeart.style.opacity = "0.2";
	elementHeart.remove();
	listHearts.appendChild(elementHeart);
	// listHearts.removeChild(listHearts.lastElementChild);
}

document.getElementById("guess-number").addEventListener("keydown", function(e){
	if (e.key === 'Enter') {
		// code for enter
		checker
}
});

// Game over dediğimiz if'te btnCheck.disable vereceğiz
// kalpler silinmesin opacity leri düşsün





// pseudocode:
// get id ile atama
// addeventlistener ile
// arrow function
// innerHTML, innerText vs ile yazdır
// click ten sonra kıyas yapcak