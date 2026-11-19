import { CONTENT_MONTH_YEAR, LAST_CHECKED_ISO, LAST_CHECKED_LABEL } from './siteMeta'

export type CodeEntry = {
  code: string
  reward: string
  note?: string
  status: 'active' | 'expired'
  since?: string
  /** Soft estimate — never treat as a hard server-side expiry timestamp. */
  expiryEstimate?: string
  howToJudgeDead?: string
}

export const codesLastCheckedLabel = LAST_CHECKED_LABEL
export const codesLastCheckedIso = LAST_CHECKED_ISO
export const codesMonthYear = CONTENT_MONTH_YEAR

/**
 * Status checked {LAST_CHECKED_LABEL}.
 * Primary status board: official Trello Active/Expired lists (via Wiky snapshot).
 * Reward text cross-checked against Dexerto / GamesRadar / Game Rant where they disagree on amounts.
 * Do not invent exact Dalas/arrow counts when sources conflict — quote the range.
 */
export const codes: CodeEntry[] = [
  {
    code: '100KLIKESHUGE',
    reward:
      '3 Mysterious Arrows + 1 Lucky Arrow + Arrow Parts + Dalas (Dexerto: 3 Parts + 333 Dalas; Game Rant also lists a short 2× Dalas window)',
    note: 'Newest milestone string after the 100K-likes push. Listed active on the official Trello Active Codes board as of this check.',
    status: 'active',
    since: '2026-11-16',
    expiryEstimate: 'Usually lasts days to a week unless the board moves it — milestone codes can die overnight.',
    howToJudgeDead: 'If Redeem errors on a fresh public server and the Trello Active list no longer shows it, treat it as expired.',
  },
  {
    code: 'STANDOUTAGAIN',
    reward: '1 Lucky Arrow',
    note: 'Official Trello Active Codes entry (via Wiky). Some secondary guides omit it — still worth trying on a new server.',
    status: 'active',
    since: '2026-11-17',
    expiryEstimate: 'Unknown hard date; short promo strings often last under a week.',
    howToJudgeDead: 'Fails on a brand-new server and missing from Trello Active → expired.',
  },
  {
    code: 'SORRY4SHUTDOWN',
    reward: '2 Mysterious Arrows + 500 Dalas',
    note: 'Dexerto / GamesRadar still listed this as active around Nov 17–18. Official Trello (via Wiky) already moved it to Expired — try once, then drop it if Redeem fails.',
    status: 'expired',
    since: '2026-11-16',
    expiryEstimate: 'Likely dead after the shutdown apology window; Trello Expired as of this check.',
    howToJudgeDead: 'Trello Expired listing + redeem failure on a fresh server.',
  },
  {
    code: '50KLIKES',
    reward: 'Lucky Arrows + Dalas (Game Rant / Dexerto: 3 Lucky Arrows + 2,500 Dalas; original Discord post did not name the exact amounts)',
    note: 'Dev post Nov 15 04:34 UTC. New servers only when it worked. Now on Trello Expired.',
    status: 'expired',
    since: '2026-11-15',
    expiryEstimate: 'Like-milestone codes often die within a few days of the next milestone drop.',
    howToJudgeDead: 'Trello Expired; secondary guides that still list it are stale.',
  },
  {
    code: 'HUGE100K',
    reward: '1 Bizarre Arrow',
    note: 'Posted ~20:28 UTC Nov 14 for the 100K player mark. New servers only. Trello Expired as of this check.',
    status: 'expired',
    since: '2026-11-14',
    expiryEstimate: 'Launch-night spike codes often last 24–72 hours.',
    howToJudgeDead: 'Trello Expired + redeem failure after a server hop.',
  },
  {
    code: 'THANKYOUHUGERELEASETHANKS',
    reward: '2 Mysterious Arrows + 1 Lucky Arrow',
    note: 'Posted ~20:06 UTC Nov 14 with “expires tomorrow.” New servers only. Expired.',
    status: 'expired',
    since: '2026-11-14',
    expiryEstimate: 'Dev-flagged ~24h window from the Nov 14 post.',
    howToJudgeDead: 'Past the announced window and Trello Expired.',
  },
  {
    code: 'RELEASE',
    reward: '3 Mysterious Arrows',
    note: 'Announced Nov 13 — “USE CODE RELEASE FOR 3 ARROWS ON RELEASE!” Board-listed Expired as of this check (some Nov 18 guides still showed it).',
    status: 'expired',
    since: '2026-11-13',
    expiryEstimate: 'Launch code — often survives the first week, then rotates off.',
    howToJudgeDead: 'Trello Expired listing is the clean signal.',
  },
  {
    code: 'PLAYTEST',
    reward: '10 Mysterious Arrows',
    note: 'Scoped to Oct 17–18 playtest weekend. Expired.',
    status: 'expired',
    since: '2026-10-13',
    expiryEstimate: 'Hard-scoped to the playtest weekend.',
    howToJudgeDead: 'Never worked on the live Nov 14 build.',
  },
]

