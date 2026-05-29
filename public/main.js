// ── MODAL CONTENT ──
const legalContent = {
  privacy: `
    <h2>Privacy Policy</h2>
    <p>Last updated: ${new Date().getFullYear()}</p>
    <p>Welcome to DebtCalc. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.</p>
    
    <h3>1. Information We Collect</h3>
    <p>We do not collect any personal data when you use our calculators. All calculations are performed entirely in your browser (client-side), and any inputs you provide are not sent to or stored on our servers. We use basic analytics and advertising cookies strictly in accordance with Google AdSense terms.</p>
    
    <h3>2. Cookies and Web Beacons</h3>
    <p>We use cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.</p>
    <ul>
      <li><strong>Google AdSense:</strong> Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
      <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
      <li>Users may opt-out of personalized advertising by visiting Google's <a href="https://myadcenter.google.com/" target="_blank">Ads Settings</a>.</li>
    </ul>

    <h3>3. External Links</h3>
    <p>Our website may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms of every site you visit.</p>
  `,
  terms: `
    <h2>Terms of Use</h2>
    <p>Last updated: ${new Date().getFullYear()}</p>
    <p>By accessing and using DebtCalc, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
    
    <h3>1. Use of Calculators</h3>
    <p>The calculators provided on this website are for illustrative and informational purposes only. The results are estimates and should not be considered financial advice. You should always consult with a qualified financial advisor, bank, or mortgage broker before making any financial decisions.</p>

    <h3>2. Disclaimer of Warranties</h3>
    <p>The site and its original content, features, and functionality are owned by DebtCalc and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. We provide this site on an "as is" and "as available" basis without any warranty or condition, express, implied, or statutory.</p>

    <h3>3. Limitation of Liability</h3>
    <p>In no event shall DebtCalc, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
  `,
  contact: `
    <h2>Contact Us</h2>
    <p>If you have any questions, suggestions, or concerns about DebtCalc, we'd love to hear from you.</p>
    <p>Please note that we do not provide personal financial advice. For specific questions regarding your own financial situation, loan rates, or mortgages, please contact a licensed financial institution or advisor.</p>
    
    <h3>Get in Touch</h3>
    <ul>
      <li><strong>Email:</strong> support@debtcalc.online</li>
      <li><strong>Support Hours:</strong> Monday - Friday, 9am - 5pm (EST)</li>
    </ul>
    
    <p>If you're writing regarding an error with one of the calculators, please include the values you entered so we can reproduce and fix the issue.</p>
  `,
  about: `
    <h2>About Us</h2>
    <p>Welcome to <strong>DebtCalc</strong> — your trusted source for free, instant, and accurate financial calculators.</p>
    
    <h3>Our Mission</h3>
    <p>We built DebtCalc because we believe everyone should have access to transparent, easy-to-understand financial tools. Whether you're buying your first home, financing a car, or paying off student debt, understanding your financial commitments is the first step toward financial freedom.</p>
    
    <h3>Why Choose Us?</h3>
    <ul>
      <li><strong>100% Free:</strong> We never charge for access to our calculators.</li>
      <li><strong>No Signups:</strong> You don't need an account or email to use our tools.</li>
      <li><strong>Privacy First:</strong> Your calculations happen in your browser. We don't save your loan inputs or personal financial data.</li>
    </ul>
    
    <p>Thank you for using DebtCalc. We hope our tools help you make confident financial decisions!</p>
  `
};

