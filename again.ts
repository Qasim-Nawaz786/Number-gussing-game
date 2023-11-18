import inquirer from "inquirer";

async function Playgame(): Promise<number> {
  let noOfPlays = 0;
  let totalPlays = 0;
  let correctGuesses = 0;

  do {
    const system_generate_number = Math.floor(Math.random() * 10);
    const answer = await inquirer.prompt({
      type: "number",
      name: "numberGuessing",
      message: "Enter your number between 1 to 10: ",
    });
    const { numberGuessing } = answer;
    totalPlays++;

    if (numberGuessing === system_generate_number) {
      console.log("Your guess is correct");
      correctGuesses++;
      break;
    } else {
      console.log("Sorry, you guessed the wrong number. Try again.");
    }
  } while (++noOfPlays < totalPlays);

  return correctGuesses;
}

async function main() {
  const answer1 = await inquirer.prompt({
    type: "number",
    name: "noOfPlays",
    message: "How many times do you want to play the game?",
  });

  let totalCorrectGuesses = 0;

  for (let i = 0; i < answer1["noOfPlays"]; i++) {
    console.log(`Game ${i + 1}:`);
    totalCorrectGuesses += await Playgame();
  }

  console.log(`Thanks for playing!`);
  console.log(`Total correct guesses in all games: ${totalCorrectGuesses}`);
}

main();
