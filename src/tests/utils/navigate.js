let browser, page;

const goToPage = async (url = '/', browserType, headless) => {

  browser = await browserType.launch({
    headless
  });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(url);
  return { browser, page };
}

export default goToPage;
