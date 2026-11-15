export type Rarity =
  | 'Pinnacle'
  | 'Mythical'
  | 'Legendary'
  | 'Epic'
  | 'Rare'
  | 'Evolution'
  | 'Quest'

export type StandEntry = {
  name: string
  part: string
  rarity: Rarity
  base?: number | null
  ex?: number | null
  arrows?: string
}

export const stands: StandEntry[] = [
  { name: 'King Crimson', part: 'Part 5', rarity: 'Pinnacle', base: 9, ex: 4, arrows: 'M / L / B' },
  { name: 'Star Platinum', part: 'Part 3', rarity: 'Pinnacle', base: 5, ex: 4, arrows: 'M / L / B' },
  { name: 'The World', part: 'Part 3', rarity: 'Pinnacle', base: 4, ex: 4, arrows: 'M / L / B' },
  { name: 'Big Mouth Strikes Again', part: 'Part 9', rarity: 'Mythical', base: 6, ex: 4, arrows: 'M / L / B' },
  { name: "Heaven's Door", part: 'Part 4', rarity: 'Mythical', base: 5, ex: 3, arrows: 'M / L / B' },
  { name: 'Highway Star', part: 'Part 4', rarity: 'Mythical', base: 6, ex: 3, arrows: 'M / L / B' },
  { name: 'Mandom', part: 'Part 7', rarity: 'Mythical', base: 4, ex: 1, arrows: 'M / L / B' },
  { name: 'November Rain', part: 'Part 9', rarity: 'Mythical', base: 9, ex: 3, arrows: 'M / L / B' },
  { name: 'Beyond the Sea', part: 'Custom', rarity: 'Legendary', base: 6, ex: 3, arrows: 'M / L / B' },
  { name: 'Burning Down The House', part: 'Part 6', rarity: 'Legendary', base: 6, ex: 3, arrows: 'M / L / B' },
  { name: 'Catch The Rainbow', part: 'Part 7', rarity: 'Legendary', base: 6, ex: null, arrows: 'M / L / B' },
  { name: 'Death 13', part: 'Part 3', rarity: 'Legendary', base: 9, ex: 4, arrows: 'M / L / B' },
  { name: 'Emperor', part: 'Part 3', rarity: 'Legendary', base: 4, ex: 1, arrows: 'M / L / B' },
  { name: 'Kiss (Kizz)', part: 'Part 6', rarity: 'Legendary', base: 5, ex: 3, arrows: 'M / L / B' },
  { name: "Magician's Red", part: 'Part 3', rarity: 'Legendary', base: 5, ex: 3, arrows: 'M / L / B' },
  { name: 'Silver Chariot', part: 'Part 3', rarity: 'Legendary', base: 4, ex: 2, arrows: 'M / L / B' },
  { name: 'Strength', part: 'Part 3', rarity: 'Legendary', base: 5, ex: null, arrows: 'M / L / B' },
  { name: 'Glory Days', part: 'Part 9', rarity: 'Epic', base: 5, ex: null, arrows: 'M / L' },
  { name: 'Harvest', part: 'Part 4', rarity: 'Epic', base: 4, ex: 3, arrows: 'M / L' },
  { name: 'Kraft Work', part: 'Part 5', rarity: 'Epic', base: 7, ex: 4, arrows: 'M / L' },
  { name: 'Notorious B.I.G', part: 'Part 5', rarity: 'Epic', base: 9, ex: 1, arrows: 'M / L' },
  { name: 'Rolling Stones', part: 'Part 5', rarity: 'Epic', base: 12, ex: 4, arrows: 'M / L' },
  { name: 'Smoke On The Water', part: 'Part 6', rarity: 'Epic', base: 6, ex: 4, arrows: 'M / L' },
  { name: 'Super Fly', part: 'Part 4', rarity: 'Epic', base: 5, ex: 1, arrows: 'M / L' },
  { name: 'The Grateful Dead', part: 'Part 5', rarity: 'Epic', base: 5, ex: 2, arrows: 'M / L' },
  { name: 'The Hustle', part: 'Part 9', rarity: 'Epic', base: 7, ex: 4, arrows: 'M / L' },
  { name: 'Tubular Bells', part: 'Part 7', rarity: 'Epic', base: 7, ex: 4, arrows: 'M / L' },
  { name: 'Under World', part: 'Part 6', rarity: 'Epic', base: 5, ex: 2, arrows: 'M / L' },
  { name: 'Walking Heart', part: 'Part 8', rarity: 'Epic', base: 4, ex: 2, arrows: 'M / L' },
  { name: '200 Balloons', part: 'Part 9', rarity: 'Rare', base: 5, ex: 1, arrows: 'M' },
  { name: 'Beach Boy', part: 'Part 5', rarity: 'Rare', base: 12, ex: 4, arrows: 'M' },
  { name: 'Cinderella', part: 'Part 4', rarity: 'Rare', base: 6, ex: 4, arrows: 'M' },
  { name: 'Hey Ya!', part: 'Part 7', rarity: 'Rare', base: 7, ex: null, arrows: 'M' },
  { name: "Lyin' Eyes", part: 'Part 9', rarity: 'Rare', base: 7, ex: 1, arrows: 'M' },
  { name: 'Mr. President', part: 'Part 5', rarity: 'Rare', base: 6, ex: 1, arrows: 'M' },
  { name: 'Smooth Operators', part: 'Part 9', rarity: 'Rare', base: 6, ex: 4, arrows: 'M' },
  { name: 'The MATTEKUDASAI', part: 'Part 9', rarity: 'Rare', base: 7, ex: 2, arrows: 'M' },
  { name: 'The Sun', part: 'Part 3', rarity: 'Rare', base: 5, ex: 2, arrows: 'M' },
  { name: 'Yellow Temperance', part: 'Part 3', rarity: 'Rare', base: 7, ex: 4, arrows: 'M' },
  { name: 'Yo-Yo Ma', part: 'Part 6', rarity: 'Rare', base: 8, ex: 4, arrows: 'M' },
  { name: 'Hermit Purple', part: 'Evolution', rarity: 'Evolution', arrows: 'Billy quest' },
  { name: 'Star Platinum: The World', part: 'Evolution', rarity: 'Evolution', arrows: 'Opal Roka' },
  { name: 'The World: Alternative Universe', part: 'Evolution', rarity: 'Evolution', arrows: 'Opal Roka' },
  { name: 'Jojosapiens', part: 'Quest', rarity: 'Quest', arrows: 'Space Oddity / Catalog' },
]

