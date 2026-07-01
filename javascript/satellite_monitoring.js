    const role = sessionStorage.getItem('userRole');
    const allowed = ['Regulatory Authority', 'Financing Institution'];
    if (!role || !allowed.includes(role)) {
        document.getElementById('content').innerHTML = `<div class="denied"><h2>⛔ Classified Intelligence</h2><p>Satellite monitoring is restricted to authorized oversight bodies.</p><a href="index.html">Return</a></div>`;
    } else {
        document.getElementById('content').innerHTML = `
        <div class="sat-main">
            <div class="img-panel"><h3>Before / After Imagery</h3><div class="comparison"><div class="sat-img">📸 Mar 2024 (Pre-construction)</div><div class="sat-img">🛰️ Feb 2026 (Current)</div></div>
            <div><label>Timeline slider</label><input type="range" min="0" max="100" value="42"><span>42%</span></div>
            <div>AI analysis: Progress 42% vs expected 58% → Delay flagged.</div></div>
            <div><div class="img-panel"><h3>Geospatial Summary</h3><div>Northern Corridor | Coord: -6.234, 35.789<br>Completion: 37% (AI derived)<br>Terrain change: moderate deviation</div>
            <button style="background:#1E6F9F; border:none; padding:0.5rem 1rem; border-radius:30px; margin-top:1rem;">Run Change Detection</button></div></div>
        </div>`;
    }