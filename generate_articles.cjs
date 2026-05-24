const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'articles');
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
  },
  {
    slug: 'personal-loans-vs-credit-cards',
    title: 'Personal Loans vs. Credit Cards: Which is Better?',
    description: 'A comprehensive comparison of personal loans and credit cards. Learn which financing option makes sense for your unique financial situation.',
    content: `
      <h2>Understanding the Basics</h2>
      <p>When you need to borrow money, two of the most popular options are personal loans and credit cards. Both offer unsecured borrowing, meaning you don't need to put up collateral like a house or a car, but they function in very different ways.</p>

      <h2>How Credit Cards Work</h2>
      <p>A credit card provides a revolving line of credit. You are given a maximum credit limit, and you can borrow up to that amount repeatedly, as long as you pay at least the minimum amount due each month. Credit cards are ideal for everyday purchases, earning rewards, and covering smaller, short-term expenses. However, they generally come with higher, variable interest rates.</p>

      <h2>How Personal Loans Work</h2>
      <p>A personal loan is an installment loan. You borrow a fixed amount of money as a lump sum and agree to pay it back over a set term (e.g., 3 to 5 years) with fixed monthly payments. Personal loans typically offer lower, fixed interest rates compared to credit cards, making them better for large, one-time expenses or consolidating high-interest debt.</p>

      <h2>When to Use a Personal Loan</h2>
      <ul>
        <li><strong>Debt Consolidation:</strong> Paying off multiple high-interest credit cards with a single lower-interest personal loan.</li>
        <li><strong>Large Purchases:</strong> Funding a home improvement project or a major unexpected expense where you need a large sum upfront.</li>
        <li><strong>Predictability:</strong> When you want the stability of a fixed monthly payment and a specific payoff date.</li>
      </ul>

      <h2>When to Use a Credit Card</h2>
      <ul>
        <li><strong>Everyday Spending:</strong> Paying for groceries, gas, and bills while earning cashback or travel rewards (provided you pay the balance in full each month).</li>
        <li><strong>Small Emergencies:</strong> Covering a $500 car repair that you can pay off over a month or two.</li>
        <li><strong>0% Intro APR Offers:</strong> Taking advantage of a promotional 0% interest period for financing a purchase over 12-18 months.</li>
      </ul>
    `
  },
  {
    slug: 'saving-for-down-payment',
    title: 'How to Save for a Down Payment on a House',
    description: 'Learn practical and effective strategies to build your savings and reach your down payment goals faster.',
    content: `
      <h2>Assess Your Goal</h2>
      <p>The first step to saving for a down payment is knowing exactly how much you need. While a 20% down payment is ideal to avoid Private Mortgage Insurance (PMI), many first-time homebuyer programs allow for down payments as low as 3% to 5%. Use our <a href="/">Mortgage Calculator</a> to estimate home prices and down payment amounts to set a realistic goal.</p>

      <h2>Create a Dedicated Savings Account</h2>
      <p>Keep your down payment funds separate from your everyday checking or general savings accounts. Look for a High-Yield Savings Account (HYSA) to earn more interest on your money while keeping it easily accessible and risk-free.</p>

      <h2>Automate Your Savings</h2>
      <p>Set up an automatic transfer from your checking account to your dedicated down payment account every time you get paid. Treating this transfer like a fixed monthly bill ensures you consistently make progress without having to think about it.</p>

      <h2>Cut Discretionary Spending</h2>
      <p>Review your budget to find areas where you can cut back. This might mean dining out less, canceling unused subscriptions, or reducing travel expenses temporarily. Redirect all the money you save directly into your down payment fund.</p>

      <h2>Boost Your Income</h2>
      <p>Increasing your income can significantly accelerate your savings timeline. Consider picking up a side hustle, negotiating a raise, selling unwanted items, or redirecting bonuses and tax refunds straight into your savings account.</p>
    `
  }
];

