export type NpcEntry = {
  name: string
  where: string
  role: string
  weather?: string
}

export const priorityNpcs: NpcEntry[] = [
  {
    name: 'Meryl Mei Qi',
    where: 'Inside Iko Iko',
    role: 'Hands you the Phone and opens the Rohan villa storyline, plus the Crash Course driving side job.',
  },
  {
    name: "D'Arby",
    where: 'Docks',
    role: 'Stand Storage — convert a Stand into a Chip before you reroll or swap.',
  },
  {
    name: 'Donatello',
    where: "Park by the Museum of O'ahu",
    role: 'Starts Bizarre Adventures (Train Raid, Highway Star Raid, and later entries).',
  },
  {
    name: 'Petyr',
    where: 'Inside the Police Station',
    role: 'Repeatable Bounties on the Phone map pin “Bounties.”',
  },
  {
    name: 'Lisa Lisa',
    where: 'Volcano summit',
    role: 'Hamon Training (10,000 Coins entry). Branches into Jonathan / Caesar / Zeppeli paths.',
  },
  {
    name: 'Billy',
    where: 'Hospital',
    role: 'Hermit Purple quest — needs Jonathan Hamon and an empty Stand slot.',
  },
]

export const moreNpcs: NpcEntry[] = [
  {
    name: 'Jodio Joestar',
    where: 'McKinley Highschool (tutorial by the road)',
    role: 'Story anchor — points you to Meryl and reappears through the crew jobs.',
  },
  {
    name: 'Usagi',
    where: 'McKinley Highschool',
    role: 'Bandit Problem — clear five bandits.',
  },
  {
    name: 'Angelo',
    where: 'Behind the Police Station, roadside',
    role: 'Big Business (Bizarre Arrow route) and appears in Statue of Sorrow.',
  },
  {
    name: 'Big Chop',
    where: "Big Chop's Garden",
    role: 'Seeds, crafting gear, Metal Detector, and the daily garden board.',
  },
  {
    name: 'Dockhand',
    where: 'Docks',
    role: 'Raft rental for 100 Coins.',
  },
  {
    name: 'Blackmore',
    where: 'Behind McKinley Highschool',
    role: 'Catch The Rainbow quest — grab the rainbow before the weather clears.',
    weather: 'Rain only',
  },
  {
    name: 'Old Lady',
    where: 'Behind Iko Iko',
    role: 'Statue of Sorrow / Rolling Stones chain with Arrow and accessory payouts.',
    weather: 'Fog',
  },
  {
    name: 'Lettuce Trader',
    where: 'Roams while the sun is out',
    role: 'Yo-Yo, What the Hell, Ma?! — name and pin shift per spawn.',
    weather: 'Sunny',
  },
  {
    name: 'Congressman White',
    where: 'Hospital',
    role: 'Tablet step for the HOWLER land filing chapter.',
  },
  {
    name: 'Diamotch Clerk',
    where: 'Inside Diamotch',
    role: 'Private watch showing during the main story.',
  },
  {
    name: 'Land Registry Clerk',
    where: 'Hawaii State Land and Registry Office',
    role: 'HOWLER deed paperwork for the crew.',
  },
]

export const mapTips = [
  'Open Maps on the Phone first — pins list a short job line under each name (e.g. Petyr = Bounties).',
  '“Inside / behind / near” matters. Museum and Police Station NPCs are often not through the front door.',
  'Weather-locked people (Blackmore, Old Lady, Lettuce Trader) waste your time on the wrong sky.',
]
