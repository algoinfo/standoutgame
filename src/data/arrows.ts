export const arrowCatalog = [
  {
    name: 'Mysterious Arrow',
    role: 'Base awaken / reroll',
    detail:
      'From tutorial, crafting, bounties, quests, Train Raid, and Train Shop. No rarity percentages published on the card.',
    shop: 'Train Shop sells Mysterious Arrows (token price varies by listing).',
  },
  {
    name: 'Lucky Arrow',
    role: 'Skip Rare',
    detail:
      'Craft 3 Mysterious Arrows, or buy at Train Shop (~17 tokens). Published rates: Epic 42.5%, Legendary 34.0%, Mythic 22.1%, Pinnacle 1.5%.',
    shop: 'Pinnacle odds roughly match “at least one Pinnacle from three regular arrows.”',
  },
  {
    name: 'Bizarre Arrow',
    role: 'Skip Rare + Epic',
    detail:
      'Craft 9 Mysterious Arrows, or Train Shop (~33 tokens). Legendary 57.9%, Mythic 37.7%, Pinnacle 4.4% — best published Pinnacle craft.',
    shop: 'Trades breadth for a narrower high-tier roll.',
  },
  {
    name: 'Mysterious Arrow [Part 5]',
    role: 'Part focus',
    detail:
      'Added Oct 27, 2026. Only Part 5 Stands at even odds; King Crimson listed at 5%. Crafting, Train Raid, Train Shop (~40 tokens).',
    shop: 'The 200-token shop item is the King Crimson Full Chip, not this arrow.',
  },
  {
    name: 'Mysterious Arrow [Part 3]',
    role: 'Part focus',
    detail:
      'Added Oct 28, 2026. Only Part 3 Stands at even odds; The World and Star Platinum each listed at 5%. Crafting source.',
    shop: 'Cheaper chase path than blind Bizarre rolls for those two Pinnacles.',
  },
  {
    name: 'Mysterious Rock',
    role: 'Part 9 awaken (not an arrow)',
    detail:
      'Crush at the Workbench to awaken a Part 9 Stand — equal chance per Part 9 kit. No Part 9 arrow exists yet.',
    shop: 'Crafted at Big Chop’s Workbench.',
  },
]

export const rateRows = [
  { rarity: 'Rare', mysterious: 'Possible', lucky: 'Excluded', bizarre: 'Excluded' },
  { rarity: 'Epic', mysterious: 'Possible', lucky: '42.5%', bizarre: 'Excluded' },
  { rarity: 'Legendary', mysterious: 'Possible', lucky: '34.0%', bizarre: '57.9%' },
  { rarity: 'Mythical', mysterious: 'Possible', lucky: '22.1%', bizarre: '37.7%' },
  { rarity: 'Pinnacle', mysterious: 'Possible', lucky: '1.5%', bizarre: '4.4%' },
]

export const storyPoolBlocks = [
  'Super Fly, Rolling Stones, Cinderella (pre-story “bad progression” cut, Oct 23).',
  'Burning Down The House, Catch The Rainbow, Strength (blocked until story clear, Oct 26).',
  "Lyin' Eyes joined the story-pool block on launch day (Nov 14).",
  'Settings can re-enable some story-blocked Stands (“allow story stands”) with a hard-PvE warning.',
]

export const poolRemoved = [
  { name: 'Cat Size', tier: 'Rare', note: 'Removed Oct 29 — rework pending' },
  { name: 'Tower Of Gray', tier: 'Rare', note: 'Removed Oct 29 — rework pending' },
  { name: 'West End Girl', tier: 'Epic', note: 'Removed Oct 29 — rework pending' },
  { name: 'John Rod', tier: 'Mythical', note: 'Removed Oct 29 — rework pending' },
]

export const storageNotes = [
  'D’Arby at the Docks turns a Stand into a Chip. Using a Chip while another Stand is equipped overwrites the equipped Stand.',
  'Post-launch: two extra D’Arby seats; storage still reachable when seats are full; cheating reduced 75%.',
  'Max three storage slots — unlock via 30 Stands owned, story clear, or 100,000 Coins/Dalas. First slot unlocks via the Go Fish story minigame (since Oct 21).',
  'Emerald Roka removes a Stand once you already have Hamon or Vampire — empties the slot for full sub-ability access.',
  'Arrow Parts: Meteor, Metal Detector, Train Shop; Money Transport event drops six parts.',
]