const template = (article) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} - DebtCalc</title>
    <meta name="description" content="${article.description}">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="canonical" href="https://debtcalc.online/articles/${article.slug}.html">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #f7f6f3;
            --surface: #ffffff;
            --border: #e2e0d8;
            --accent: #1a3a2a;
            --text: #2c2b29;
            --muted: #6b6a67;
        }
        body {
            background-color: var(--bg);
            color: var(--text);
            font-family: 'Outfit', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        header {
            background: var(--surface);
            padding: 20px;
            border-bottom: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1000px;
            margin: 0 auto;
        }
        .logo { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 800; color: var(--accent); }
        .logo span { color: #c9a84c; font-style: italic; }
        .logo a { text-decoration: none; color: inherit; }
        .nav-link { color: var(--accent); text-decoration: none; font-weight: 500; }
        .nav-link:hover { text-decoration: underline; }
        .article-container {
            max-width: 800px;
            margin: 40px auto;
            background: var(--surface);
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        h1 { font-family: 'Playfair Display', serif; color: var(--accent); font-size: 36px; margin-top: 0; line-height: 1.2; }
        h2 { font-family: 'Playfair Display', serif; color: var(--accent); font-size: 24px; margin-top: 30px; }
        p { font-size: 17px; color: var(--muted); margin-bottom: 20px; }
        ul, ol { font-size: 17px; color: var(--muted); margin-bottom: 20px; padding-left: 20px; }
        li { margin-bottom: 10px; }
        a { color: #2d6a4f; text-decoration: none; font-weight: 500; }
        a:hover { text-decoration: underline; }
        .back-link {
            display: inline-block;
            margin-bottom: 20px;
            color: var(--muted);
            text-decoration: none;
            font-size: 15px;
        }
        .back-link:hover { color: var(--accent); }
    </style>
</head>
<body>
    <header>
        <div class="logo"><a href="/">Debt<span>Calc</span></a></div>
        <div>
            <a href="/articles/all.html" class="nav-link">Articles</a>
            <a href="/" class="nav-link" style="margin-left: 20px;">Calculators</a>
        </div>
    </header>

    <div class="article-container">
        <a href="/articles/all.html" class="back-link">← Back to Articles</a>
        <h1>${article.title}</h1>
        <div class="content">
            ${article.content}
        </div>
    </div>
</body>
</html>`;

let indexListHtml = "";
articles.forEach(article => {
  const file = path.join(articlesDir, article.slug + '.html');
  fs.writeFileSync(file, template(article));
  indexListHtml += `
    <div class="article-card" style="margin-bottom: 30px; padding-bottom: 30px; border-bottom: 1px solid var(--border);">
      <h2 style="margin-top: 0;"><a href="/articles/${article.slug}.html">${article.title}</a></h2>
      <p>${article.description}</p>
      <a href="/articles/${article.slug}.html" style="font-weight: 600;">Read more →</a>
    </div>
  `;
});

const indexTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Financial Articles & Guides - DebtCalc</title>
    <meta name="description" content="Discover expert guides and articles on mortgages, loan amortization, and debt payoff strategies.">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="canonical" href="https://debtcalc.online/articles/all.html">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #f7f6f3;
            --surface: #ffffff;
            --border: #e2e0d8;
            --accent: #1a3a2a;
            --text: #2c2b29;
            --muted: #6b6a67;
        }
        body { background-color: var(--bg); color: var(--text); font-family: 'Outfit', sans-serif; margin: 0; padding: 0; line-height: 1.6; }
        header { background: var(--surface); padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; max-width: 1000px; margin: 0 auto; }
        .logo { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 800; color: var(--accent); }
        .logo span { color: #c9a84c; font-style: italic; }
        .logo a { text-decoration: none; color: inherit; }
        .nav-link { color: var(--accent); text-decoration: none; font-weight: 500; }
        .nav-link:hover { text-decoration: underline; }
        .container { max-width: 800px; margin: 40px auto; background: var(--surface); padding: 40px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        h1 { font-family: 'Playfair Display', serif; color: var(--accent); font-size: 36px; margin-top: 0; }
        h2 a { font-family: 'Playfair Display', serif; color: var(--accent); text-decoration: none; font-size: 24px; }
        h2 a:hover { text-decoration: underline; }
        p { font-size: 17px; color: var(--muted); }
        a { color: #2d6a4f; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <header>
        <div class="logo"><a href="/">Debt<span>Calc</span></a></div>
        <div>
            <a href="/articles/all.html" class="nav-link">Articles</a>
            <a href="/" class="nav-link" style="margin-left: 20px;">Calculators</a>
        </div>
    </header>
    <div class="container">
        <h1>Financial Articles & Guides</h1>
        <p style="margin-bottom: 40px;">Expert insights to help you make informed financial decisions and manage your debt effectively.</p>
        ${indexListHtml}
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(articlesDir, 'all.html'), indexTemplate);

console.log('Articles generated successfully.');
