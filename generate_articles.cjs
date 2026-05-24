const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'public', 'articles');
if (!fs.existsSync(articlesDir)) {
  fs.mkdirSync(articlesDir, { recursive: true });
}

const articles = [
  {
    slug: 'how-to-calculate-mortgage-payment',
    title: 'How to Calculate Your Mortgage Monthly Payment',
    description: 'Learn the exact formula for calculating your monthly mortgage payment and how PITI affects your final costs.',
    content: `
      <h2>The Importance of Knowing Your Mortgage Payment</h2>
      <p>Buying a house is likely the biggest financial decision you will ever make. Understanding exactly how much you will pay each month is crucial for budgeting and long-term financial health.</p>

      <h2>The Formula</h2>
      <p>The manual formula to calculate your monthly mortgage payment is: <strong>M = P [ r(1 + r)^n ] / [ (1 + r)^n - 1 ]</strong></p>
      <ul>
        <li><strong>M</strong>: Total monthly payment</li>
        <li><strong>P</strong>: Principal loan amount</li>
        <li><strong>r</strong>: Your monthly interest rate (annual rate divided by 12)</li>
        <li><strong>n</strong>: Total number of payments (months)</li>
      </ul>
      <p>While calculating this manually can be tedious, our <a href="/">free Mortgage Calculator</a> does the math for you instantly.</p>

      <h2>What is PITI?</h2>
      <p>PITI stands for Principal, Interest, Taxes, and Insurance. While the formula above calculates the principal and interest, your actual monthly housing cost will also include property taxes, home insurance, and potentially Private Mortgage Insurance (PMI) or HOA fees.</p>
    `
  },
  {
    slug: 'understanding-amortization-schedules',
    title: 'The Ultimate Guide to Understanding Amortization',
    description: 'What is an amortization schedule? Learn how your loan payments are broken down between interest and principal over time.',
    content: `
      <h2>What is Loan Amortization?</h2>
      <p>Amortization is the process of spreading out a loan into a series of fixed payments over time. Even though your payment remains the same, the way that payment is applied changes every month.</p>

      <h2>Interest vs. Principal</h2>
      <p>In the early years of a mortgage or long-term loan, the majority of your monthly payment goes toward paying off the interest. As time passes, a larger portion of your payment goes toward reducing the principal balance.</p>

      <h2>Why Amortization Schedules Matter</h2>
      <p>An amortization schedule gives you a detailed look at every payment over the life of your loan. By reviewing your schedule, you can see exactly how much you can save in interest by making extra payments toward your principal.</p>
      <p>Use our <a href="/">Amortization Calculator</a> to generate a full schedule for your loan instantly.</p>
    `
  },
  {
    slug: 'pay-off-debt-faster',
    title: '5 Proven Strategies to Pay Off Your Debt Faster',
    description: 'Discover the most effective methods for eliminating debt, including the Debt Snowball, Debt Avalanche, and refinancing strategies.',
    content: `
      <h2>1. The Debt Snowball Method</h2>
      <p>Popularized by financial experts, this method involves paying off your debts from smallest balance to largest, regardless of interest rates. The psychological wins of completely eliminating smaller debts provide motivation to keep going.</p>

      <h2>2. The Debt Avalanche Method</h2>
      <p>This strategy makes the most mathematical sense. You focus on paying off the debt with the highest interest rate first, while making minimum payments on everything else. This saves you the most money in the long run.</p>

      <h2>3. Make Bi-Weekly Payments</h2>
      <p>By splitting your monthly payment in half and paying every two weeks, you end up making 26 half-payments, which equals 13 full payments a year. That extra payment dramatically reduces your timeline and interest.</p>

      <h2>4. Refinance or Consolidate</h2>
      <p>If you have high-interest debt, consider a balance transfer credit card or a debt consolidation loan with a lower interest rate to speed up your payoff process.</p>

      <h2>5. Round Up Your Payments</h2>
      <p>If your car payment is $345, round it up to $400. That extra $55 per month goes straight to the principal, shaving months off your loan.</p>
    `
  }
];

