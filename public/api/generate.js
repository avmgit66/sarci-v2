<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>SARCi — SmartShift Ai Roadmap Coach</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'DM Sans',sans-serif;background:#f8f8f6;min-height:100vh;padding:2rem 1rem;}
.wrap{max-width:680px;margin:0 auto;background:white;border-radius:16px;padding:2rem;box-shadow:0 1px 4px rgba(0,0,0,0.08);}
.hdr{text-align:center;padding-bottom:1.5rem;border-bottom:1px solid #eee;margin-bottom:1.75rem;}
.brand{font-family:'DM Serif Display',serif;font-size:28px;color:#1a1a1a;}
.brand span{color:#1D9E75;}
.sub{font-size:12px;color:#888;letter-spacing:0.5px;text-transform:uppercase;margin-top:4px;}

.sdash{background:#f8f8f6;border:1px solid #eee;border-radius:12px;padding:1rem;margin-bottom:1.5rem;position:sticky;top:12px;z-index:10;display:none;}
.srow{display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;}
.snum{font-family:'DM Serif Display',serif;font-size:36px;color:#1a1a1a;line-height:1;}
.tbadge{font-size:11px;font-weight:500;padding:3px 9px;border-radius:12px;margin-left:8px;}
.tc{background:#FCEBEB;color:#A32D2D;}.td{background:#FAEEDA;color:#854F0B;}.tp{background:#EAF3DE;color:#3B6D11;}.ta{background:#E1F5EE;color:#0F6E56;}
.pgrid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}
.pi{background:white;border:1px solid #eee;border-radius:8px;padding:7px 10px;}
.pn{font-size:10px;color:#888;margin-bottom:3px;}
.pbw{height:3px;background:#eee;border-radius:2px;overflow:hidden;margin-bottom:3px;}
.pbf{height:100%;border-radius:2px;transition:width 0.5s;}
.psc{font-size:12px;font-weight:500;color:#1a1a1a;}
.ptag{font-size:9px;padding:1px 5px;border-radius:6px;margin-left:3px;}
.tstr{background:#E1F5EE;color:#0F6E56;}.timp{background:#FAEEDA;color:#854F0B;}.tgap{background:#FCEBEB;color:#A32D2D;}

.pw{margin-bottom:1.5rem;}
.pl{display:flex;justify-content:space-between;font-size:11px;color:#999;margin-bottom:5px;}
.pb{height:3px;background:#eee;border-radius:2px;overflow:hidden;}
.pf{height:100%;background:#1D9E75;border-radius:2px;transition:width 0.4s;}

.sl{font-size:10px;font-weight:500;color:#1D9E75;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;}
.st{font-family:'DM Serif Display',serif;font-size:20px;color:#1a1a1a;margin-bottom:4px;}
.sd{font-size:13px;color:#666;margin-bottom:1.25rem;line-height:1.6;}
.qb{margin-bottom:1.25rem;}
.ql{font-size:13px;font-weight:500;color:#1a1a1a;margin-bottom:5px;display:block;}
.qh{font-size:11px;color:#999;margin-bottom:6px;display:block;}
.qr{color:#1D9E75;}

input[type=text],input[type=email],textarea{width:100%;padding:9px 12px;border:1px solid #ddd;border-radius:8px;background:white;color:#1a1a1a;font-family:'DM Sans',sans-serif;font-size:13px;outline:none;transition:border-color 0.2s;}
input:focus,textarea:focus{border-color:#1D9E75;}
textarea{resize:vertical;min-height:70px;}

.rg{display:grid;gap:6px;}.rg.c2{grid-template-columns:1fr 1fr;}
.ro{display:flex;align-items:center;gap:9px;padding:9px 12px;border:1px solid #ddd;border-radius:8px;cursor:pointer;transition:all 0.15s;background:white;}
.ro:hover{border-color:#1D9E75;background:#f0faf7;}
.ro.sel{border-color:#1D9E75;background:#E1F5EE;}
.ro input{display:none;}
.rd{width:15px;height:15px;border-radius:50%;border:1.5px solid #ccc;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all 0.15s;}
.ro.sel .rd{border-color:#1D9E75;background:#1D9E75;}
.rdi{width:5px;height:5px;border-radius:50%;background:white;opacity:0;transition:opacity 0.15s;}
.ro.sel .rdi{opacity:1;}
.rot{font-size:13px;color:#1a1a1a;}

.cg{display:grid;gap:6px;}.cg.c2{grid-template-columns:1fr 1fr;}
.co{display:flex;align-items:center;gap:9px;padding:9px 12px;border:1px solid #ddd;border-radius:8px;cursor:pointer;transition:all 0.15s;background:white;}
.co:hover{border-color:#1D9E75;background:#f0faf7;}
.co.sel{border-color:#1D9E75;background:#E1F5EE;}
.co input{display:none;}
.cb{width:15px;height:15px;border-radius:3px;border:1.5px solid #ccc;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all 0.15s;}
.co.sel .cb{border-color:#1D9E75;background:#1D9E75;}
.cm{font-size:9px;color:white;opacity:0;transition:opacity 0.15s;}
.co.sel .cm{opacity:1;}
.cot{font-size:13px;color:#1a1a1a;}

.nav{display:flex;justify-content:space-between;align-items:center;margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid #eee;}
.btnb{padding:9px 18px;border:1px solid #ddd;border-radius:8px;background:transparent;color:#666;font-family:'DM Sans',sans-serif;font-size:13px;cursor:pointer;}
.btnb:hover{background:#f8f8f6;}
.btnn{padding:9px 24px;border:none;border-radius:8px;background:#1D9E75;color:white;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;cursor:pointer;}
.btnn:hover{background:#0F6E56;}
.btnn:disabled{background:#ccc;cursor:not-allowed;}

.em{font-size:11px;color:#D85A30;margin-top:3px;display:none;}
.em.show{display:block;}
.step{display:none;}.step.active{display:block;}
.pbadge{font-size:9px;padding:1px 6px;border-radius:8px;margin-left:4px;vertical-align:middle;}
.bf{background:#E6F1FB;color:#185FA5;}.ba{background:#EEEDFE;color:#534AB7;}.bl{background:#E1F5EE;color:#0F6E56;}.bfu{background:#FAEEDA;color:#854F0B;}.bv{background:#FAECE7;color:#993C1D;}

.done-box{text-align:center;padding:3rem 1.5rem;}
.done-icon{width:60px;height:60px;border-radius:50%;background:#E1F5EE;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-size:26px;color:#0F6E56;}

.gen-box{text-align:center;padding:3rem 1.5rem;}
.gen-spinner{width:36px;height:36px;border:2px solid #eee;border-top-color:#1D9E75;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto 1.25rem;}
@keyframes spin{to{transform:rotate(360deg);}}
.gen-title{font-family:'DM Serif Display',serif;font-size:22px;color:#1a1a1a;margin-bottom:0.5rem;}
.gen-steps{display:flex;flex-direction:column;gap:7px;max-width:320px;margin:1.5rem auto 0;text-align:left;}
.gs{display:flex;align-items:center;gap:9px;font-size:13px;color:#999;}
.gs.done{color:#0F6E56;}.gs.active{color:#1a1a1a;font-weight:500;}
.gsd{width:8px;height:8px;border-radius:50%;background:#ddd;flex-shrink:0;}
.gs.done .gsd{background:#1D9E75;}.gs.active .gsd{background:#1D9E75;animation:pulse 1s infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.3;}}

.report-wrap{margin-top:0.5rem;}
.rsec{margin-bottom:1.75rem;padding-bottom:1.5rem;border-bottom:1px solid #eee;}
.rsec:last-child{border-bottom:none;}
.rsl{font-size:10px;font-weight:500;color:#1D9E75;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;}
.rst{font-family:'DM Serif Display',serif;font-size:21px;color:#1a1a1a;margin-bottom:0.75rem;}
.rsb{font-size:14px;color:#333;line-height:1.8;}
.rsb p{margin:0 0 0.75rem;}.rsb p:last-child{margin:0;}

.score-disp{display:flex;align-items:center;gap:1.25rem;padding:1.25rem;background:#f8f8f6;border-radius:12px;margin-bottom:1rem;}
.score-big{font-family:'DM Serif Display',serif;font-size:52px;line-height:1;}
.pc-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:1rem;}
.pc{background:#f8f8f6;border-radius:8px;padding:10px 12px;}
.pc.gap{border-left:3px solid #E24B4A;}.pc.improve{border-left:3px solid #EF9F27;}.pc.strength{border-left:3px solid #1D9E75;}
.pcn{font-size:10px;font-weight:500;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px;}
.pcs{font-size:17px;font-weight:500;color:#1a1a1a;}
.pcm{font-size:11px;color:#aaa;}
.pcbw{height:3px;background:#ddd;border-radius:2px;margin-top:6px;overflow:hidden;}
.pcbf{height:100%;border-radius:2px;}

.pstep{display:flex;gap:12px;margin-bottom:1rem;padding:12px;background:#f8f8f6;border-radius:8px;}
.psn{width:24px;height:24px;border-radius:50%;background:#1D9E75;color:white;font-size:12px;font-weight:500;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;}
.psc{flex:1;}
.pst{font-size:14px;font-weight:500;color:#1a1a1a;margin-bottom:4px;}
.psb{font-size:13px;color:#555;line-height:1.6;}

.ai-card{padding:12px;background:#f8f8f6;border-radius:8px;margin-bottom:8px;border-left:3px solid #7F77DD;}
.ai-tool{font-size:14px;font-weight:500;color:#1a1a1a;margin-bottom:4px;}
.ai-body{font-size:13px;color:#555;line-height:1.6;}

.err-box{background:#FCEBEB;border-radius:10px;padding:1.5rem;text-align:center;margin-top:1rem;}
.err-title{font-size:15px;font-weight:500;color:#A32D2D;margin-bottom:0.5rem;}
.err-msg{font-size:13px;color:#c0392b;margin-bottom:1rem;}

@media(max-width:480px){.rg.c2,.cg.c2,.pgrid,.pc-grid{grid-template-columns:1fr;}}
</style>
</head>
<body>
<div class="wrap">
  <div class="hdr">
    <div class="brand">SmartShift <span>Ai</span></div>
    <div class="sub">SARCi — SmartShift Ai Roadmap Coach</div>
  </div>

  <div class="sdash" id="sdash">
    <div class="srow">
      <div>
        <div style="font-size:10px;color:#888;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px;">SARCi Score</div>
        <div style="display:flex;align-items:baseline;gap:6px;">
          <div class="snum" id="d-total">0</div>
          <div style="font-size:12px;color:#888;">/ 100</div>
          <span class="tbadge tc" id="d-tier">Critical</span>
        </div>
      </div>
      <svg viewBox="0 0 100 55" style="width:90px;height:50px;overflow:visible;">
        <path d="M8,50 A42,42 0 0,1 92,50" fill="none" stroke="#eee" stroke-width="8"/>
        <path id="garc" d="M8,50 A42,42 0 0,1 92,50" fill="none" stroke="#1D9E75" stroke-width="8" stroke-linecap="round" stroke-dasharray="132" stroke-dashoffset="132" style="transition:stroke-dashoffset 0.6s,stroke 0.4s;"/>
      </svg>
    </div>
    <div class="pgrid">
      <div class="pi"><div class="pn">Foundation (25)</div><div class="pbw"><div class="pbf" id="pb-f" style="width:0%;background:#378ADD;"></div></div><span class="psc" id="ps-f">0</span><span class="ptag tgap" id="pt-f">Gap</span></div>
      <div class="pi"><div class="pn">AI Readiness (25)</div><div class="pbw"><div class="pbf" id="pb-a" style="width:0%;background:#7F77DD;"></div></div><span class="psc" id="ps-a">0</span><span class="ptag tgap" id="pt-a">Gap</span></div>
      <div class="pi"><div class="pn">Lead Flow (16.7)</div><div class="pbw"><div class="pbf" id="pb-l" style="width:0%;background:#1D9E75;"></div></div><span class="psc" id="ps-l">0</span><span class="ptag tgap" id="pt-l">Gap</span></div>
      <div class="pi"><div class="pn">Follow-Up (16.7)</div><div class="pbw"><div class="pbf" id="pb-fu" style="width:0%;background:#BA7517;"></div></div><span class="psc" id="ps-fu">0</span><span class="ptag tgap" id="pt-fu">Gap</span></div>
      <div class="pi" style="grid-column:1/-1;"><div class="pn">Visibility (16.6)</div><div class="pbw"><div class="pbf" id="pb-v" style="width:0%;background:#D85A30;"></div></div><span class="psc" id="ps-v">0</span><span class="ptag tgap" id="pt-v">Gap</span></div>
    </div>
  </div>

  <div class="pw" id="pw">
    <div class="pl"><span id="psec">Section 1 of 8</span><span id="ppct">0%</span></div>
    <div class="pb"><div class="pf" id="pfill" style="width:0%;"></div></div>
  </div>

  <div id="form-body">

    <div class="step active" id="step-1">
      <div class="sl">Section 1 — Identity</div><div class="st">Let's start with the basics</div><div class="sd">Tell us about you and your business so we can personalize your roadmap.</div>
      <div class="qb"><label class="ql">Full name <span class="qr">*</span></label><input type="text" id="q-name" placeholder="Your full name"/><div class="em" id="e-name">Please enter your name.</div></div>
      <div class="qb"><label class="ql">Business name <span class="qr">*</span></label><input type="text" id="q-biz" placeholder="Your business name"/><div class="em" id="e-biz">Please enter your business name.</div></div>
      <div class="qb">
        <label class="ql">Industry <span class="qr">*</span></label>
        <div class="rg">
          <label class="ro"><input type="radio" name="industry" value="fitness"/><div class="rd"><div class="rdi"></div></div><span class="rot">Fitness / wellness / coaching</span></label>
          <label class="ro"><input type="radio" name="industry" value="professional"/><div class="rd"><div class="rdi"></div></div><span class="rot">Professional services (law, accounting, consulting)</span></label>
          <label class="ro"><input type="radio" name="industry" value="home"/><div class="rd"><div class="rdi"></div></div><span class="rot">Home services (contractors, cleaning, landscaping)</span></label>
          <label class="ro"><input type="radio" name="industry" value="retail"/><div class="rd"><div class="rdi"></div></div><span class="rot">Retail / e-commerce / physical products</span></label>
          <label class="ro"><input type="radio" name="industry" value="food"/><div class="rd"><div class="rdi"></div></div><span class="rot">Food & beverage / restaurant</span></label>
          <label class="ro"><input type="radio" name="industry" value="beauty"/><div class="rd"><div class="rdi"></div></div><span class="rot">Health & beauty (salon, spa, med spa)</span></label>
          <label class="ro"><input type="radio" name="industry" value="realestate"/><div class="rd"><div class="rdi"></div></div><span class="rot">Real estate</span></label>
          <label class="ro"><input type="radio" name="industry" value="creative"/><div class="rd"><div class="rdi"></div></div><span class="rot">Creative & digital products</span></label>
          <label class="ro"><input type="radio" name="industry" value="other"/><div class="rd"><div class="rdi"></div></div><span class="rot">Other</span></label>
        </div>
        <div class="em" id="e-industry">Please select your industry.</div>
      </div>
      <div class="qb"><label class="ql">Location <span class="qr">*</span></label><input type="text" id="q-location" placeholder="City, state or region"/><div class="em" id="e-location">Please enter your location.</div></div>
      <div class="qb"><label class="ql">Team size <span class="qr">*</span></label><div class="rg c2"><label class="ro"><input type="radio" name="team" value="solo"/><div class="rd"><div class="rdi"></div></div><span class="rot">Just me</span></label><label class="ro"><input type="radio" name="team" value="small"/><div class="rd"><div class="rdi"></div></div><span class="rot">2–5 people</span></label><label class="ro"><input type="radio" name="team" value="medium"/><div class="rd"><div class="rdi"></div></div><span class="rot">6–10 people</span></label><label class="ro"><input type="radio" name="team" value="large"/><div class="rd"><div class="rdi"></div></div><span class="rot">10+ people</span></label></div><div class="em" id="e-team">Please select your team size.</div></div>
      <div class="qb"><label class="ql">Main product or service <span class="qr">*</span></label><input type="text" id="q-service" placeholder="e.g., 1-on-1 business coaching"/><div class="em" id="e-service">Please describe your service.</div></div>
      <div class="qb"><label class="ql">Average sale price <span class="qr">*</span> <span class="pbadge bf">Foundation</span></label><div class="rg c2"><label class="ro"><input type="radio" name="price" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Under $100</span></label><label class="ro"><input type="radio" name="price" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$100–$500</span></label><label class="ro"><input type="radio" name="price" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$500–$2,000</span></label><label class="ro"><input type="radio" name="price" value="4" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$2,000–$10,000</span></label><label class="ro"><input type="radio" name="price" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$10,000+</span></label></div><div class="em" id="e-price">Please select a range.</div></div>
      <div class="nav"><div></div><button class="btnn" onclick="gn(1)">Continue →</button></div>
    </div>

    <div class="step" id="step-2">
      <div class="sl">Section 2 — Business Health</div><div class="st">How's the business doing?</div><div class="sd">These answers drive your Foundation and Lead Flow scores.</div>
      <div class="qb"><label class="ql">Average monthly revenue <span class="qr">*</span> <span class="pbadge bf">Foundation</span></label><div class="rg c2"><label class="ro"><input type="radio" name="revenue" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Under $2K</span></label><label class="ro"><input type="radio" name="revenue" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$2K–$5K</span></label><label class="ro"><input type="radio" name="revenue" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$5K–$15K</span></label><label class="ro"><input type="radio" name="revenue" value="4" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$15K–$50K</span></label><label class="ro"><input type="radio" name="revenue" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$50K+</span></label></div><div class="em" id="e-revenue">Please select a range.</div></div>
      <div class="qb"><label class="ql">Average monthly expenses <span class="qr">*</span> <span class="pbadge bf">Foundation</span></label><div class="rg c2"><label class="ro"><input type="radio" name="expenses" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Under $1K</span></label><label class="ro"><input type="radio" name="expenses" value="4" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$1K–$3K</span></label><label class="ro"><input type="radio" name="expenses" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$3K–$10K</span></label><label class="ro"><input type="radio" name="expenses" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$10K–$30K</span></label><label class="ro"><input type="radio" name="expenses" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$30K+</span></label></div><div class="em" id="e-expenses">Please select a range.</div></div>
      <div class="qb"><label class="ql">Runway confidence <span class="qr">*</span> <span class="pbadge bf">Foundation</span></label><div class="rg"><label class="ro"><input type="radio" name="runway" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Low — not sure where next month's money comes from</span></label><label class="ro"><input type="radio" name="runway" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Moderate — stable but not growing</span></label><label class="ro"><input type="radio" name="runway" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">High — confident and growing</span></label></div><div class="em" id="e-runway">Please select one.</div></div>
      <div class="qb"><label class="ql">New leads per month <span class="qr">*</span> <span class="pbadge bf">Foundation</span> <span class="pbadge bl">Lead Flow</span></label><div class="rg c2"><label class="ro"><input type="radio" name="leads" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">0–5</span></label><label class="ro"><input type="radio" name="leads" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">6–15</span></label><label class="ro"><input type="radio" name="leads" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">16–30</span></label><label class="ro"><input type="radio" name="leads" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">30+</span></label></div><div class="em" id="e-leads">Please select one.</div></div>
      <div class="qb"><label class="ql">Biggest business challenge right now <span class="qr">*</span></label><textarea id="q-challenge" placeholder="One sentence about your top pain point"></textarea><div class="em" id="e-challenge">Please describe your challenge.</div></div>
      <div class="nav"><button class="btnb" onclick="gb(2)">← Back</button><button class="btnn" onclick="gn(2)">Continue →</button></div>
    </div>

    <div class="step" id="step-3">
      <div class="sl">Section 3 — Your Industry</div><div class="st" id="btitle">Industry-specific questions</div><div class="sd">These questions tailor your scores to your industry.</div>
      <div id="bqs"></div>
      <div class="nav"><button class="btnb" onclick="gb(3)">← Back</button><button class="btnn" onclick="gn(3)">Continue →</button></div>
    </div>

    <div class="step" id="step-4">
      <div class="sl">Section 4 — Marketing & Visibility</div><div class="st">How are people finding you?</div><div class="sd">These answers drive your Visibility and Foundation scores.</div>
      <div class="qb"><label class="ql">Active marketing channels <span class="qr">*</span> <span class="pbadge bv">Visibility</span></label><div class="cg c2"><label class="co"><input type="checkbox" name="channels" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">Website / SEO</span></label><label class="co"><input type="checkbox" name="channels" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">Google Business Profile</span></label><label class="co"><input type="checkbox" name="channels" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">Email marketing</span></label><label class="co"><input type="checkbox" name="channels" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">Facebook / Instagram</span></label><label class="co"><input type="checkbox" name="channels" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">LinkedIn</span></label><label class="co"><input type="checkbox" name="channels" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">YouTube / Shorts</span></label><label class="co"><input type="checkbox" name="channels" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">Local listings / directories</span></label><label class="co"><input type="checkbox" name="channels" value="0" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">None currently</span></label></div><div class="em" id="e-channels">Please select at least one.</div></div>
      <div class="qb"><label class="ql">Posting frequency <span class="qr">*</span> <span class="pbadge bv">Visibility</span></label><div class="rg"><label class="ro"><input type="radio" name="frequency" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Daily or several times a week</span></label><label class="ro"><input type="radio" name="frequency" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Weekly</span></label><label class="ro"><input type="radio" name="frequency" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">A few times a month</span></label><label class="ro"><input type="radio" name="frequency" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Rarely or never</span></label></div><div class="em" id="e-frequency">Please select one.</div></div>
      <div class="qb"><label class="ql">Is your main offer immediately clear? <span class="qr">*</span> <span class="pbadge bf">Foundation</span> <span class="pbadge bv">Visibility</span></label><div class="rg"><label class="ro"><input type="radio" name="clarity" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Yes — crystal clear</span></label><label class="ro"><input type="radio" name="clarity" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Somewhat — it takes a moment</span></label><label class="ro"><input type="radio" name="clarity" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Not really</span></label><label class="ro"><input type="radio" name="clarity" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">I'm not sure</span></label></div><div class="em" id="e-clarity">Please select one.</div></div>
      <div class="qb"><label class="ql">Who is your best buyer? <span class="qr">*</span> <span class="pbadge bf">Foundation</span> <span class="pbadge bv">Visibility</span></label><span class="qh">Be specific — more detail = higher score here.</span><textarea id="q-icp" placeholder="Describe your ideal customer..." oninput="sICP()"></textarea><div class="em" id="e-icp">Please describe your best buyer.</div></div>
      <div class="nav"><button class="btnb" onclick="gb(4)">← Back</button><button class="btnn" onclick="gn(4)">Continue →</button></div>
    </div>

    <div class="step" id="step-5">
      <div class="sl">Section 5 — Lead Flow & Follow-Up</div><div class="st">What happens after someone finds you?</div><div class="sd">These answers drive your Lead Flow and Follow-Up scores directly.</div>
      <div class="qb"><label class="ql">Where do you track your leads? <span class="qr">*</span> <span class="pbadge bl">Lead Flow</span></label><div class="rg"><label class="ro"><input type="radio" name="tracking" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">CRM or database</span></label><label class="ro"><input type="radio" name="tracking" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Spreadsheet or notebook</span></label><label class="ro"><input type="radio" name="tracking" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Email inbox</span></label><label class="ro"><input type="radio" name="tracking" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Nowhere consistently</span></label></div><div class="em" id="e-tracking">Please select one.</div></div>
      <div class="qb"><label class="ql">How fast do you respond to a new inquiry? <span class="qr">*</span> <span class="pbadge bl">Lead Flow</span> <span class="pbadge bfu">Follow-Up</span></label><div class="rg"><label class="ro"><input type="radio" name="speed" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Within minutes — I have a system</span></label><label class="ro"><input type="radio" name="speed" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Same day</span></label><label class="ro"><input type="radio" name="speed" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Within a few days</span></label><label class="ro"><input type="radio" name="speed" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">It varies — no real process</span></label></div><div class="em" id="e-speed">Please select one.</div></div>
      <div class="qb"><label class="ql">Do you have a lead magnet or lead capture? <span class="qr">*</span> <span class="pbadge bl">Lead Flow</span></label><div class="rg"><label class="ro"><input type="radio" name="magnet" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Yes — works well and brings in leads</span></label><label class="ro"><input type="radio" name="magnet" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Yes — exists but underperforming</span></label><label class="ro"><input type="radio" name="magnet" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">No — but I want one</span></label><label class="ro"><input type="radio" name="magnet" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">No — don't need one</span></label></div><div class="em" id="e-magnet">Please select one.</div></div>
      <div class="qb"><label class="ql">What happens after someone says "not yet"? <span class="qr">*</span> <span class="pbadge bfu">Follow-Up</span></label><div class="rg"><label class="ro"><input type="radio" name="nurture" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Automated email or text nurture sequence</span></label><label class="ro"><input type="radio" name="nurture" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">I follow up manually when I remember</span></label><label class="ro"><input type="radio" name="nurture" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">They go on a social-only list</span></label><label class="ro"><input type="radio" name="nurture" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Nothing — they fall off</span></label></div><div class="em" id="e-nurture">Please select one.</div></div>
      <div class="nav"><button class="btnb" onclick="gb(5)">← Back</button><button class="btnn" onclick="gn(5)">Continue →</button></div>
    </div>

    <div class="step" id="step-6">
      <div class="sl">Section 6 — AI Readiness & Ops</div><div class="st">How automated is your business?</div><div class="sd">These answers drive your AI Readiness score directly.</div>
      <div class="qb"><label class="ql">Scheduling, invoicing, and tracking <span class="qr">*</span> <span class="pbadge ba">AI Readiness</span></label><div class="rg"><label class="ro"><input type="radio" name="ops" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Mostly manual</span></label><label class="ro"><input type="radio" name="ops" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Mix of manual and software</span></label><label class="ro"><input type="radio" name="ops" value="4" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Mostly automated with software</span></label><label class="ro"><input type="radio" name="ops" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Fully systemized</span></label></div><div class="em" id="e-ops">Please select one.</div></div>
      <div class="qb"><label class="ql">Biggest operations bottleneck <span class="qr">*</span> <span class="pbadge ba">AI Readiness</span></label><span class="qh">More specific = higher score here.</span><textarea id="q-bottleneck" placeholder="e.g., Chasing unpaid invoices takes hours every week" oninput="sBN()"></textarea><div class="em" id="e-bottleneck">Please describe your bottleneck.</div></div>
      <div class="qb"><label class="ql">AI tools you'd try in 30 days <span class="qr">*</span> <span class="pbadge ba">AI Readiness</span></label><div class="cg"><label class="co"><input type="checkbox" name="aitools" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">AI content drafting / social posts</span></label><label class="co"><input type="checkbox" name="aitools" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">AI email nurture sequences</span></label><label class="co"><input type="checkbox" name="aitools" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">AI meeting notes and summaries</span></label><label class="co"><input type="checkbox" name="aitools" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">AI lead qualification / CRM help</span></label><label class="co"><input type="checkbox" name="aitools" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">AI client FAQ or chatbot</span></label><label class="co"><input type="checkbox" name="aitools" value="1" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">AI scheduling or reminders</span></label><label class="co"><input type="checkbox" name="aitools" value="0" onchange="sc()"/><div class="cb"><span class="cm">✓</span></div><span class="cot">None of these yet</span></label></div><div class="em" id="e-aitools">Please select at least one.</div></div>
      <div class="nav"><button class="btnb" onclick="gb(6)">← Back</button><button class="btnn" onclick="gn(6)">Continue →</button></div>
    </div>

    <div class="step" id="step-7">
      <div class="sl">Section 7 — Capacity & Preferences</div><div class="st">Let's make this realistic</div><div class="sd">Time and budget shape your playbook and AI Readiness score.</div>
      <div class="qb"><label class="ql">Weekly time available <span class="qr">*</span> <span class="pbadge ba">AI Readiness</span></label><div class="rg c2"><label class="ro"><input type="radio" name="time" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Under 2 hours</span></label><label class="ro"><input type="radio" name="time" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">2–5 hours</span></label><label class="ro"><input type="radio" name="time" value="4" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">6–10 hours</span></label><label class="ro"><input type="radio" name="time" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">10+ hours</span></label></div><div class="em" id="e-time">Please select one.</div></div>
      <div class="qb"><label class="ql">Monthly budget for tools or ads <span class="qr">*</span> <span class="pbadge ba">AI Readiness</span></label><div class="rg c2"><label class="ro"><input type="radio" name="budget" value="1" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">No budget</span></label><label class="ro"><input type="radio" name="budget" value="2" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">Under $100/mo</span></label><label class="ro"><input type="radio" name="budget" value="3" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$100–$300/mo</span></label><label class="ro"><input type="radio" name="budget" value="4" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$300–$500/mo</span></label><label class="ro"><input type="radio" name="budget" value="5" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">$500+/mo</span></label></div><div class="em" id="e-budget">Please select one.</div></div>
      <div class="qb"><label class="ql">One thing you will NOT do <span class="qr">*</span></label><input type="text" id="q-wont" placeholder="e.g., I will not make TikTok videos"/><div class="em" id="e-wont">Please fill this in.</div></div>
      <div class="qb"><label class="ql">One thing you enjoy doing <span class="qr">*</span></label><input type="text" id="q-enjoy" placeholder="e.g., I love writing and talking to clients"/><div class="em" id="e-enjoy">Please fill this in.</div></div>
      <div class="nav"><button class="btnb" onclick="gb(7)">← Back</button><button class="btnn" onclick="gn(7)">Continue →</button></div>
    </div>

    <div class="step" id="step-8">
      <div class="sl">Section 8 — Report Preferences & Delivery</div><div class="st">Almost there</div><div class="sd">Last few questions before we generate your personalized SmartShift Ai roadmap.</div>
      <div class="qb"><label class="ql">How much detail do you want? <span class="qr">*</span></label><div class="rg"><label class="ro"><input type="radio" name="detail" value="summary"/><div class="rd"><div class="rdi"></div></div><span class="rot">Quick summary — just the key moves</span></label><label class="ro"><input type="radio" name="detail" value="full"/><div class="rd"><div class="rdi"></div></div><span class="rot">Full detail — step by step with examples</span></label></div><div class="em" id="e-detail">Please select one.</div></div>
      <div class="qb"><label class="ql">Current advisor guidance (optional)</label><span class="qh">Paste any existing recommendations so your playbook works alongside them.</span><textarea id="q-guidance" placeholder="e.g., My SBDC advisor told me to focus on Google Business Profile..."></textarea></div>
      <div class="qb"><label class="ql">Email address <span class="qr">*</span></label><span class="qh">Your full report will be sent here — check your inbox after submitting.</span><input type="email" id="q-email" placeholder="your@email.com"/><div class="em" id="e-email">Please enter a valid email.</div></div>
      <div class="nav"><button class="btnb" onclick="gb(8)">← Back</button><button class="btnn" id="submit-btn" onclick="doSubmit()">Generate my report →</button></div>
    </div>

    <div class="step" id="step-generating">
      <div class="gen-box">
        <div class="gen-spinner"></div>
        <div class="gen-title">Building your SmartShift Ai roadmap</div>
        <p style="font-size:13px;color:#666;margin-bottom:0.5rem;" id="gen-msg">Analyzing your answers across all 5 pillars...</p>
        <div class="gen-steps">
          <div class="gs active" id="gs-1"><div class="gsd"></div>Scoring all 5 pillars</div>
          <div class="gs" id="gs-2"><div class="gsd"></div>Identifying your priority gaps</div>
          <div class="gs" id="gs-3"><div class="gsd"></div>Writing your personalized report</div>
          <div class="gs" id="gs-4"><div class="gsd"></div>Building your 30-day playbook</div>
          <div class="gs" id="gs-5"><div class="gsd"></div>Sending your report by email</div>
        </div>
      </div>
    </div>

    <div class="step" id="step-report">
      <div class="report-wrap" id="report-content"></div>
      <div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid #eee;text-align:center;">
        <p style="font-size:13px;color:#666;margin-bottom:0.75rem;">A copy of this report has been sent to <strong id="report-email"></strong></p>
        <p style="font-size:12px;color:#999;">Powered by SmartShift Ai · SARCi v2</p>
      </div>
    </div>

    <div class="step" id="step-error">
      <div class="err-box">
        <div class="err-title">Something went wrong</div>
        <div class="err-msg" id="err-msg">Report generation failed. Please try again.</div>
        <button class="btnn" onclick="retrySubmit()">Try again</button>
      </div>
    </div>

  </div>
</div>

<script>
const SECS=['Identity','Business Health','Your Industry','Marketing & Visibility','Lead Flow & Follow-Up','AI Readiness & Ops','Capacity & Preferences','Report & Delivery'];
let curStep=1,fd={},icpSc=3,bnSc=3,genTimer=null;

const BQ={
  fitness:{title:"Fitness / Wellness / Coaching",questions:[
    {id:'b1',name:'b-ret',label:"Biggest retention challenge",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Getting people to commit long-term',3],['No-shows and cancellations',2],['Clients plateau and leave',3],['Price objections',2]]},
    {id:'b2',name:'b-mod',label:"Do you offer recurring memberships?",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Yes — most revenue is recurring',5],['Mix of both',3],['Mostly one-time sessions',1]]},
    {id:'b3',name:'b-src',label:"How do most new clients find you?",p:'visibility',pc:'bv',pn:'Visibility',opts:[['Referrals',3],['Social media',4],['Google search',5],['Walk-ins / local',3],['Other',2]]},
    {id:'b4',name:'b-bk',label:"Booking / scheduling",p:'ai',pc:'ba',pn:'AI Readiness',opts:[['Clients book themselves online',5],['I book manually',1],['Mix of both',3],['No formal system',1]]}
  ]},
  professional:{title:"Professional Services",questions:[
    {id:'b1',name:'b-int',label:"Biggest intake bottleneck",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Too much back-and-forth before signing',2],['Slow document collection',2],['Unclear scope / pricing conversations',2],['Following up with cold leads',3]]},
    {id:'b2',name:'b-pkg',label:"Are your packages clearly defined and priced?",p:'foundation',pc:'bf',pn:'Foundation',opts:[['Yes — clear menu of services',5],['Somewhat — depends on the client',3],['No — everything is custom quoted',1]]},
    {id:'b3',name:'b-src',label:"How do new clients engage you?",p:'visibility',pc:'bv',pn:'Visibility',opts:[['Referrals from existing clients',3],['LinkedIn or content',4],['Google / SEO',5],['Cold outreach',2],['Other',2]]},
    {id:'b4',name:'b-cm',label:"Client communication management",p:'ai',pc:'ba',pn:'AI Readiness',opts:[['Email only',2],['Client portal or CRM',5],['Mix of tools',3],['Mostly phone',1]]}
  ]},
  home:{title:"Home Services",questions:[
    {id:'b1',name:'b-rev',label:"System for asking clients for reviews?",p:'visibility',pc:'bv',pn:'Visibility',opts:[["Yes — it's automatic",5],['Yes — but I do it manually',3],['Sometimes',2],['No',1]]},
    {id:'b2',name:'b-inv',label:"How do you handle estimates and invoices?",p:'ai',pc:'ba',pn:'AI Readiness',opts:[['Paper or verbal',1],['Spreadsheet or email',2],['Software like Jobber or HouseCall Pro',5],['Mix of manual and software',3]]},
    {id:'b3',name:'b-src',label:"How do most jobs come in?",p:'visibility',pc:'bv',pn:'Visibility',opts:[['Referrals',3],['Google Business Profile',5],['Facebook / Nextdoor',4],['Door-to-door or yard signs',2],['Booking platform (Thumbtack, Angi)',3]]},
    {id:'b4',name:'b-sch',label:"Biggest scheduling headache",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Double bookings or gaps',2],['No-shows or cancellations',2],['Estimating and quoting takes too long',2],['Coordinating crew schedules',3]]}
  ]},
  retail:{title:"Retail / E-commerce",questions:[
    {id:'b1',name:'b-rep',label:"How do you bring customers back?",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Email or SMS marketing',5],['Loyalty program',4],['Social media',2],['I rely on them coming back',1]]},
    {id:'b2',name:'b-ab',label:"Abandoned cart / lost sale follow-up?",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Automated sequence',5],['Manual follow-up',2],['No follow-up system',1]]},
    {id:'b3',name:'b-inv2',label:"Biggest inventory challenge",p:'ai',pc:'ba',pn:'AI Readiness',opts:[['Overstocking slow items',2],['Running out of top sellers',2],['No real tracking system',1],['Managing multiple sales channels',3]]},
    {id:'b4',name:'b-sal',label:"Where do most sales happen?",p:'visibility',pc:'bv',pn:'Visibility',opts:[['Physical storefront',3],['Online store (Shopify, Etsy)',4],['Both equally',5],['Pop-ups or markets',3]]}
  ]},
  food:{title:"Food & Beverage",questions:[
    {id:'b1',name:'b-rev2',label:"Do you actively manage online reputation?",p:'visibility',pc:'bv',pn:'Visibility',opts:[['Yes — we respond to all reviews',5],['Occasionally',3],['Rarely or never',1]]},
    {id:'b2',name:'b-rep2',label:"How do you build repeat customer relationships?",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Loyalty app or punch card',5],['Email or text list',4],['Social media only',2],['No formal system',1]]},
    {id:'b3',name:'b-ops',label:"Biggest operational bottleneck",p:'ai',pc:'ba',pn:'AI Readiness',opts:[['Staffing and scheduling',2],['Order accuracy and speed',2],['Inventory and food waste',2],['Online ordering / third-party platforms',3]]},
    {id:'b4',name:'b-mod2',label:"Primary revenue model",p:'foundation',pc:'bf',pn:'Foundation',opts:[['Dine-in',3],['Takeout / delivery',3],['Catering',4],['Mix of the above',5]]}
  ]},
  beauty:{title:"Health & Beauty",questions:[
    {id:'b1',name:'b-ns',label:"How do you handle no-shows?",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Deposit or card on file required',5],["We have a policy but don't enforce it",2],['No formal policy',1]]},
    {id:'b2',name:'b-ret2',label:"Biggest client retention issue",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[["Clients don't rebook before leaving",2],['No automated reminder system',2],['Price shopping to competitors',3],['Inconsistent experience across staff',3]]},
    {id:'b3',name:'b-bk2',label:"How do most new clients book?",p:'ai',pc:'ba',pn:'AI Readiness',opts:[['Online booking link',5],['Phone or text',2],['Walk-in',1],['Referral + they call us',2]]},
    {id:'b4',name:'b-rtl',label:"Do you have a retail product line?",p:'foundation',pc:'bf',pn:'Foundation',opts:[["Yes — it's a meaningful revenue stream",5],["Yes — but we don't push it",3],['No',1]]}
  ]},
  realestate:{title:"Real Estate",questions:[
    {id:'b1',name:'b-crm',label:"CRM situation",p:'ai',pc:'ba',pn:'AI Readiness',opts:[['Using a real estate CRM well',5],['Using a general CRM',3],['Spreadsheet or notes',2],['Nothing formal',1]]},
    {id:'b2',name:'b-db',label:"How do you stay in front of your database?",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Automated email / text sequences',5],['Monthly newsletter',3],['Occasional social posts',2],['No consistent system',1]]},
    {id:'b3',name:'b-cv',label:"Biggest lead conversion challenge",p:'leadflow',pc:'bl',pn:'Lead Flow',opts:[['Leads go cold before I follow up',1],['Hard to stand out from other agents',2],['Getting referrals consistently',3],['Long time between first contact and close',2]]},
    {id:'b4',name:'b-fc',label:"Primary focus right now",p:'foundation',pc:'bf',pn:'Foundation',opts:[['Buyer leads',3],['Seller leads',3],['Both equally',5],['Property management',4]]}
  ]},
  creative:{title:"Creative & Digital Products",questions:[
    {id:'b1',name:'b-sal2',label:"How do most of your sales happen?",p:'visibility',pc:'bv',pn:'Visibility',opts:[['My own website or online store',4],['Etsy, Gumroad, or a marketplace',3],['Direct — clients come to me personally',3],['Social media (DMs, link in bio)',3],['Mix of the above',5]]},
    {id:'b2',name:'b-ch',label:"Biggest challenge with custom/digital work",p:'foundation',pc:'bf',pn:'Foundation',opts:[['Pricing my work confidently',2],['Getting consistent inbound interest',2],['Scope creep or unclear expectations',2],['Delivering at volume without burning out',3]]},
    {id:'b3',name:'b-rep3',label:"How do you handle repeat buyers?",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Email list with regular updates',5],['Social media only',2],['I reach out personally when I have something new',3],["No system — they find me when ready",1]]},
    {id:'b4',name:'b-ff',label:"Fulfillment process",p:'ai',pc:'ba',pn:'AI Readiness',opts:[['Fully manual — every order is hands-on',1],['Partially systematized',3],['Mostly automated — digital delivery',5],['It varies depending on the project',2]]}
  ]},
  other:{title:"Your Business",questions:[
    {id:'b1',name:'b-src2',label:"How do most clients find you?",p:'visibility',pc:'bv',pn:'Visibility',opts:[['Referrals',3],['Social media',4],['Google search',5],['Paid advertising',4],['Other',2]]},
    {id:'b2',name:'b-ret3',label:"Biggest challenge keeping clients",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Price competition',2],['No structured follow-up',1],['Inconsistent delivery or experience',2],['Hard to differentiate from competitors',2]]},
    {id:'b3',name:'b-rep4',label:"How do you encourage repeat business?",p:'followup',pc:'bfu',pn:'Follow-Up',opts:[['Loyalty or referral program',5],['Email or text outreach',4],['Social media',2],['I rely on them coming back',1]]},
    {id:'b4',name:'b-ops2',label:"Day-to-day operations",p:'ai',pc:'ba',pn:'AI Readiness',opts:[['Mostly manual and reactive',1],['Some systems but inconsistent',2],['Well-organized with clear processes',4],['Highly automated',5]]}
  ]}
};

function gR(n){const e=document.querySelector(`input[name="${n}"]:checked`);return e?parseFloat(e.value):0;}
function gC(n){return Array.from(document.querySelectorAll(`input[name="${n}"]:checked`)).reduce((a,e)=>a+parseFloat(e.value),0);}
function sICP(){const v=document.getElementById('q-icp').value.trim();icpSc=v.length<20?1:v.length<60?3:5;sc();}
function sBN(){const v=document.getElementById('q-bottleneck').value.trim();bnSc=v.length<10?1:v.length<40?3:5;sc();}

function calcScores(){
  const r={foundation:0,ai:0,leadflow:0,followup:0,visibility:0};
  r.foundation+=gR('price')+gR('revenue')+gR('expenses')+gR('runway')+(gR('leads')*0.5)+gR('clarity')+icpSc;
  r.leadflow+=(gR('leads')*0.5)+gR('tracking')+gR('speed')+gR('magnet');
  r.followup+=gR('speed')+gR('nurture');
  r.visibility+=Math.min(gC('channels'),5)+gR('frequency')+gR('clarity')+icpSc;
  r.ai+=gR('ops')+bnSc+Math.min(gC('aitools'),5)+gR('time')+gR('budget');
  const branch=BQ[fd.industry]||BQ['other'];
  branch.questions.forEach(q=>{const v=gR(q.name);if(v>0)r[q.p]=(r[q.p]||0)+v;});
  return{
    foundation:Math.min(25,(r.foundation/37)*25),
    ai:Math.min(25,(r.ai/25)*25),
    leadflow:Math.min(16.7,(r.leadflow/20)*16.7),
    followup:Math.min(16.7,(r.followup/15)*16.7),
    visibility:Math.min(16.6,(r.visibility/20)*16.6)
  };
}

function getTier(s){if(s<=40)return{l:'Critical',c:'tc'};if(s<=60)return{l:'Developing',c:'td'};if(s<=80)return{l:'Progressing',c:'tp'};return{l:'Advanced',c:'ta'};}
function getPT(s,m){const p=s/m;if(p<0.4)return{l:'Gap',c:'tgap',cc:'gap'};if(p<0.7)return{l:'Improve',c:'timp',cc:'improve'};return{l:'Strength',c:'tstr',cc:'strength'};}

function sc(){
  const s=calcScores();
  const tot=Math.round(s.foundation+s.ai+s.leadflow+s.followup+s.visibility);
  document.getElementById('d-total').textContent=tot;
  const tier=getTier(tot);
  const tl=document.getElementById('d-tier');tl.textContent=tier.l;tl.className='tbadge '+tier.c;
  document.getElementById('garc').style.strokeDashoffset=132-(132*(tot/100));
  document.getElementById('garc').style.stroke=tot<=40?'#E24B4A':tot<=60?'#EF9F27':tot<=80?'#639922':'#1D9E75';
  [{k:'f',s:s.foundation,m:25},{k:'a',s:s.ai,m:25},{k:'l',s:s.leadflow,m:16.7},{k:'fu',s:s.followup,m:16.7},{k:'v',s:s.visibility,m:16.6}].forEach(p=>{
    document.getElementById('pb-'+p.k).style.width=Math.min(100,(p.s/p.m)*100)+'%';
    document.getElementById('ps-'+p.k).textContent=p.s.toFixed(1);
    const tag=getPT(p.s,p.m);
    const el=document.getElementById('pt-'+p.k);
    el.textContent=tag.l;el.className='ptag '+tag.c;
  });
  return s;
}

function buildBranch(ind){
  const branch=BQ[ind]||BQ['other'];
  document.getElementById('btitle').textContent='A few questions about '+branch.title;
  document.getElementById('bqs').innerHTML=branch.questions.map(q=>`<div class="qb"><label class="ql">${q.label} <span class="qr">*</span> <span class="pbadge ${q.pc}">${q.pn}</span></label><div class="rg">${q.opts.map(([l,v])=>`<label class="ro"><input type="radio" name="${q.name}" value="${v}" onchange="sc()"/><div class="rd"><div class="rdi"></div></div><span class="rot">${l}</span></label>`).join('')}</div><div class="em" id="e-${q.id}">Please select one.</div></div>`).join('');
  document.querySelectorAll('#bqs .ro').forEach(o=>{o.addEventListener('click',function(){const r=this.querySelector('input');document.querySelectorAll(`input[name="${r.name}"]`).forEach(x=>x.closest('.ro').classList.remove('sel'));this.classList.add('sel');r.checked=true;sc();});});
}

function updProg(n){
  const pct=Math.round(((n-1)/8)*100);
  document.getElementById('pfill').style.width=pct+'%';
  document.getElementById('psec').textContent=n<=8?`Section ${n} of 8 — ${SECS[n-1]}`:'Complete';
  document.getElementById('ppct').textContent=pct+'%';
}

function showStep(n){
  document.querySelectorAll('.step').forEach(s=>s.classList.remove('active'));
  const ids={9:'step-generating',10:'step-report',11:'step-error'};
  document.getElementById(ids[n]||'step-'+n).classList.add('active');
  if(n<=8)updProg(n);
  window.scrollTo(0,0);
}

function gRV(n){const e=document.querySelector(`input[name="${n}"]:checked`);return e?e.value:null;}
function gCV(n){return Array.from(document.querySelectorAll(`input[name="${n}"]:checked`)).map(e=>e.value);}
function shE(id,s){const el=document.getElementById('e-'+id);if(el)el.classList.toggle('show',s);}
function gLbl(n){return document.querySelector(`input[name="${n}"]:checked`)?.closest('.ro')?.querySelector('.rot')?.textContent||'';}

function vStep(n){
  let ok=true;const req=(c,id)=>{if(!c){shE(id,true);ok=false;}else shE(id,false);};
  if(n===1){req(document.getElementById('q-name').value.trim(),'name');req(document.getElementById('q-biz').value.trim(),'biz');req(gRV('industry'),'industry');req(document.getElementById('q-location').value.trim(),'location');req(gRV('team'),'team');req(document.getElementById('q-service').value.trim(),'service');req(gRV('price'),'price');}
  else if(n===2){req(gRV('revenue'),'revenue');req(gRV('expenses'),'expenses');req(gRV('runway'),'runway');req(gRV('leads'),'leads');req(document.getElementById('q-challenge').value.trim(),'challenge');}
  else if(n===3){(BQ[fd.industry]||BQ['other']).questions.forEach(q=>{req(gRV(q.name),q.id);});}
  else if(n===4){req(gCV('channels').length>0,'channels');req(gRV('frequency'),'frequency');req(gRV('clarity'),'clarity');req(document.getElementById('q-icp').value.trim(),'icp');}
  else if(n===5){req(gRV('tracking'),'tracking');req(gRV('speed'),'speed');req(gRV('magnet'),'magnet');req(gRV('nurture'),'nurture');}
  else if(n===6){req(gRV('ops'),'ops');req(document.getElementById('q-bottleneck').value.trim(),'bottleneck');req(gCV('aitools').length>0,'aitools');}
  else if(n===7){req(gRV('time'),'time');req(gRV('budget'),'budget');req(document.getElementById('q-wont').value.trim(),'wont');req(document.getElementById('q-enjoy').value.trim(),'enjoy');}
  else if(n===8){req(gRV('detail'),'detail');const em=document.getElementById('q-email').value.trim();req(em&&em.includes('@'),'email');}
  return ok;
}

function collectFD(n){
  if(n===1){fd.name=document.getElementById('q-name').value.trim();fd.business=document.getElementById('q-biz').value.trim();fd.industry=gRV('industry');fd.location=document.getElementById('q-location').value.trim();fd.team=gRV('team');fd.service=document.getElementById('q-service').value.trim();fd.priceLabel=gLbl('price');}
  else if(n===2){fd.revenueLabel=gLbl('revenue');fd.expensesLabel=gLbl('expenses');fd.runwayLabel=gLbl('runway');fd.leadsLabel=gLbl('leads');fd.challenge=document.getElementById('q-challenge').value.trim();}
  else if(n===3){(BQ[fd.industry]||BQ['other']).questions.forEach(q=>{fd[q.name+'L']=document.querySelector(`input[name="${q.name}"]:checked`)?.closest('.ro')?.querySelector('.rot')?.textContent||'';});}
  else if(n===4){fd.channelCount=gCV('channels').filter(v=>v==='1').length;fd.frequencyLabel=gLbl('frequency');fd.clarityLabel=gLbl('clarity');fd.icp=document.getElementById('q-icp').value.trim();}
  else if(n===5){fd.trackingLabel=gLbl('tracking');fd.speedLabel=gLbl('speed');fd.magnetLabel=gLbl('magnet');fd.nurtureLabel=gLbl('nurture');}
  else if(n===6){fd.opsLabel=gLbl('ops');fd.bottleneck=document.getElementById('q-bottleneck').value.trim();fd.aitools=Array.from(document.querySelectorAll('input[name="aitools"]:checked')).map(e=>e.closest('.co')?.querySelector('.cot')?.textContent||'').filter(t=>t&&t!=='None of these yet');}
  else if(n===7){fd.timeLabel=gLbl('time');fd.budgetLabel=gLbl('budget');fd.wont=document.getElementById('q-wont').value.trim();fd.enjoy=document.getElementById('q-enjoy').value.trim();}
  else if(n===8){fd.detail=gRV('detail');fd.guidance=document.getElementById('q-guidance').value.trim();fd.email=document.getElementById('q-email').value.trim();}
}

function gn(n){
  if(!vStep(n))return;
  collectFD(n);
  if(n===1){buildBranch(fd.industry);document.getElementById('sdash').style.display='block';}
  curStep=n+1;showStep(curStep);
}
function gb(n){curStep=n-1;showStep(curStep);}

function advGen(i){
  ['gs-1','gs-2','gs-3','gs-4','gs-5'].forEach((id,idx)=>{
    const el=document.getElementById(id);
    if(idx<i)el.className='gs done';
    else if(idx===i)el.className='gs active';
    else el.className='gs';
  });
}

async function doSubmit(){
  if(!vStep(8))return;
  collectFD(8);

  const scores=calcScores();
  const total=Math.round(scores.foundation+scores.ai+scores.leadflow+scores.followup+scores.visibility);
  const tier=getTier(total);

  const pillarData=[
    {name:'Foundation',key:'foundation',score:scores.foundation,max:25},
    {name:'AI Readiness',key:'ai',score:scores.ai,max:25},
    {name:'Lead Flow',key:'leadflow',score:scores.leadflow,max:16.7},
    {name:'Follow-Up',key:'followup',score:scores.followup,max:16.7},
    {name:'Visibility',key:'visibility',score:scores.visibility,max:16.6}
  ].sort((a,b)=>(a.score/a.max)-(b.score/b.max));

  const top2=pillarData.slice(0,2).map(p=>p.name);
  const topStr=pillarData[pillarData.length-1].name;

  showStep(9);
  document.getElementById('sdash').style.display='none';

  let gi=0;
  genTimer=setInterval(()=>{if(gi<4){gi++;advGen(gi);}},2500);

  const payload={...fd,scores,total,tier:tier.l,top2Gaps:top2,topStrength:topStr,advisorEmail:'dbtech.avm@gmail.com'};

  try{
    const res=await fetch('/api/generate',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    });
    clearInterval(genTimer);
    advGen(4);
    if(!res.ok){const e=await res.json().catch(()=>({}));throw new Error(e.error||`Error ${res.status}`);}
    const data=await res.json();
    renderReport(data.report,scores,total,tier,pillarData);
    document.getElementById('report-email').textContent=fd.email;
    showStep(10);
  }catch(err){
    clearInterval(genTimer);
    document.getElementById('err-msg').textContent=err.message||'Report generation failed. Please try again.';
    showStep(11);
  }
}

function retrySubmit(){showStep(9);doSubmit();}

const pillarColors={foundation:'#378ADD',ai:'#7F77DD',leadflow:'#1D9E75',followup:'#BA7517',visibility:'#D85A30'};
const tierColors={Critical:'#A32D2D',Developing:'#854F0B',Progressing:'#3B6D11',Advanced:'#0F6E56'};

function renderReport(r,scores,total,tier,pillarData){
  const tc=tierColors[tier.l]||'#1D9E75';
  let html=`
  <div class="rsec">
    <div class="rsl">SmartShift Ai — SARCi Assessment Report</div>
    <div class="rst">Your Roadmap, ${fd.name}</div>
    <div class="rsb"><p>${r.opening}</p></div>
  </div>
  <div class="rsec">
    <div class="rsl">Your SARCi Score</div>
    <div class="rst">Where You Stand</div>
    <div class="score-disp">
      <div class="score-big" style="color:${tc};">${total}</div>
      <div style="flex:1;">
        <div style="font-size:16px;font-weight:500;color:${tc};margin-bottom:4px;">${tier.l}</div>
        <div style="font-size:13px;color:#555;line-height:1.5;">${r.score_narrative}</div>
      </div>
    </div>
    <div class="pc-grid">
      ${pillarData.slice().reverse().map(p=>{const tag=getPT(p.score,p.max);return`<div class="pc ${tag.cc}"><div class="pcn">${p.name}</div><div><span class="pcs">${p.score.toFixed(1)}</span><span class="pcm"> / ${p.max}</span></div><div class="pcbw"><div class="pcbf" style="width:${Math.min(100,(p.score/p.max)*100)}%;background:${pillarColors[p.key]};"></div></div></div>`;}).join('')}
    </div>
  </div>
  <div class="rsec">
    <div class="rsl">Pillar Breakdown</div>
    <div class="rst">What Your Score Tells Us</div>
    <div class="rsb">
      <p><strong>Foundation:</strong> ${r.pillar_narratives.foundation}</p>
      <p><strong>AI Readiness:</strong> ${r.pillar_narratives.ai_readiness}</p>
      <p><strong>Lead Flow:</strong> ${r.pillar_narratives.lead_flow}</p>
      <p><strong>Follow-Up:</strong> ${r.pillar_narratives.follow_up}</p>
      <p><strong>Visibility:</strong> ${r.pillar_narratives.visibility}</p>
    </div>
  </div>
  <div class="rsec">
    <div class="rsl">Priority Gaps</div>
    <div class="rst">Where to Focus First</div>
    <div class="rsb">
      <p><strong>${r.priority_gap_1.pillar}</strong></p>
      <p>${r.priority_gap_1.diagnosis}</p>
      <p>${r.priority_gap_1.leverage}</p>
      <p style="margin-top:1rem;"><strong>${r.priority_gap_2.pillar}</strong></p>
      <p>${r.priority_gap_2.diagnosis}</p>
      <p>${r.priority_gap_2.leverage}</p>
    </div>
  </div>
  <div class="rsec">
    <div class="rsl">Your 30-Day Playbook</div>
    <div class="rst">What to Do Next</div>
    ${(r.playbook||[]).map(s=>`<div class="pstep"><div class="psn">${s.step}</div><div class="psc"><div class="pst">${s.title}</div><div class="psb"><strong>What:</strong> ${s.what}<br><strong>Why it matters:</strong> ${s.why}<br><strong>First move:</strong> ${s.first_move}</div></div></div>`).join('')}
  </div>
  <div class="rsec">
    <div class="rsl">AI Opportunities</div>
    <div class="rst">Where AI Can Help You Right Now</div>
    ${(r.ai_opportunities||[]).map(a=>`<div class="ai-card"><div class="ai-tool">${a.tool}</div><div class="ai-body">${a.what} ${a.why_them} ${a.start}</div></div>`).join('')}
  </div>
  <div class="rsec">
    <div class="rsl">Your Next Move</div>
    <div class="rst">Where You Stand & What's Next</div>
    <div class="rsb"><p>${r.closing}</p></div>
  </div>
  ${fd.guidance?`<div class="rsec"><div class="rsl">Working With Your Current Guidance</div><div class="rst">Aligned With Your Advisor</div><div class="rsb"><p>Your SmartShift Ai playbook has been built to complement the guidance you are already receiving. Where your current advisor's recommendations align with your priority areas, the playbook steps reinforce — not duplicate — that work.</p></div></div>`:''}`;
  document.getElementById('report-content').innerHTML=html;
}

document.querySelectorAll('.ro').forEach(o=>{
  o.addEventListener('click',function(){
    const r=this.querySelector('input');
    document.querySelectorAll(`input[name="${r.name}"]`).forEach(x=>x.closest('.ro').classList.remove('sel'));
    this.classList.add('sel');r.checked=true;sc();
  });
});
document.querySelectorAll('.co').forEach(o=>{
  o.addEventListener('click',function(){
    const cb=this.querySelector('input');cb.checked=!cb.checked;this.classList.toggle('sel',cb.checked);sc();
  });
});
</script>
</body>
</html>
