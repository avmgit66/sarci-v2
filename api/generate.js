export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const fd = req.body;

  if (!fd || !fd.name || !fd.email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const pillarData = [
    { name: 'Foundation', key: 'foundation', score: fd.scores.foundation, max: 25 },
    { name: 'AI Readiness', key: 'ai', score: fd.scores.ai, max: 25 },
    { name: 'Lead Flow', key: 'leadflow', score: fd.scores.leadflow, max: 16.7 },
    { name: 'Follow-Up', key: 'followup', score: fd.scores.followup, max: 16.7 },
    { name: 'Visibility', key: 'visibility', score: fd.scores.visibility, max: 16.6 }
  ].sort((a, b) => (a.score / a.max) - (b.score / b.max));

  const top2 = pillarData.slice(0, 2).map(p => p.name);
  const topStr = pillarData[pillarData.length - 1].name;

  function getPT(s, m) {
    const p = s / m;
    if (p < 0.4) return 'Gap';
    if (p < 0.7) return 'Improve';
    return 'Strength';
  }

  const prompt = `You are the SmartShift Ai Roadmap Coach (SARCi). Write a personalized business assessment report for ${fd.name} who runs ${fd.business}, a ${fd.industry} business in ${fd.location}.

SCORES: Total ${fd.total}/100 (${fd.tier}) | Foundation: ${fd.scores.foundation.toFixed(1)}/25 (${getPT(fd.scores.foundation, 25)}) | AI Readiness: ${fd.scores.ai.toFixed(1)}/25 (${getPT(fd.scores.ai, 25)}) | Lead Flow: ${fd.scores.leadflow.toFixed(1)}/16.7 (${getPT(fd.scores.leadflow, 16.7)}) | Follow-Up: ${fd.scores.followup.toFixed(1)}/16.7 (${getPT(fd.scores.followup, 16.7)}) | Visibility: ${fd.scores.visibility.toFixed(1)}/16.6 (${getPT(fd.scores.visibility, 16.6)})
Top 2 Priority Gaps: ${top2.join(' and ')} | Biggest Strength: ${topStr}

KEY ANSWERS: Service: ${fd.service} | Team: ${fd.team} | Price: ${fd.priceLabel} | Revenue: ${fd.revenueLabel} | Expenses: ${fd.expensesLabel} | Runway: ${fd.runwayLabel} | Leads/month: ${fd.leadsLabel} | Challenge: ${fd.challenge} | Channels active: ${fd.channelCount} | Posting: ${fd.frequencyLabel} | Offer clarity: ${fd.clarityLabel} | Best buyer: ${fd.icp} | Lead tracking: ${fd.trackingLabel} | Response speed: ${fd.speedLabel} | Lead magnet: ${fd.magnetLabel} | After not yet: ${fd.nurtureLabel} | Ops maturity: ${fd.opsLabel} | Bottleneck: ${fd.bottleneck} | AI tools willing to try: ${fd.aitools?.join(', ') || 'none'} | Time: ${fd.timeLabel} | Budget: ${fd.budgetLabel} | Will NOT do: ${fd.wont} | Enjoys: ${fd.enjoy} | Detail level: ${fd.detail}${fd.guidance ? ` | Advisor guidance: ${fd.guidance}` : ''}

VOICE: Warm but direct. Supportive coach meets trusted consultant. Specific — reference their actual answers always. Never generic. Peer-level tone. Never say "Great job!" Never start sentences with "I".

Return ONLY valid JSON (no markdown, no backticks, no preamble):
{"opening":"3-4 sentence personalized opener addressing ${fd.name} by name. Acknowledge their industry, stage, biggest challenge. Frame report as practical tool.","score_narrative":"2-3 sentences interpreting ${fd.total}/100 for someone at their stage in ${fd.industry}. Starting point not judgment.","pillar_narratives":{"foundation":"One paragraph referencing their actual revenue, runway, offer clarity, ICP.","ai_readiness":"One paragraph referencing their ops maturity, bottleneck, budget, time, tool openness.","lead_flow":"One paragraph referencing lead volume, tracking, response speed, lead magnet.","follow_up":"One paragraph referencing nurture system and response speed.","visibility":"One paragraph referencing channel count, posting frequency, offer clarity."},"priority_gap_1":{"pillar":"${top2[0]}","diagnosis":"What this gap is and what it costs them. Reference their actual answers.","leverage":"Why focus here first. What changes when this closes."},"priority_gap_2":{"pillar":"${top2[1]}","diagnosis":"What this gap is and what it costs them.","leverage":"Why focus here second."},"playbook":[{"step":1,"title":"Action title","what":"One sentence on what to do","why":"One sentence on business impact","first_move":"Single smallest action they can take today"},{"step":2,"title":"Action title","what":"One sentence","why":"One sentence","first_move":"Smallest action today"},{"step":3,"title":"Action title","what":"One sentence","why":"One sentence","first_move":"Smallest action today"},{"step":4,"title":"Action title","what":"One sentence","why":"One sentence","first_move":"Smallest action today"}],"ai_opportunities":[{"tool":"Tool name","what":"One sentence on what it does","why_them":"One sentence connecting to their specific bottleneck","start":"Simplest free entry point"},{"tool":"Tool name","what":"One sentence","why_them":"One sentence","start":"One sentence"},{"tool":"Tool name","what":"One sentence","why_them":"One sentence","start":"One sentence"}],"closing":"3-4 sentences. Name their biggest strength (${topStr}). Connect to potential. Give one clear action from step 1. SmartShift Ai brand voice — forward-looking, grounded, confident.","advisor_talking_points":["Talking point 1 for advisor session with ${fd.name}","Talking point 2","Talking point 3","Talking point 4","Talking point 5"],"advisor_red_flags":["Watch item from their answers","Second if applicable"],"advisor_summary":"2-3 sentence advisor brief: who this person is, where they are, what the session should focus on."}

Rules: No playbook step can involve "${fd.wont}". At least one step must leverage "${fd.enjoy}". Steps must fit ${fd.timeLabel} weekly and ${fd.budgetLabel} budget.${fd.guidance ? ` Align playbook with advisor guidance: "${fd.guidance}"` : ''}`;

  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 4000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!anthropicRes.ok) {
      const err = await anthropicRes.json().catch(() => ({}));
      throw new Error(err.error?.message || `Anthropic API error ${anthropicRes.status}`);
    }

    const anthropicData = await anthropicRes.json();
    const rawText = anthropicData.content?.filter(c => c.type === 'text').map(c => c.text).join('') || '';

    let report;
    try {
      const clean = rawText.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '').trim();
      report = JSON.parse(clean);
    } catch (e) {
      const match = rawText.match(/\{[\s\S]*\}/);
      if (match) report = JSON.parse(match[0]);
      else throw new Error('Could not parse report from API response');
    }

    // Send advisor email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      const advisorEmailBody = buildAdvisorEmail(fd, report, pillarData, top2, topStr);
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'SARCi <sarci@smartshiftai.com>',
          to: [fd.advisorEmail || 'dbtech.avm@gmail.com'],
          subject: `New SARCi Submission: ${fd.name} — ${fd.total}/100 (${fd.tier})`,
          html: advisorEmailBody
        })
      }).catch(err => console.error('Advisor email error:', err));

      // Send client email
      const clientEmailBody = buildClientEmail(fd, report, pillarData);
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'SmartShift Ai <sarci@smartshiftai.com>',
          to: [fd.email],
          subject: `Your SARCi Roadmap is ready, ${fd.name}`,
          html: clientEmailBody
        })
      }).catch(err => console.error('Client email error:', err));
    }

    return res.status(200).json({ report, scores: fd.scores, total: fd.total, tier: fd.tier });

  } catch (err) {
    console.error('Generation error:', err);
    return res.status(500).json({ error: err.message || 'Report generation failed' });
  }
}