const template = (article) => '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n' +
    '<meta charset="UTF-8">\\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">\\n' +
    '<title>' + article.title + ' - DebtCalc</title>\\n' +
    '<meta name="description" content="' + article.description + '">\\n' +
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">\\n' +
    '<link rel="canonical" href="https://debtcalc.online/articles/' + article.slug + '.html">\\n' +
    '<link rel="preconnect" href="https://fonts.googleapis.com">\\n' +
    '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">\\n' +
    '<style>\\n' +
    '    :root {\\n' +
    '        --bg: #f7f6f3;\\n' +
    '        --surface: #ffffff;\\n' +
    '        --border: #e2e0d8;\\n' +
    '        --accent: #1a3a2a;\\n' +
    '        --text: #2c2b29;\\n' +
    '        --muted: #6b6a67;\\n' +
    '    }\\n' +
    '    body {\\n' +
    '        background-color: var(--bg);\\n' +
    '        color: var(--text);\\n' +
    '        font-family: \\'Outfit\\', sans-serif;\\n' +
    '        margin: 0;\\n' +
    '        padding: 0;\\n' +
    '        line-height: 1.6;\\n' +
    '    }\\n' +
    '    header {\\n' +
    '        background: var(--surface);\\n' +
    '        padding: 20px;\\n' +
    '        border-bottom: 1px solid var(--border);\\n' +
    '        display: flex;\\n' +
    '        justify-content: space-between;\\n' +
    '        align-items: center;\\n' +
    '        max-width: 1000px;\\n' +
    '        margin: 0 auto;\\n' +
    '    }\\n' +
    '    .logo { font-family: \\'Playfair Display\\', serif; font-size: 24px; font-weight: 800; color: var(--accent); }\\n' +
    '    .logo span { color: #c9a84c; font-style: italic; }\\n' +
    '    .logo a { text-decoration: none; color: inherit; }\\n' +
    '    .nav-link { color: var(--accent); text-decoration: none; font-weight: 500; }\\n' +
    '    .nav-link:hover { text-decoration: underline; }\\n' +
    '    .article-container {\\n' +
    '        max-width: 800px;\\n' +
    '        margin: 40px auto;\\n' +
    '        background: var(--surface);\\n' +
    '        padding: 40px;\\n' +
    '        border-radius: 12px;\\n' +
    '        box-shadow: 0 4px 12px rgba(0,0,0,0.05);\\n' +
    '    }\\n' +
    '    h1 { font-family: \\'Playfair Display\\', serif; color: var(--accent); font-size: 36px; margin-top: 0; line-height: 1.2; }\\n' +
    '    h2 { font-family: \\'Playfair Display\\', serif; color: var(--accent); font-size: 24px; margin-top: 30px; }\\n' +
    '    p { font-size: 17px; color: var(--muted); margin-bottom: 20px; }\\n' +
    '    ul, ol { font-size: 17px; color: var(--muted); margin-bottom: 20px; padding-left: 20px; }\\n' +
    '    li { margin-bottom: 10px; }\\n' +
    '    a { color: #2d6a4f; text-decoration: none; font-weight: 500; }\\n' +
    '    a:hover { text-decoration: underline; }\\n' +
    '    .back-link {\\n' +
    '        display: inline-block;\\n' +
    '        margin-bottom: 20px;\\n' +
    '        color: var(--muted);\\n' +
    '        text-decoration: none;\\n' +
    '        font-size: 15px;\\n' +
    '    }\\n' +
    '    .back-link:hover { color: var(--accent); }\\n' +
    '</style>\\n' +
    '</head>\\n<body>\\n' +
    '    <header>\\n' +
    '        <div class="logo"><a href="/">Debt<span>Calc</span></a></div>\\n' +
    '        <div>\\n' +
    '            <a href="/articles/" class="nav-link">Articles</a>\\n' +
    '            <a href="/" class="nav-link" style="margin-left: 20px;">Calculators</a>\\n' +
    '        </div>\\n' +
    '    </header>\\n' +
    '\\n' +
    '    <div class="article-container">\\n' +
    '        <a href="/articles/" class="back-link">← Back to Articles</a>\\n' +
    '        <h1>' + article.title + '</h1>\\n' +
    '        <div class="content">\\n' +
    '            ' + article.content + '\\n' +
    '        </div>\\n' +
    '    </div>\\n' +
    '</body>\\n</html>';

