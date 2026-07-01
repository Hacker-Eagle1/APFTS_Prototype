    const role = sessionStorage.getItem('userRole');
    if (role !== 'Project Institution') {
        document.getElementById('content').innerHTML = `<div class="denied"><h2>⛔ Access Denied</h2><p>This page is only for Project Institutions.</p><a href="index.html">Return to Dashboard</a></div>`;
    } else {
        document.getElementById('content').innerHTML = `
        <div class="main-grid">
            <div class="form-card">
                <h2>📐 New Infrastructure Proposal</h2>
                <form onsubmit="alert('Project submitted for AI cross-validation.'); return false;">
                    <div class="form-row"><div><label>Project name</label><input placeholder="Western Dam Expansion"></div>
                    <div><label>Contractor</label><input placeholder="Shimizu-Bouygues JV"></div></div>
                    <div class="form-row"><div><label>Budget (USD)</label><input type="number" placeholder="45,000,000"></div>
                    <div><label>GPS coord</label><input placeholder="Lat: -12.345, Lon: 28.567"></div></div>
                    <div class="full"><label>Milestone plan</label><textarea rows="2">Phase1: Site prep (Q1 2025) 20% funds; Phase2: Foundation (Q3) 35%...</textarea></div>
                    <div class="form-row"><div><label>Timeline (months)</label><input value="24"></div>
                    <div><label>Progress schedule</label><select><option>Monthly reporting</option></select></div></div>
                    <div class="full"><label>Upload documents</label><input type="file" multiple></div>
                    <button>Submit to AI Monitoring →</button>
                </form>
            </div>
            <div class="ai-preview">
                <h3>🧠 AI Pre‑analysis</h3>
                <div>Risk projection: <span style="background:#FEE2E2; padding:2px 8px; border-radius:20px;">Medium-Low</span></div>
                <div class="progress-bar-bg" style="background:#E2E8F0; height:6px; margin:8px 0;"><div style="width:28%; background:#E68A2E; height:6px;"></div></div>
                <div>🔍 Satellite baseline: Not yet verified.</div>
                <div style="margin-top:0.8rem;">💡 Recommendation: Add quarterly fund release gates.</div>
            </div>
        </div>`;
    }