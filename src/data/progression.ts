export type Phase = {
  title: string
  goal: string
  tip: string
}

export const sessionPhases: Phase[] = [
  {
    title: 'Beach wake-up',
    goal: 'Clear the Hey Ya! intro, back up Jodio, and spend the free Mysterious Arrow.',
    tip: 'Don’t save the tutorial arrow — you need a Stand on you for the next fights.',
  },
  {
    title: 'Meet the crew',
    goal: 'Find Meryl in Iko Iko and push the diamond-heist storyline.',
    tip: 'Treat the first roll as a training kit. Learn 2–3 reliable buttons before rerolling.',
  },
  {
    title: 'Fill the Phone apps',
    goal: 'When story fights stall, run Bounties or Eliminations for EXP and arrow chances.',
    tip: 'Hourly bounty refresh. Prefer NPC eliminations if you want loot without player duels.',
  },
  {
    title: 'Lock a keeper',
    goal: 'If a Stand feels right, bank it with D’Arby at the Docks as a Chip.',
    tip: 'Equipping a Chip while another Stand is already out overwrites the equipped one.',
  },
  {
    title: 'Touch a raid',
    goal: 'Ask Donatello by the Museum of O’ahu for a Regular Bizarre Adventure.',
    tip: 'One clean Regular clear teaches objectives better than jumping straight to Hard.',
  },
  {
    title: 'Pick a north star',
    goal: 'After the first clear, choose one: a named Stand, raid Chip savings, or Hamon / Vampire.',
    tip: 'Spreading resources across every system at once slows you down early.',
  },
]

export const controlTips = [
  { key: 'L-Shift', action: 'Sprint' },
  { key: 'Q', action: 'Dash / reposition' },
  { key: 'M1', action: 'Basic attack' },
  { key: 'F', action: 'Guard' },
  { key: 'E', action: 'Summon / dismiss Stand' },
  { key: '1–4', action: 'Stand skills' },
  { key: 'T', action: 'EX kit (Awakening bars)' },
  { key: 'P', action: 'Pose — helps charge EX' },
  { key: 'N', action: 'Inventory' },
  { key: 'M', action: 'Menus / Stats' },
  { key: 'H', action: 'Interact / pick up throwables' },
  { key: 'C', action: 'Crouch (villa cameras, raid hide spots)' },
  { key: 'Z', action: 'Open Phone' },
]

export const arrowTypes = [
  {
    name: 'Mysterious Arrow',
    cost: 'Default',
    detail:
      'Rolls the full rarity ladder. Comes from story, crafts, bounties, shore digging, and raid shops.',
  },
  {
    name: 'Lucky Arrow',
    cost: '3× Mysterious',
    detail: 'Skips Rare. Use when you are tired of low-tier results.',
  },
  {
    name: 'Bizarre Arrow',
    cost: '9× Mysterious',
    detail: 'Skips Rare and Epic. Best published shot at Pinnacle among craftable arrows.',
  },
  {
    name: 'Part 3 / Part 5 focus',
    cost: 'Targeted',
    detail:
      'Narrows the pool to one Part. Often cheaper than blind Bizarre crafts when chasing Star Platinum, The World, or King Crimson.',
  },
]

export const earlyMistakes = [
  'Burning every arrow before you finish the villa arc and learn combat cadence.',
  'Skipping D’Arby, then losing a Stand you liked when a Chip overwrites it.',
  'Dumping all stat points into Damage while you keep dying before cooldowns return.',
  'Joining Hard raids before you can read Regular objective text under pressure.',
  'Hunting Blackmore or the Lettuce Trader on the wrong weather.',
]

export const villaBeats = [
  {
    title: 'Briefing',
    detail:
      'Meryl at Iko Iko outfits you with the Phone. Call Huber for a ride when the tracker says so.',
  },
  {
    title: 'Inside the villa',
    detail:
      'Crouch past cameras. Check odd books, shelves, paintings, panels, and levers for the vault path.',
  },
  {
    title: 'Vault',
    detail:
      'At the grey metal door, hold H when the interact prompt appears. Expect EXP, Dalas, and an Arrow on success.',
  },
  {
    title: 'Escape',
    detail:
      'Leave without getting tagged. Tracker then swings into Wild Cat Size — three Cat Size fights, not one.',
  },
]