function openModal(type) {
  event.preventDefault();
  const content = legalContent[type];
  if (content) {
    document.getElementById('legal-modal-body').innerHTML = content;
    document.getElementById('legal-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeModal(e) {
  if (e) e.preventDefault();
  document.getElementById('legal-modal-overlay').classList.remove('open');
  document.body.style.overflow = 'auto'; // Restore background scrolling
}

// ── STATE ──
let currency = 'USD';
let donutCharts = {};
let barCharts = {};
let calcData = {};
let viewMode = { mortgage:'yearly', personal:'yearly', car:'yearly', student:'yearly' };

const syms = { USD:'$', GBP:'£', EUR:'€', CAD:'CA$', AUD:'A$' };
const tabIds = ['mortgage','personal','car','student','compare'];

// ── CURRENCY ──
function updateCurrency() {
  currency = document.getElementById('globalCurrency').value;
  const sym = syms[currency];
  document.querySelectorAll('.curr-sym').forEach(el => el.textContent = sym);
}

// ── TABS ──
function switchTab(name, btn) {
  tabIds.forEach(id => {
    document.getElementById('tab-' + id).style.display = id === name ? 'block' : 'none';
  });
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

// ── SLIDERS ──
function sync(inId, slId) {
  document.getElementById(slId).value = document.getElementById(inId).value;
}
function syncR(slId, inId) {
  document.getElementById(inId).value = document.getElementById(slId).value;
}

// ── FORMAT ──
function fmt(n) {
  const sym = syms[currency] || '$';
  return sym + Math.round(n).toLocaleString('en-US');
}
function fmtPct(n) { return Math.round(n) + '%'; }

// ── AMORT CALC ──
function amortize(principal, annualRate, months, extraMonthly = 0) {
  const r = annualRate / 100 / 12;
  let payment;
  if (r === 0) payment = principal / months;
  else payment = principal * (r * Math.pow(1+r, months)) / (Math.pow(1+r, months) - 1);

  let balance = principal;
  const rows = [];
  let totalPaid = 0, totalInterest = 0, actualMonths = 0;

  for (let m = 1; m <= months; m++) {
    const intPart = balance * r;
    let prinPart = payment - intPart + (extraMonthly || 0);
    if (prinPart > balance) prinPart = balance;
    balance = Math.max(balance - prinPart, 0);
    totalInterest += intPart;
    totalPaid += intPart + prinPart;
    actualMonths = m;
    rows.push({ month: m, principal: prinPart, interest: intPart, balance });
    if (balance <= 0) break;
  }

  return { payment, totalPaid, totalInterest, rows, actualMonths };
}

// ── MAIN CALCULATE ──
function calculate(type) {
  let principal, annualRate, years, extra = 0;

  if (type === 'mortgage') {
    const price = parseFloat(document.getElementById('m-price').value) || 0;
    const down = parseFloat(document.getElementById('m-down').value) || 0;
    principal = Math.max(price - down, 0);
    annualRate = parseFloat(document.getElementById('m-rate').value) || 0;
    years = parseInt(document.getElementById('m-term').value) || 0;
    extra = parseFloat(document.getElementById('m-extra').value) || 0;
  } else if (type === 'personal') {
    principal = parseFloat(document.getElementById('p-amount').value) || 0;
    annualRate = parseFloat(document.getElementById('p-rate').value) || 0;
    years = parseInt(document.getElementById('p-term').value) || 0;
  } else if (type === 'car') {
    const price = parseFloat(document.getElementById('c-price').value) || 0;
    const down = parseFloat(document.getElementById('c-down').value) || 0;
    principal = Math.max(price - down, 0);
    annualRate = parseFloat(document.getElementById('c-rate').value) || 0;
    years = parseInt(document.getElementById('c-term').value) || 0;
  } else if (type === 'student') {
    principal = parseFloat(document.getElementById('s-amount').value) || 0;
    annualRate = parseFloat(document.getElementById('s-rate').value) || 0;
    years = parseInt(document.getElementById('s-term').value) || 0;
  }

  if (!principal || !annualRate || !years) return;

  const months = years * 12;
  const res = amortize(principal, annualRate, months, extra);

  // Extra payment comparison
  let extraSavings = null;
  if (extra > 0) {
    const noExtra = amortize(principal, annualRate, months, 0);
    const savedInterest = noExtra.totalInterest - res.totalInterest;
    const savedMonths = noExtra.actualMonths - res.actualMonths;
    extraSavings = { savedInterest, savedMonths };
  }

  calcData[type] = { principal, annualRate, years, months, res, extra, extraSavings };

  // Show results
  const resEl = document.getElementById('res-' + type);
  resEl.classList.remove('hidden');
  resEl.classList.add('animate');

  // Stats
  const pctP = Math.round((principal / res.totalPaid) * 100);
  const pctI = 100 - pctP;

  document.getElementById('sg-' + type).innerHTML = `
    <div class="stat primary">
      <div class="stat-label">Monthly Payment</div>
      <div class="stat-value">${fmt(res.payment)}</div>
      <div class="stat-sub">${years} years × 12 months</div>
    </div>
    <div class="stat">
      <div class="stat-label">Loan Principal</div>
      <div class="stat-value green">${fmt(principal)}</div>
      <div class="stat-sub">${pctP}% of total cost</div>
    </div>
    <div class="stat">
      <div class="stat-label">Total Interest</div>
      <div class="stat-value red">${fmt(res.totalInterest)}</div>
      <div class="stat-sub">${pctI}% of total cost</div>
    </div>
    <div class="stat">
      <div class="stat-label">Total Payment</div>
      <div class="stat-value">${fmt(res.totalPaid)}</div>
      <div class="stat-sub">${months} payments total</div>
    </div>
  `;

  // Savings banner
  if (extraSavings) {
    const sav = document.getElementById('sav-' + type);
    if (sav) {
      const yrs = Math.floor(extraSavings.savedMonths / 12);
      const mos = extraSavings.savedMonths % 12;
      sav.innerHTML = `<p>💚 <strong>Extra payment savings:</strong> By paying <strong>${fmt(extra)}/month</strong> extra, you save <strong>${fmt(extraSavings.savedInterest)}</strong> in interest and pay off your loan <strong>${yrs > 0 ? yrs + ' years ' : ''}${mos > 0 ? mos + ' months' : ''} early.</strong></p>`;
      sav.classList.add('show');
    }
  }

  // Progress bars
  document.getElementById('pp-' + type).innerHTML = fmtPct(pctP);
  document.getElementById('pi-' + type).innerHTML = fmtPct(pctI);
  setTimeout(() => {
    document.getElementById('pb-p-' + type).style.width = pctP + '%';
    document.getElementById('pb-i-' + type).style.width = pctI + '%';
  }, 50);

  // Donut chart
  if (donutCharts[type]) donutCharts[type].destroy();
  const dCtx = document.getElementById('donut-' + type).getContext('2d');
  donutCharts[type] = new Chart(dCtx, {
    type: 'doughnut',
    data: {
      labels: ['Principal', 'Interest'],
      datasets: [{ data: [Math.round(principal), Math.round(res.totalInterest)], backgroundColor: ['#1e8449', '#c0392b'], borderWidth: 2, borderColor: '#fff' }]
    },
    options: { responsive: true, maintainAspectRatio: true, cutout: '68%', plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ' ' + fmt(ctx.raw) } } } }
  });

  // Legend
  document.getElementById('leg-' + type).innerHTML = `
    <div class="legend-item"><div class="legend-dot" style="background:#1e8449"></div><span class="legend-label">Principal</span><span class="legend-val">${fmt(principal)}</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:#c0392b"></div><span class="legend-label">Interest</span><span class="legend-val">${fmt(res.totalInterest)}</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:var(--gold)"></div><span class="legend-label">Total</span><span class="legend-val">${fmt(res.totalPaid)}</span></div>
  `;

  // Bar chart (mortgage only)
  if (type === 'mortgage') {
    const yearlyBalances = [];
    const yearLabels = [];
    let bal = principal;
    const r = annualRate / 100 / 12;
    for (let y = 1; y <= years; y++) {
      for (let m = 0; m < 12; m++) {
        const intP = bal * r;
        const prinP = res.payment - intP + extra;
        bal = Math.max(bal - prinP, 0);
        if (bal <= 0) break;
      }
      yearlyBalances.push(Math.round(Math.max(bal, 0)));
      yearLabels.push('Yr ' + y);
      if (bal <= 0) break;
    }
    if (barCharts[type]) barCharts[type].destroy();
    const bCtx = document.getElementById('bar-' + type).getContext('2d');
    barCharts[type] = new Chart(bCtx, {
      type: 'bar',
      data: {
        labels: yearLabels,
        datasets: [{ label: 'Remaining Balance', data: yearlyBalances, backgroundColor: '#1a3a2a', borderRadius: 4 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ' ' + fmt(ctx.raw) } } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 }, maxTicksLimit: 15, autoSkip: true } },
          y: { grid: { color: '#e2e0d8' }, ticks: { callback: v => syms[currency] + (v >= 1000 ? Math.round(v/1000) + 'k' : v), font: { size: 10 } } }
        }
      }
    });
  }

  // Amort table
  renderAmort(type);

  // Quick facts sidebar
  document.getElementById('qf-monthly').textContent = fmt(res.payment);
  document.getElementById('qf-interest').textContent = fmt(res.totalInterest);
  document.getElementById('qf-total').textContent = fmt(res.totalPaid);
  document.getElementById('qf-pct').textContent = fmtPct(pctI);

  // Save to localStorage
  try {
    localStorage.setItem('lw_last', JSON.stringify({ type, principal, annualRate, years, extra, currency }));
  } catch(e) {}

  resEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── AMORT TABLE ──
