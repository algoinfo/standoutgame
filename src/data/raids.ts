export type RaidEntry = {
  name: string
  how: string
  tips: string[]
  shopNote: string
}

export const raids: RaidEntry[] = [
  {
    name: 'Train Raid',
    how: "Donatello near the Museum of O'ahu. Cars shuffle; Prosciutto is the fixed fight. Added Oct 17; start moved to Donatello Oct 25.",
    tips: [
      'Aging: ice packs and civilian cover beat greedy DPS.',
      "Pesci fishing line: dismiss Stand, crouch behind couches, find the conductor's key (hide objective added Oct 21).",
      'Coco Jumbo HP doubled Oct 20; destroyed props no longer regenerate.',
      'Hard ~1% King Crimson Chip; shop sells the Chip for 200 Train tokens.',
    ],
    shopNote:
      'Arrows, Arrow Parts, Steel Ingots, Stone Mask (~40 tokens), Lucky/Bizarre listings, King Crimson Full Chip (200).',
  },
  {
    name: 'Highway Star Raid',
    how: 'Same Donatello board (added Nov 2). Soften to half HP → driving section while Hey Ya! searches → finish.',
    tips: [
      'Traffic is its own fail condition.',
      'Nurses spawn in this raid (Nov 8 systems).',
      'Hard ~1% Highway Star Chip; shop Chip costs 200 tokens.',
    ],
    shopNote: 'Dedicated Highway Star shop for arrows, mats, and the Chip.',
  },
  {
    name: '77 Rings',
    how: 'Bizarre Adventure added Nov 13 — “brutal knights’ training grounds.” Shop card has no published prices yet.',
    tips: [
      'Stage 1 — Survive the dead in the graveyard (~3 undead waves).',
      'Stage 2 — Broken bridge parkour (spikes, hypothermia), fist Trainee Knights, then harder climb to the first door.',
      'Stage 3 — Training hall guards + spike/falling floors, defeat Tarkus (vampiric physical boss), escape the labyrinth.',
      'Stage 4 — Frozen mountain parkour; cold drains you — use campfires; described in-game as hard.',
    ],
    shopNote: '77 Rings Shop exists but carries no public text — prices unpublished.',
  },
]

export type BossEntry = {
  name: string
  window: string
  drops: string
  note: string
}

export const worldBosses: BossEntry[] = [
  {
    name: 'Jotaro',
    window: 'Daytime world event · ~800 HP',
    drops: 'Possible Star Platinum Chip, Mysterious Arrow, Jotaro outfit',
    note: 'Rewards scale with damage. Evasive CD doubled Nov 15. Time Stop can be overridden.',
  },
  {
    name: 'DIO',
    window: 'Nighttime world event · ~1,000 HP',
    drops: 'Possible The World Chip, Stone Mask, Mysterious Arrow, DIO outfit',
    note: 'Spawn rate was buffed in a Nov 15 fix. Prefer raid-shop Stone Mask (~40) if you only want Vampire.',
  },
]

export type SideBoss = {
  name: string
  route: string
  payout: string
}

export const sideBosses: SideBoss[] = [
  {
    name: 'Yo-Yo Ma',
    route: 'Lettuce Trader sunny quest — grab the golden key after the fight.',
    payout: 'Arrows, coins, Rokakaka seed; rare Yo-Yo Ma / Harvest Chip.',
  },
  {
    name: 'Leprechaun',
    route: 'Blackmore rain quest — cauldron + rainbow before rain ends.',
    payout: 'Mysterious Arrow + Blackmore jacket/pants.',
  },
  {
    name: 'CEO of Fighting / Rolling Stones',
    route: 'Old Lady fog quest → Angelo → crouch-follow cracks.',
    payout: 'Coins + Mysterious / Bizarre / Part 5 arrows; Hand vs Slave of Fate accessories.',
  },
  {
    name: 'Tarkus',
    route: '77 Rings stage 3 boss room.',
    payout: 'Raid clear loot — shop prices unpublished.',
  },
]

export const ringsWarning =
  'Only four stages are documented on the public board. Total stage count and shop prices are not published — treat anything beyond stage 4 as unverified.'
