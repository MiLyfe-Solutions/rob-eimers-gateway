# MiLyfe Persistent AI Network — Domain Manifest
**Owner:** Joshua Eimers · **Executor:** Rob Eimers · **Created:** Sept 17, 2026, 3:20 AM
**Gateway:** https://milyfe-solutions.github.io/rob-eimers-gateway · **Embed:** `<script src="https://milyfe-solutions.github.io/rob-eimers-gateway/embed.js" data-brand="BRAND"></script>`

## Rollout Law
- Parked domains → **GoDaddy forwarding → gateway URL** (or A/CNAME once custom hosting exists)
- Live sites → **embed.js snippet** in their footer/header (same one-line script, per-brand label)
- Every property carries the same honest identity: one AI, one family, disclosed — never fake-independent.

## Phase 1 (now): gateway + link-out chat + embed widget. No cross-site memory, no cookies — nothing to consent to.
## Phase 2 (needs AGENT_API_KEY env var on the gateway proxy): in-page governed chat, RPP visitor profile, cross-site memory WITH plain-language disclosure + consent gate.

## Clusters
| Cluster | Count | Action |
|---|---|---|
| Persistent AI domains (persistentai.net/.co/.cloud/.dev/.pro/.work/.live/.site/.tech/.biz/.info/.space/.vip/.life/.club/.host/.shop, thepersistentai.com/.net/.info/.store/.shop, apex-persistent-ai.com, apexpersistentai.com/.online, my-persistent-ai.com, persistentais.com/.net/.info/.store/.xyz) | 25+ | Forward → gateway |
| Newly registered (milyfekidai.com, milyfekidsai.com, 360ai.business, smallbusinessai.cloud, sbsai.shop) | 5 | kidai/kidsai: forward → gateway (kidsai: swap to Kids AI deploy when built) · other 3: hold/forward |
| milyfeai.com | 1 | Hold for MiLyfe AI umbrella — forward to gateway for now |
| MiLyfe core + eimersbusiness.com + eimerstransportation.com + live Base44 apps | — | embed.js snippet (via builder, morning session) |

## Blockers (Joshua, morning)
1. **GoDaddy API key** → I execute all forwarding via API, ~5 min/domain, no clicks.
2. **Agent API key** (from my editor's API/Developer panel) → paste to Rob → Render env var → in-page chat live.

## DEPLOYMENT STATE — 3:40 AM Sept 17, 2026
- ✅ LIVE: gateway page + embed.js on GitHub Pages (verified HTTP 200)
- ⚠️ Render static service `rob-eimers-gateway` (srv-dalpaah42hec73d98gsg) created but build_failed twice — build logs need dashboard eyes: https://dashboard.render.com/web/srv-dalpaah42hec73d98gsg (kept, not deleted, per additive-only rule; fix or supersede in morning)
- 🔴 Phase 2 blockers (Joshua): GoDaddy API key (domain forwarding) + agent API key (in-page governed chat proxy)