function renderAmort(type) {
  const d = calcData[type];
  if (!d) return;
  const mode = viewMode[type];
  const tbody = document.getElementById('at-' + type);

  if (mode === 'monthly') {
    let html = '';
    d.res.rows.forEach(r => {
      html += `<tr>
        <td>Mo ${r.month}</td>
        <td class="td-p">${fmt(r.principal)}</td>
        <td class="td-i">${fmt(r.interest)}</td>
        <td class="td-b">${fmt(r.balance)}</td>
      </tr>`;
    });
    tbody.innerHTML = html;
  } else {
    // Group by year
    let html = '';
    for (let y = 1; y <= d.years; y++) {
      const startIdx = (y - 1) * 12;
      const endIdx = Math.min(y * 12, d.res.rows.length);
      if (startIdx >= d.res.rows.length) break;
      const yearRows = d.res.rows.slice(startIdx, endIdx);
      const yPrincipal = yearRows.reduce((s, r) => s + r.principal, 0);
      const yInterest = yearRows.reduce((s, r) => s + r.interest, 0);
      const yBalance = yearRows[yearRows.length - 1].balance;
      html += `<tr>
        <td>Year ${y}</td>
        <td class="td-p">${fmt(yPrincipal)}</td>
        <td class="td-i">${fmt(yInterest)}</td>
        <td class="td-b">${fmt(yBalance)}</td>
      </tr>`;
    }
    tbody.innerHTML = html;
  }
}

