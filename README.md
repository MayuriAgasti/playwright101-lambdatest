### Playwright Lambdatest 101 
#### Playwright framework with Typescript

##### Installation Steps
npm init playwright@latest<br/>
Select Typescript as language
Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · TypeScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (Y/n) · true
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

##### To install lambdatest dependency
 npm install @lambdatest/playwright-driver

##### To run the playwright testcases
npx playwright test

##### To view HTML report
npx playwright show-report
