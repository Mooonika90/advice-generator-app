const diceBtn = document.querySelector('.circle');
const text = document.querySelector('.text-quote');
const number = document.querySelector('.quote-numb');
const footerYear = document.querySelector('.footer-year');

function generateQuote() {
	fetch('https://api.adviceslip.com/advice')
		.then((res) => res.json())
		.then((data) => {
			number.textContent = `#${data.slip.id}`;
			text.textContent = `"${data.slip.advice}"`;
		});
}
diceBtn.addEventListener('click', generateQuote);

const addyear = () => {
	const newDate = new Date();
	footerYear.textContent = newDate.getFullYear();
};

addyear();
generateQuote();