export const farmLoops = [
  {
    title: 'Story + Phone apps',
    detail:
      'Main quests still pay the best early mix of EXP, coins, and arrows while teaching the map.',
  },
  {
    title: 'Eliminations',
    detail:
      'Solid EXP slice with a chance at Mysterious Arrows. NPC targets keep it PvE-friendly.',
  },
  {
    title: 'Beach digs',
    detail:
      'Buy a Metal Detector from Big Chop, sweep the sand, kneel where it marks. Ocean crates also break for arrow parts.',
  },
  {
    title: 'Raid tokens',
    detail:
      'Shop arrows are fine; if you want King Crimson or Highway Star, bank tokens toward the 200 Chip instead.',
  },
]

export const heyYaTutorial = [
  {
    title: 'Movement check',
    detail:
      'Hold L-Shift to sprint, then Q to dash. The tracker advances once both land.',
  },
  {
    title: 'Defeat the Agent',
    detail: 'M1 to attack, F to block until the counter reads Defeat Agent 1/1.',
  },
  {
    title: 'Claim the tutorial loot',
    detail:
      'Banner pays roughly +50 EXP, +500 Coins, and +1 Mysterious Arrow (values from the alpha write-up).',
  },
  {
    title: 'Use the arrow from inventory',
    detail:
      'Press N → select Mysterious Arrow → USE (between SLOT and DROP). That is what awakens the Stand — do not leave it sitting unused.',
  },
  {
    title: 'Summon and learn the HUD',
    detail:
      'E brings the Stand out. Skills 1–4 appear on the HUD; hover slots for damage, cooldown, and effect tooltips.',
  },
]

export const exSystem = [
  {
    title: 'Regular skills',
    detail:
      'Hover any HUD slot for the tooltip. Kits differ wildly — Grateful Dead leans on toggles like Withering Mist; Beyond the Sea opens with hits like Sunfish Slap.',
  },
  {
    title: 'EX moveset (T)',
    detail:
      'T swaps the HUD to EX versions of the same slots. Stronger effects, higher cost — always check the EX tooltip before dumping bars.',
  },
  {
    title: 'EX meter + Pose',
    detail:
      'Bar sits above health and fills in combat. Out of fight, hold P to pose and charge about 1% per second so hard pulls start with EX ready.',
  },
]

export const earlyStoryBeats = [
  {
    title: 'Usagi → Hospital MRI',
    detail:
      'Pick up Usagi at Jodio’s Corner, carry him to the hospital, run the MRI with Meryl. Finishing this chain often pays a second Mysterious Arrow and unlocks systems Billy/story gates check.',
  },
  {
    title: 'Diamotch / Diamatch watches',
    detail:
      'Later story sends you into the jewelry/watch shop — ask for luxury watches and take the private showing in the back room.',
  },
  {
    title: 'Quest UI habits',
    detail:
      'Left-side tracker + yellow winged waypoint (distance in studs). Glowing yellow circles mark interactables. If “use item” stalls, open N — some quest items must be used manually.',
  },
]

export const bountyTiers = [
  { tier: 'Tier 1', range: 'Lv 10–20' },
  { tier: 'Tier 2', range: 'Lv 20–30' },
  { tier: 'Tier 3', range: 'Lv 30–40' },
  { tier: 'Tier 4', range: 'Around Lv 50' },
]

export const phoneTravelTips = [
  {
    title: 'Bounties app',
    detail:
      'Phone → red “b.” BOUNTIES. Pick a tier matching your level, choose a contract, hit Begin. Higher tiers hit harder and pay more.',
  },
  {
    title: 'Huber taxi',
    detail:
      'Phone → Huber → Call Hubert. Meets you on a clear street for about 50 coins. Finish active activities before calling.',
  },
  {
    title: 'Hospital reset',
    detail:
      'Character reset is free and drops you outside the hospital — useful for MRI / Billy hops without another taxi.',
  },
  {
    title: 'Throwables',
    detail:
      'Roadside props with a ground glow (benches, tables): hold H to pick up, throw for damage between Stand cooldowns.',
  },
]

export const stuckQuestFix = [
  'Destructible maps and shared NPCs soft-lock objectives — smashed rooms or contested enemies stop triggers.',
  'Leave and join a different server for a clean map state; wait rarely fixes it.',
  'Confirm you did not miss a prior step before hopping — incomplete trackers look identical to broken ones until the waypoint moves again.',
]

export const billyAlphaHamon = {
  note: 'Older alpha builds used Billy task checklists. Live boards also use Lisa Lisa’s volcano training (see Builds). Use Billy early only if the board still offers this chain.',
  gate: 'Billy (hospital bed, rooms E/F left after entrance) refuses you until story is past Meryl’s MRI — “I’ll come back later” means keep pushing crew quests.',
  tasks: ['Kill 5 Vampires', 'Complete 3 Bounties', 'Defeat 5 Hubers'],
}
