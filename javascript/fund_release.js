 const role = sessionStorage.getItem('userRole');
    if (role !== 'Financing Institution') {
        document.getElementById('mainContent').innerHTML = `<div class="denied"><h2>⛔ Access Denied</h2><p>Only Financing Institutions can release funds.</p><a href="index.html">Return</a></div>`;
    } else {
        document.getElementById('mainContent').innerHTML = `
        <div class="dashboard">
            <div class="card"><h3>🏗️ Select Project & Release Funds</h3>
                <select style="width:100%; padding:0.6rem; margin:1rem 0;"><option>Northern Corridor Highway – Budget $340M</option><option>Urban Rail Extension – Budget $1.2B</option></select>
                <div>Release phase: <select><option>Tranche 1 (mobilization) 15%</option></select></div>
                <div style="margin-top:1rem;"><label>Release amount (USD)</label><input value="12,500,000" style="width:100%;"></div>
                <div><label>Payment details</label><textarea rows="2">Disburse upon milestone verification</textarea></div>
                <button class="release-btn" onclick="alert('Fund release initiated. AI cross-check in progress.')">Process Transaction →</button>
                <div style="margin-top:1rem;">✅ Cumulative released: $862M</div>
            </div>
            <div class="card"><h3>📊 Progress vs Financing</h3>
                <div>Expected completion: 44%</div><div class="progress"><div style="width:44%; background:#2C7A4D; height:8px;"></div></div>
                <div>Satellite-estimated: 37%</div><div class="progress"><div style="width:37%; background:#E68A2E; height:8px;"></div></div>
                <table style="width:100%; margin-top:1rem;"><tr><th>Project</th><th>Released</th><th>Physical %</th></tr><tr><td>Highway</td><td>$210M</td><td>38%</td></tr></table>
            </div>
        </div>`;
    }