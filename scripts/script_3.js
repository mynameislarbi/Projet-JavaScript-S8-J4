/// Script 3 ///
let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for (let count = 5; count <= number; count ++) {
  let space = " ";
  let hashtag ="#";
  console.log(`${space.repeat(number - count) + hashtag.repeat(count)}`);
};