function buildAdvisorEmail(fd, report, pillarData, top2, topStr) {
  const tierColors = { Critical: '#A32D2D', Developing: '#854F0B', Progressing: '#3B6D11', Advanced: '#0F6E56' };
  const tc = tierColors[fd.tier] || '#1D9E75';
  return `<!DOCTYPE html><html><body style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#333;">
  <div style="background:#f8f8f6;border-radius:12px;padding:24px;margin-bottom:20px;">
    <h2 style="font-size:22px;margin:0 0 4px;">SmartShift Ai — Pre-Session Brief</h2>
    <p style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin:0;">Advisor Only · SARCi v2</p>
  </div>
  <div style="background:#fff;border:1px solid #eee;border-radius:10px;padding:20px;margin-bottom:16px;">
    <h3 style="margin:0 0 8px;font-size:14px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Client</h3>
    <p style="margin:0;font-size:16px;font-weight:600;">${fd.name}</p>
    <p style="margin:4px 0 0;font-size:13px;color:#666;">${fd.business} · ${fd.industry} · ${fd.location}</p>
    <p style="margin:4px 0 0;font-size:13px;color:#666;">${fd.email}</p>
  </div>
  <div style="background:#fff;border:1px solid #eee;border-radius:10px;padding:20px;margin-bottom:16px;">
    <h3 style="margin:0 0 12px;font-size:14px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Score Summary</h3>
    <div style="font-size:32px;font-weight:700;color:${tc};">${fd.total}/100 <span style="font-size:16px;">${fd.tier}</span></div>
    <table style="width:100%;margin-top:12px;border-collapse:collapse;">
      ${pillarData.map(p => {
        const pct = Math.round((p.score / p.max) * 100);
        const status = pct < 40 ? 'Gap' : pct < 70 ? 'Improve' : 'Strength';
        const sc = pct < 40 ? '#A32D2D' : pct < 70 ? '#854F0B' : '#0F6E56';
        return `<tr><td style="padding:4px 0;font-size:13px;">${p.name}</td><td style="font-size:13px;font-weight:600;">${p.score.toFixed(1)}/${p.max}</td><td style="font-size:12px;color:${sc};">${status}</td></tr>`;
      }).join('')}
    </table>
  </div>
  <div style="background:#FCEBEB;border-radius:10px;padding:20px;margin-bottom:16px;">
    <h3 style="margin:0 0 10px;font-size:14px;color:#A32D2D;text-transform:uppercase;letter-spacing:0.5px;">Top 2 Priority Gaps</h3>
    ${top2.map(g => `<div style="padding:6px 0;font-size:13px;color:#A32D2D;font-weight:500;">• ${g}</div>`).join('')}
  </div>
  <div style="background:#fff;border:1px solid #eee;border-radius:10px;padding:20px;margin-bottom:16px;">
    <h3 style="margin:0 0 10px;font-size:14px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Advisor Summary</h3>
    <p style="font-size:13px;line-height:1.6;margin:0;">${report.advisor_summary}</p>
  </div>
  <div style="background:#fff;border:1px solid #eee;border-radius:10px;padding:20px;margin-bottom:16px;">
    <h3 style="margin:0 0 10px;font-size:14px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Suggested Talking Points</h3>
    ${(report.advisor_talking_points || []).map(t => `<div style="padding:5px 0;font-size:13px;line-height:1.5;border-bottom:1px solid #f0f0f0;">• ${t}</div>`).join('')}
  </div>
  ${(report.advisor_red_flags || []).length ? `<div style="background:#FAEEDA;border-radius:10px;padding:20px;margin-bottom:16px;"><h3 style="margin:0 0 10px;font-size:14px;color:#854F0B;text-transform:uppercase;letter-spacing:0.5px;">Watch Items</h3>${report.advisor_red_flags.map(f => `<div style="padding:5px 0;font-size:13px;line-height:1.5;">⚠ ${f}</div>`).join('')}</div>` : ''}
  <p style="font-size:11px;color:#aaa;text-align:center;margin-top:24px;">SmartShift Ai · SARCi v2 · Advisor Brief</p>
  </body></html>`;
}

