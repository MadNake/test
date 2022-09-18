"use stict"

function getComputerChoice() {
	switch (Math.floor(Math.random() * 3)) {
		case 0: return "бумага"
			break
		case 1: return "камень"
			break
		case 2: return "ножницы"
			break
	}
}


function playGame() {

	let userChoice = document.querySelectorAll(".item")

	for (let i = 0; i < userChoice.length; i++) {
		userChoice[i].addEventListener("click", function (evt) {
			evt.preventDefault();
			switch (userChoice[i]) {

				case userChoice[0]: userChoice = ("камень")
					break
				case userChoice[1]: userChoice = ("ножницы")
					break
				case userChoice[2]: userChoice = ("бумага")
					break
			};

			let computerChoice = getComputerChoice();

			function determineWinner(userChoice) {
				// proverka nichia
				if (userChoice === computerChoice) {
					return "ничья";
				};
				// proveerka na kamen
				if (userChoice === 'камень') {
					if (computerChoice === "бумага") {
						return "Компьютер победил"
					} else {
						return "Игрок победил"
					}
				}
				// proverka na bumagu
				if (userChoice === "бумага") {
					if (computerChoice === "ножницы") {
						return "Компьютер победил"
					} else {
						return "Игрок победил"
					}
				}
				// proverka na nojnici 
				if (userChoice === "ножницы") {
					if (computerChoice === "камень") {
						return "Компьютер победил"
					} else {
						return "Игрок победил"
					}
				}
			}

			console.log(`Ваш выбор ${userChoice}`);
			console.log(`Выбор компьютера ${computerChoice}`);
			console.log(determineWinner(userChoice))


			// let div = document.createElement('div');
			// div.className = "alert";
			document.getElementById('alert').style.display = "flex";
			document.getElementById('alert').innerHTML = `<p>Ваш выбор ${userChoice} <br> Выбор компьютера ${computerChoice} <br> ${determineWinner(userChoice)}</p>`;
			// document.body.append(div);
			// setTimeout(() => div.remove(), 5000);
			
			// $(document).ready(function() {
			// 	$("#alert").html('Hi there!');
			// });
			
		});

	}

}

playGame()