let indexListHtml = "";
articles.forEach(article => {
  const file = path.join(articlesDir, article.slug + '.html');
  fs.writeFileSync(file, template(article));
  indexListHtml += '<div class="article-card" style="margin-bottom: 30px; padding-bottom: 30px; border-bottom: 1px solid var(--border);">\\n' +
    '<h2 style="margin-top: 0;"><a href="/articles/' + article.slug + '.html">' + article.title + '</a></h2>\\n' +
    '<p>' + article.description + '</p>\\n' +
    '<a href="/articles/' + article.slug + '.html" style="font-weight: 600;">Read more →</a>\\n' +
    '</div>\\n';
});

const indexTemplate = '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n' +
    '<meta charset="UTF-8">\\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">\\n' +
    '<title>Financial Articles & Guides - DebtCalc</title>\\n' +
    '<meta name="description" content="Discover expert guides and articles on mortgages, loan amortization, and debt payoff strategies.">\\n' +
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">\\n' +
    '<link rel="canonical" href="https://debtcalc.online/articles/">\\n' +
    '<link rel="preconnect" href="https://fonts.googleapis.com">\\n' +
    '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">\\n' +
    '<style>\\n' +
    '    :root {\\n' +
    '        --bg: #f7f6f3;\\n' +
    '        --surface: #ffffff;\\n' +
    '        --border: #e2e0d8;\\n' +
    '        --accent: #1a3a2a;\\n' +
    '        --text: #2c2b29;\\n' +
    '        --muted: #6b6a67;\\n' +
    '    }\\n' +
    '    body { background-color: var(--bg); color: var(--text); font-family: \\'Outfit\\', sans-serif; margin: 0; padding: 0; line-height: 1.6; }\\n' +
    '    header { background: var(--surface); padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; max-width: 1000px; margin: 0 auto; }\\n' +
    '    .logo { font-family: \\'Playfair Display\\', serif; font-size: 24px; font-weight: 800; color: var(--accent); }\\n' +
    '    .logo span { color: #c9a84c; font-style: italic; }\\n' +
    '    .logo a { text-decoration: none; color: inherit; }\\n' +
    '    .nav-link { color: var(--accent); text-decoration: none; font-weight: 500; }\\n' +
    '    .nav-link:hover { text-decoration: underline; }\\n' +
    '    .container { max-width: 800px; margin: 40px auto; background: var(--surface); padding: 40px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }\\n' +
    '    h1 { font-family: \\'Playfair Display\\', serif; color: var(--accent); font-size: 36px; margin-top: 0; }\\n' +
    '    h2 a { font-family: \\'Playfair Display\\', serif; color: var(--accent); text-decoration: none; font-size: 24px; }\\n' +
    '    h2 a:hover { text-decoration: underline; }\\n' +
    '    p { font-size: 17px; color: var(--muted); }\\n' +
    '    a { color: #2d6a4f; text-decoration: none; }\\n' +
    '    a:hover { text-decoration: underline; }\\n' +
    '</style>\\n' +
    '</head>\\n<body>\\n' +
    '    <header>\\n' +
    '        <div class="logo"><a href="/">Debt<span>Calc</span></a></div>\\n' +
    '        <div>\\n' +
    '            <a href="/articles/" class="nav-link">Articles</a>\\n' +
    '            <a href="/" class="nav-link" style="margin-left: 20px;">Calculators</a>\\n' +
    '        </div>\\n' +
    '    </header>\\n' +
    '    <div class="container">\\n' +
    '        <h1>Financial Articles & Guides</h1>\\n' +
    '        <p style="margin-bottom: 40px;">Expert insights to help you make informed financial decisions and manage your debt effectively.</p>\\n' +
    '        ' + indexListHtml + '\\n' +
    '    </div>\\n' +
    '</body>\\n</html>';

fs.writeFileSync(path.join(articlesDir, 'index.html'), indexTemplate);

console.log('Articles generated successfully.');
