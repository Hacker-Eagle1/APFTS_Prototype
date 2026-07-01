 const role = sessionStorage.getItem('userRole');
    const allowed = ['Regulatory Authority', 'Financing Institution'];
    if (!role || !allowed.includes(role)) {
        document.getElementById('content').innerHTML = `<div class="denied"><h2>⛔ Restricted Access</h2><p>This dashboard is for Regulatory & Financing institutions only.</p><a href="index.html">Back</a></div>`;
    } else {
        document.getElementById('content').innerHTML = `
        <div class="grid-ai">
            <div class="risk-card high">
            <h3>⚠️ High Risk Projects</h3>
            <div>• Western Dam (Score 92)</div>
            <div>• Coastal Highway (Score 88)</div>
            <div>🔔 Anomaly: -41% progress</div>
            <button style="background:#1E6F9F; border:none; padding:0.3rem 1rem; border-radius:20px;">Investigate</button></div>
            <div class="risk-card med"><h3>⚠️ Medium Suspicion</h3>
            <div>• Rural Electrification (Score 67)</div>
            <div>• Hospital Wing (Score 59)</div>
            <div>Delay >6mo</div></div>
            <div class="risk-card low">
            <h3>✅ Low Risk</h3>
            <div>• School Nutrition Program</div>
            <div>• Water Sanitation (Score 22)</div></div>
        </div>
        <div class="anomaly-feed"><h4>🚨 AI Anomaly Detection Feed</h4>
            <div class="alert-item" style="border-bottom:1px solid #2C6280; padding:0.5rem 0;">[12:34] AI flagged contract overrun +$4.2M – Regulator notified.</div>
            <div class="alert-item" style="padding:0.5rem 0;">[11:20] Satellite mismatch: 21% progress vs 58% reported.</div>
            <div style="margin-top:0.8rem;"><strong>AI Recommendation:</strong> Increase audit frequency for Eastern Province.</div>
        </div>`;
    }