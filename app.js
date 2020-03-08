const CHARACTERS = [
  "Bounty Hunters",
  "Students",
  "Teachers",
  "Priests",
  "Inquisitors",
  "Politicians",
  "Thieves",
  "Hitmen",
  "Pirates",
  "Smugglers",
  "Scientists",
  "Explorers",
  "Soldiers",
  "Police",
  "Treasure Hunters",
  "Merchants",
  "Wizards",
  "Celebrities",
  "Time Travelers",
  "Commoners",
  "Nobles",
  "Family",
  "Robots",
  "Angels/Demons",
  "Spys",
  "Criminals"
]

const SETTINGS = [
  "Modern",
  "Low Fantasy (Conan)",
  "High Fantasy (LotR)",
  "Comedic Fantasy (Discworld)",
  "Grimdark",
  "Underdark",
  "Dark Sun",
  "Space Opera (Flash Gordon)",
  "Science Fantasy (Star Wars)",
  "Science Fiction (Star Trek)",
  "Eldritch Horror",
  "Post Apocalypse",
  "Cyberpunk",
  "Steampunk",
  "Dieselpunk",
  "Etherpunk",
  "Flood World",
  "Pirates",
  "Wild Western",
  "Roman Empire",
  "Medieval Europe",
  "Egyptian",
  "Wuxia",
  "Candyland",
  "Stone Age",
  "World at War (WW1/2)",
  "Spelljammer",
  "Mecha",
  "Outer Planes",
  "Elemental Planes",
  "Espionage",
  "Shadowfell",
  "Feywild",
  "Space"
]

const PLOTS = [
  "Raiders of the Lost Ark",
  "Star Wars",
  "Mad Max",
  "Terminator",
  "Alien",
  "Pirates of the Caribean",
  "Logan's Run",
  "Die Hard",
  "Godzilla",
  "Walking Dead",
  "Saving Private Ryan",
  "Ghostbusters",
  "Jurassic Park",
  "The Lost Room",
  "Tremors",
  "Nightmare on Elm Street",
  "Wizard of Oz",
  "Mission: Impossible",
  "James Bond",
  "The Matrix",
  "The Island of Doctor Moreau",
  "Airplane",
  "Close Encounters",
  "Braveheart",
  "Gladiator",
  "Groundhog Day",
  "The Big Lebowski",
  "Titanic",
  "Fight Club",
  "The Shining",
  "Dr. Strangelove",
  "Fargo",
  "Princess Bride",
  "Blade Runner",
  "Jaws",
  "Big Trouble in Little China",
  "E.T.",
  "M*A*S*H",
  "The Good, the Bad, and the Ugly"
]

let button, character, setting, plot

document.addEventListener('DOMContentLoaded', () => {

  button = document.querySelector("#generate")

  character = document.querySelector("#character")
  setting = document.querySelector("#setting")
  plot = document.querySelector("#plot")

  campaignify()

  button.addEventListener('click', () => campaignify())

})

function campaignify() {
  character.textContent = selectRandom(CHARACTERS)
  setting.textContent = selectRandom(SETTINGS)
  plot.textContent = selectRandom(PLOTS)
}

function selectRandom(items) {
  return items[Math.floor(Math.random() * items.length)]
}