function buildClientEmail(fd, report, pillarData) {
  const tierColors = { Critical: '#A32D2D', Developing: '#854F0B', Progressing: '#3B6D11', Advanced: '#0F6E56' };
  const tc = tierColors[fd.tier] || '#1D9E75';
  return `<!DOCTYPE html><html><body style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#333;">
  <div style="text-align:center;padding:24px 0 20px;border-bottom:1px solid #eee;margin-bottom:24px;">
    <h1 style="font-size:24px;margin:0 0 4px;">SmartShift <span style="color:#1D9E75;">Ai</span></h1>
    <p style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;margin:0;">SARCi — Your Personalized Roadmap</p>
  </div>
  <p style="font-size:14px;line-height:1.7;">${report.opening}</p>
  <div style="background:#f8f8f6;border-radius:10px;padding:20px;margin:20px 0;text-align:center;">
    <div style="font-size:48px;font-weight:700;color:${tc};">${fd.total}</div>
    <div style="font-size:16px;font-weight:600;color:${tc};">${fd.tier}</div>
    <p style="font-size:13px;color:#666;margin:8px 0 0;">${report.score_narrative}</p>
  </div>
  <h2 style="font-size:18px;margin:24px 0 12px;">Your 30-Day Playbook</h2>
  ${(report.playbook || []).map(s => `<div style="background:#f8f8f6;border-radius:8px;padding:14px;margin-bottom:10px;"><div style="display:flex;align-items:flex-start;gap:10px;"><div style="background:#1D9E75;color:white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;flex-shrink:0;">${s.step}</div><div><strong>${s.title}</strong><br><span style="font-size:13px;color:#555;">${s.what}</span><br><em style="font-size:12px;color:#888;">First move: ${s.first_move}</em></div></div></div>`).join('')}
  <div style="background:#E1F5EE;border-radius:10px;padding:16px;margin:20px 0;">
    <p style="font-size:14px;line-height:1.7;margin:0;">${report.closing}</p>
  </div>
  <p style="font-size:12px;color:#aaa;text-align:center;margin-top:24px;border-top:1px solid #eee;padding-top:16px;">This report was generated by SmartShift Ai · SARCi v2<br>Questions? Reply to this email.</p>
  </body></html>`;
}