function setView(type, mode, btn) {
  viewMode[type] = mode;
  btn.closest('.view-toggle').querySelectorAll('.vt-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAmort(type);
}

// ── COMPARE ──
function compareLoans() {
  const aAmt = parseFloat(document.getElementById('cmp-a-amt').value) || 0;
  const aRate = parseFloat(document.getElementById('cmp-a-rate').value) || 0;
  const aTerm = parseInt(document.getElementById('cmp-a-term').value) || 0;
  const bAmt = parseFloat(document.getElementById('cmp-b-amt').value) || 0;
  const bRate = parseFloat(document.getElementById('cmp-b-rate').value) || 0;
  const bTerm = parseInt(document.getElementById('cmp-b-term').value) || 0;

  if (!aAmt || !aRate || !aTerm || !bAmt || !bRate || !bTerm) return;

  const resA = amortize(aAmt, aRate, aTerm * 12);
  const resB = amortize(bAmt, bRate, bTerm * 12);

  const aWins = resA.totalPaid < resB.totalPaid;

  document.getElementById('cc1').className = 'compare-card' + (aWins ? ' winner' : '');
  document.getElementById('cc2').className = 'compare-card' + (!aWins ? ' winner' : '');

  const diff = Math.abs(resA.totalPaid - resB.totalPaid);
  const monthlyDiff = Math.abs(resA.payment - resB.payment);

  const res = document.getElementById('compare-result');
  res.className = 'compare-result show';
  res.innerHTML = `
    <table style="width:100%;font-size:13px;border-collapse:collapse;">
      <thead><tr>
        <th style="padding:8px;text-align:left;background:var(--surface2);border-radius:6px 0 0 0;"></th>
        <th style="padding:8px;text-align:center;background:var(--surface2);">Loan A ${aWins ? '🏆' : ''}</th>
        <th style="padding:8px;text-align:center;background:var(--surface2);border-radius:0 6px 0 0;">Loan B ${!aWins ? '🏆' : ''}</th>
      </tr></thead>
      <tbody>
        <tr><td style="padding:8px;color:var(--muted);">Monthly Payment</td><td style="padding:8px;text-align:center;font-weight:600;">${fmt(resA.payment)}</td><td style="padding:8px;text-align:center;font-weight:600;">${fmt(resB.payment)}</td></tr>
        <tr style="background:var(--surface2);"><td style="padding:8px;color:var(--muted);">Total Interest</td><td style="padding:8px;text-align:center;color:var(--red);font-weight:600;">${fmt(resA.totalInterest)}</td><td style="padding:8px;text-align:center;color:var(--red);font-weight:600;">${fmt(resB.totalInterest)}</td></tr>
        <tr><td style="padding:8px;color:var(--muted);">Total Cost</td><td style="padding:8px;text-align:center;font-weight:700;">${fmt(resA.totalPaid)}</td><td style="padding:8px;text-align:center;font-weight:700;">${fmt(resB.totalPaid)}</td></tr>
      </tbody>
    </table>
    <p style="margin-top:14px;font-size:13px;color:var(--green);font-weight:600;">
      ✅ Loan ${aWins ? 'A' : 'B'} saves you ${fmt(diff)} in total (${fmt(monthlyDiff)}/month ${resA.payment < resB.payment === aWins ? 'less' : 'more'}).
    </p>
  `;
}

// ── COPY RESULTS ──
function copyResults(type) {
  const d = calcData[type];
  if (!d) return;
  const text = `Loan Calculator Results
Principal: ${fmt(d.principal)}
Monthly Payment: ${fmt(d.res.payment)}
Total Interest: ${fmt(d.res.totalInterest)}
Total Payment: ${fmt(d.res.totalPaid)}
Term: ${d.years} years`;
  navigator.clipboard.writeText(text).then(() => alert('Results copied to clipboard!'));
}

// ── FAQ ──
function toggleFaq(btn) {
  const ans = btn.nextElementSibling;
  const isOpen = ans.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));
  if (!isOpen) { ans.classList.add('open'); btn.classList.add('open'); }
}

// ── RESTORE LAST CALC ──
try {
  const last = JSON.parse(localStorage.getItem('lw_last'));
  if (last) {
    currency = last.currency || 'USD';
    document.getElementById('globalCurrency').value = currency;
    updateCurrency();
  }
} catch(e) {}