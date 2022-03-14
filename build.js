const container = document.querySelector("div.container");
const prevNextButton = document.querySelectorAll(".prev-next-buttons button");
prevNextButton.forEach((button) => {
	button.addEventListener("click", (e) => {
		const thisButton = e.target;
		const presentPosi = container.transform;
		console.log(presentPosi);
		// if(thisButton.classList.contains("prev")) {

		// }
	});
});

// const nameHeading = document.querySelector("p.name-heading");
// const randomColor = (opacity) => {
// 	let [r, g, b] = [~~(Math.random() * 256), ~~(Math.random() * 256), ~~(Math.random() * 256)];
// 	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
// };

// "sarthak-jha"
// 	.toUpperCase()
// 	.split("")
// 	.forEach((letter) => {
// 		let s = document.createElement("SPAN");
// 		s.textContent = letter;
// 		if (/[^A-Z]/.test(letter)) {
// 			s.style.opacity = "0";
// 		}
// 		nameHeading.append(s);
// 	});

// document.querySelectorAll("p.name-heading span").forEach((letter) => {
// 	letter.style.color = randomColor(1);
// });

// const changeLetterColor = setInterval(() => {
// 	document.querySelectorAll("p.name-heading span").forEach((letter) => {
// 		letter.style.color = randomColor(1);
// 	});
// }, 200);
