    const role = sessionStorage.getItem('userRole');
    if (role !== 'Regulatory Authority') {
        document.getElementById('content').innerHTML = `<div class="denied"><h2>⛔ Regulatory Clearance Required</h2><p>This command center is for Regulatory Authority only.</p><a href="index.html">Back</a></div>`;
    } else {
        document.getElementById('content').innerHTML = `
        <div class="command-grid">
            <div class="kpi-card"><div class="big-number">187</div>Active Projects</div>
            <div class="kpi-card"><div class="big-number">$14.2B</div>Monitored Funds</div>
            <div class="kpi-card"><div class="big-number">32</div>Active Anomalies</div>
            <div class="kpi-card"><div class="big-number">68%</div>Transparency Index</div>
        </div>
        <div class="anomaly-list"><h3>⚠️ Flagged Projects</h3>
        <table><tr><th>Project</th><th>Institution</th><th>Risk Score</th><th>Action</th></tr>
        <tr><td>Western Dam Expansion</td><td>Ministry of Water</td><td style="color:#F87171;">HIGH (94)</td><td>🔍 Suspend funds review</td></tr>
        <tr><td>Urban Rail Phase 2</td><td>National Transit Auth</td><td>MED (67)</td><td>📋 AI audit scheduled</td></tr>
        </table>
        <div style="margin-top:1rem;">National indicators: Procurement integrity 74% · Delivery lag 6.2 months</div>
        </div>`;
    }