export const redeemSteps = [
  'Join the Studio Umbra: Europa Roblox community group (required before Gifts accepts codes).',
  'Finish the tutorial and obtain the Phone from Meryl Mei Qi at Iko Iko (storyline).',
  'Press Z → open the green Gifts (Codes) app on the Phone.',
  'Paste the string → Redeem → Claim. Launch and milestone codes often need a fresh server.',
]

export const codeContext = [
  'There is no paid Robux unlock for Stand Out. Fake “pay to access” experiences are scams (dev warning Oct 12). Six real gamepasses are optional cosmetics/QoL only.',
  'Release-night and milestone codes often exist only on servers spun after the announcement — hop if redeem fails.',
  'Roblox description previously teased the next code at like milestones; 50KLIKES already shipped and later expired. Watch Discord / Trello / change-logs for the next string.',
]

export const codeSources = [
  {
    name: 'Official Discord',
    detail:
      'Studio Umbra announcements for new strings, “expires tomorrow” warnings, and shutdown apology codes. Fastest signal, no permanent archive.',
  },
  {
    name: 'Official Trello',
    detail:
      'Active Codes / Expired Codes columns are the cleanest public status board. When a secondary guide disagrees with Trello, trust Trello and re-test once on a new server.',
  },
  {
    name: 'Developer X / Roblox group posts',
    detail:
      'Like-milestone and player-count codes usually land here the same hour they hit Discord. Good for exact wording when reward amounts are vague.',
  },
]

export const redeemFailReasons = [
  {
    title: 'Old server',
    body: 'Milestone and apology codes often only exist on servers started after the announcement. Leave, join a newer public server from the Roblox Servers tab, then redeem again.',
  },
  {
    title: 'No Phone yet',
    body: 'Gifts stays locked until Meryl hands you the Phone during the Iko Iko story beat. Finish the opening tutorial first.',
  },
  {
    title: 'Missing community group',
    body: 'Join Studio Umbra: Europa on Roblox before opening Gifts. Several live guides call this out as a hard gate.',
  },
  {
    title: 'Expired string',
    body: 'PLAYTEST never worked on live. THANKYOUHUGERELEASETHANKS was flagged ~24h. If Trello lists Expired, stop retrying.',
  },
  {
    title: 'Typo / already claimed',
    body: 'Copy-paste the exact string. Each code is once per account. Caps are usually fine, but spacing is not.',
  },
]

export const codeFaqs = [
  {
    q: 'What are the working Stand Out codes right now?',
    a: `As of ${LAST_CHECKED_LABEL}, the official Trello Active list still shows 100KLIKESHUGE and STANDOUTAGAIN. Older launch strings (RELEASE, HUGE100K, 50KLIKES, THANKYOUHUGERELEASETHANKS, SORRY4SHUTDOWN) are on Trello Expired — try them only if you are double-checking a stale guide.`,
  },
  {
    q: 'How do you redeem Stand Out codes?',
    a: 'Join Studio Umbra: Europa, finish the tutorial for the Phone, press Z → green Gifts app, paste the code, Redeem, then Claim.',
  },
  {
    q: 'Why do Stand Out codes say “invalid” on an old server?',
    a: 'Many launch and milestone codes only exist on servers spun after the post. Hop to a newer public server and redeem again before assuming the code is dead.',
  },
  {
    q: 'Where do new Stand Out codes get posted?',
    a: 'Watch the official Discord first, then confirm status on the Trello Active Codes column. Developer X / Roblox group posts usually mirror the same string within the hour.',
  },
  {
    q: 'Do Stand Out codes expire?',
    a: 'Yes. Some are hard-dated (“expires tomorrow”), others rotate off when the next milestone drops. Use Trello Expired plus a failed redeem on a fresh server as the death signal.',
  },
  {
    q: 'What rewards do Stand Out codes give?',
    a: 'Almost always Stand arrows (Mysterious / Lucky / Bizarre), sometimes Dalas, Arrow Parts, or short XP/Dalas multipliers. Exact Dalas counts can differ between secondary guides — this page quotes the conflict instead of inventing a single number.',
  },
]
