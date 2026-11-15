export const firstHourIntro = {
  title: 'From First Stand to Hamon',
  lead:
    'Controls, the Hey Ya tutorial, stat points, EX moves, bounties, Huber travel and the Hamon unlock path in Roblox’s Stand Out.',
  body: 'Stand Out is a Roblox game in the JoJo’s Bizarre Adventure mold, built around the Part 9 JoJoLands setting. New players wash up on the shore of Oʻahu with no Stand and no stats. The first hour follows a fixed order: a short tutorial, a Stand from a Mysterious Arrow, a few levels of story, then bounties and the Hamon questline.',
  quick:
    'Finish Hey Ya’s tutorial for a Mysterious Arrow, open it from the menu with M → Inventory → USE, summon with E, spend stat points in the same M menu, then follow the story to the hospital to unlock bounties and Hamon.',
}

export const toc = [
  { id: 'hey-ya', label: 'Hey Ya tutorial: first Stand' },
  { id: 'controls', label: 'PC keybinds' },
  { id: 'ex', label: 'Skills, EX moves and the EX meter' },
  { id: 'stats', label: 'Leveling and stat points' },
  { id: 'story', label: 'Usagi, hospital and Diamatch' },
  { id: 'bounties', label: 'Bounties on the Phone' },
  { id: 'hamon', label: 'Unlock Hamon (Billy → Lisa Lisa)' },
  { id: 'travel', label: 'Huber, resets and throwables' },
  { id: 'stuck', label: 'Stuck quest: switch servers' },
]

export const heyYaSteps = [
  {
    title: 'Movement prompt',
    detail:
      'Hold L-Shift to sprint, then press Q to dash. The quest advances once you have done both.',
  },
  {
    title: 'Defeat the Agent',
    detail: 'Attack with M1 and block with F until the tracker reads “Defeat Agent 1/1.”',
  },
  {
    title: 'Claim the prize',
    detail:
      '“Quest Completed!” banner awards +50 EXP, +500 Coins and +1 Mysterious Arrow.',
  },
  {
    title: 'Use the arrow',
    detail:
      'Press M → INVENTORY, select the Mysterious Arrow, click USE (between SLOT and DROP) to awaken a random Stand.',
  },
  {
    title: 'Summon',
    detail:
      'Press E to summon. Moves 1–4 appear on the HUD — hover slots for damage, cooldown and effect tooltips.',
  },
]

export const sandArrowNote =
  'Current build note: the tutorial’s free arrow may sit in the sand. After speaking to the Stranger, the tracker can read “SOMETHING IN THE SAND – Search the sand 0/1” with a “Search the sand” prompt by the water. Search that patch before buying Stand Arrows.'

export const controls = [
  { key: 'L-Shift', action: 'Sprint' },
  { key: 'Q', action: 'Dash' },
  { key: 'M1', action: 'Attack' },
  { key: 'F', action: 'Block' },
  { key: 'E', action: 'Summon or dismiss Stand' },
  { key: '1, 2, 3, 4', action: 'Stand moves' },
  { key: 'T', action: 'Toggle EX moveset' },
  { key: 'P', action: 'Pose (charges EX)' },
  { key: 'M', action: 'Inventory, Stats, Shop, Party, Archive' },
  { key: 'H', action: 'Pick up throwable object' },
]

export const skillExamples = [
  { slot: '1', grateful: 'Withering Mist (toggle)', sea: 'Sunfish Slap' },
  { slot: '2', grateful: 'Rotten Grasp', sea: 'Jellyfish Summon' },
  { slot: '3', grateful: 'One-Armed Barrage', sea: 'Maelstrom' },
  { slot: '4', grateful: 'Senior Citizen (toggle)', sea: 'Riptide' },
]

export const exNotes = [
  'Hover any HUD skill for tooltip — damage, cooldown, and effect text.',
  'Grateful Dead example: Withering Mist ages/damages near the Stand for 1–4 damage on a 1.5s cooldown; Senior Citizen ages you to help build EX.',
  'T swaps to the EX moveset (stronger versions of the same slots). EX Withering Mist lasts ~25s farther out; Beyond the Sea EX Tsunami carries enemies on a wave.',
  'EX bar sits above health and fills in combat. Out of fight, hold P to pose at about 1% per second so hard fights start charged.',
]

export const statNotes = [
  'EXP from story quests, side quests and bounties. Each level gives 3 stat points — they do nothing until spent.',
  'Press M → STATS. Click a category and watch AVAILABLE POINTS drop.',
  'Ability powers Stand moves. Health raises survivability. Damage raises direct attack damage. RESET STATS refunds a bad spread.',
  'Early fights often favor Ability or Damage, but save Health before tougher story enemies — pure damage dies to one long combo.',
]

export const storyNotes = [
  'Active quest sits on the left. A yellow winged arrow shows the next objective with distance in studs. Glowing yellow circles mark interactables.',
  'Early story: Jodio’s Corner → pick up Usagi → hospital entrance → MRI with Meryl Mei Qi. Finishing often grants a second Mysterious Arrow plus EXP.',
  'Later: Diamatch / Diamotch watch shop — ask for luxury watches and take the private showing in the back room.',
  'If “use item” stalls, open inventory with M — some quest items must be used manually before the tracker advances.',
]

export const bountyTiers = [
  { tier: 'Tier 1', range: 'Lv 10–20' },
  { tier: 'Tier 2', range: 'Lv 20–30' },
  { tier: 'Tier 3', range: 'Lv 30–40' },
  { tier: 'Tier 4', range: 'Around Lv 50' },
]

export const bountyNotes = [
  'Phone → red “b.” BOUNTIES app. Pick a tier, choose a contract (e.g. “Trust Me on This One” or “Disposes of the Vampires”), press Begin.',
  'Higher tiers pay more but hit harder. Stay in your level band until stats catch up.',
  'Bounties also count toward Hamon progress — start them early.',
]

export const hamonNotes = [
  'Hamon sits alongside your Stand. On current boards Lisa Lisa teaches it at the training grounds by the big stone pillar; Billy in the hospital points you there.',
  'Billy (fresh save after tutorial) may only say: “Hamon? That’s Lisa Lisa’s department. She’s by the big pillar. Bring dalas, she doesn’t teach for free.” Reply “Thanks.” The older alpha checklist (5 Vampires / 3 Bounties / 5 Hubers) may not appear.',
  'Lisa Lisa’s Maps pin finds her. She asks for 10,000 dalas: “Put on this mask and follow my instructions.” Buttons: Pay 10,000 dalas / Not now.',
  'Ripple Training Mask: accessory (+3 Ability while worn). Archive text: tightens every 33 seconds and needs steady breathing until you pass basic training’s final test or learn a Hamon style.',
  'Grounds around the pillar have interactables — e.g. tightrope start shows “Hold [H] to Interact.” Full breathing / style steps need the fee paid in-game.',
]

export const travelNotes = [
  'Huber app → Call Hubert. Taxi meets you on a clear street for about 50 coins. Finish active activities before calling.',
  'Character reset is free and respawns outside the hospital — handy for MRI / Billy hops.',
  'Roadside props with a ground glow (benches, tables): hold H to pick up, throw for damage between Stand cooldowns.',
]

export const stuckNotes = [
  'Destructible maps break quests — smashed rooms or contested NPCs stop triggers. Waiting rarely fixes it.',
  'Leave and join a different server for a clean map. The waypoint should point somewhere reachable again and the tracker count should move.',
  'Confirm you did not miss a prior objective before hopping — incomplete steps look like soft-locks at first glance.',
]