export const rarityOrder: Rarity[] = [
  'Pinnacle',
  'Mythical',
  'Legendary',
  'Epic',
  'Rare',
  'Evolution',
  'Quest',
]

export const rarityBlurb: Record<Rarity, string> = {
  Pinnacle: 'Hardest craftable tier. Three kits: King Crimson, Star Platinum, The World.',
  Mythical: 'High-end rolls. Lucky + Bizarre can land here. Includes Mandom / Highway Star / etc.',
  Legendary: 'Mid-high band reachable by Mysterious, Lucky, and Bizarre.',
  Epic: 'Out of Bizarre crafts. Still in Mysterious + Lucky pools.',
  Rare: 'Mysterious-only. Fine tutors; story pool may block some early.',
  Evolution: 'Opal Roka / quest transforms — never a blind arrow result.',
  Quest: 'Jojosapiens via Space Oddity (45 Stands) or 7,500 Catalog sales.',
}

export const rarityCounts = [
  { rarity: 'Pinnacle', count: 3 },
  { rarity: 'Mythical', count: 5 },
  { rarity: 'Legendary', count: 9 },
  { rarity: 'Epic', count: 12 },
  { rarity: 'Rare', count: 11 },
  { rarity: 'Evolution', count: 3 },
  { rarity: 'Quest', count: 1 },
]

export const outsidePool = [
  { name: 'Cat Size', tier: 'Rare', status: 'Removed from arrow pool Oct 29' },
  { name: 'Tower Of Gray', tier: 'Rare', status: 'Removed from arrow pool Oct 29' },
  { name: 'West End Girl', tier: 'Epic', status: 'Removed from arrow pool Oct 29' },
  { name: 'John Rod', tier: 'Mythical', status: 'Removed from arrow pool Oct 29' },
  { name: 'Hermit Purple', tier: 'Evolution', status: 'Billy quest — Standless + Jonathan Hamon' },
  { name: 'Star Platinum: The World', tier: 'Evolution', status: 'Opal Roka evolution' },
  { name: 'The World: Alternative Universe', tier: 'Evolution', status: 'Opal Roka evolution' },
  { name: 'Jojosapiens', tier: 'Quest', status: 'Space Oddity or Catalog sales' },
]

export const faq = [
  {
    q: 'Is there a best Stand?',
    a: 'Official FAQ: no definite best Stand. Community lists usually put time kits high, then disagree.',
  },
  {
    q: 'Does rarer mean stronger?',
    a: 'No published damage ladder. Rarity only gates which arrow can return the kit. Some Rares list more moves than Pinnacles.',
  },
  {
    q: 'What should I roll first?',
    a: 'While pushing story, the modified pool blocks several kits. Prefer learning a landable kit over burning arrows for Pinnacle.',
  },
]
