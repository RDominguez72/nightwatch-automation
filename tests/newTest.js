module.exports = {
    'My first test using Page Objects' (browser) {
    const myQuery = 'Rick Dominguez Facebook';
    const page = browser.page.googleAdvancedSearch();

    page
        .navigate()
        .assert.title('Google Advanced Search')
        .query('Rick Dominguez Facebook')
        .setLanguage('lang_en')
        .submit()
        .verifyText('View the profiles of people named Rick Dominguez.')
        }
    }