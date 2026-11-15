export type CodeEntry = {
  code: string
  reward: string
  note?: string
  status: 'active' | 'expired'
  since?: string
}

export const codes: CodeEntry[] = [
  {
    code: 'RELEASE',
    reward: '3 Mysterious Arrows',
    note: 'Announced Nov 13 — “USE CODE RELEASE FOR 3 ARROWS ON RELEASE!” Board-listed active.',
    status: 'active',
    since: '2026-11-13',
  },
  {
    code: 'THANKYOUHUGERELEASETHANKS',
    reward: '2 Mysterious Arrows + 1 Lucky Arrow',
    note: 'Posted ~20:06 UTC Nov 14. New servers only. Flagged to expire the next day — redeem ASAP.',
    status: 'active',
    since: '2026-11-14',
  },
  {
    code: 'HUGE100K',
    reward: '1 Bizarre Arrow',
    note: 'Posted ~20:28 UTC Nov 14 for the 100K player mark. New servers only.',
    status: 'active',
    since: '2026-11-14',
  },
  {
    code: '50KLIKES',
    reward: 'Lucky Arrows + Coins',
    note: 'Dev post Nov 15 04:34 UTC. New servers only. Exact arrow count not named in the announcement text.',
    status: 'active',
    since: '2026-11-15',
  },
  {
    code: 'PLAYTEST',
    reward: '10 Mysterious Arrows',
    note: 'Scoped to Oct 17–18 playtest weekend. Expired.',
    status: 'expired',
    since: '2026-10-13',
  },
]

export const redeemSteps = [
  'Finish the tutorial and obtain the Phone from Meryl Mei Qi at Iko Iko (storyline).',
  'Press Z → open the green Gifts (Codes) app on the Phone.',
  'Paste the string → Redeem → Claim.',
]

export const codeContext = [
  'There is no paid Robux unlock for Stand Out. Fake “pay to access” experiences are scams (dev warning Oct 12). Six real gamepasses are optional cosmetics/QoL only.',
  'Release-night and milestone codes often exist only on servers spun after the announcement — hop if redeem fails.',
  'Roblox description previously teased the next code at like milestones; 50KLIKES already shipped. Watch Discord / change-logs for the next string.',
]
