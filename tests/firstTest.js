module.exports = {
    'My first case': function(browser) {
        browser
            .url('https://www.google.com/advanced_search')
            .assert.title('Google Advanced Search')
            .setValue('input[class="jfk-textinput"]','Rick Dominguez Facebook')
            .click('#lr_button')
            .click('.goog-menuitem[value="lang_en"]')
            .click('input[type="submit"]')
            .pause(3000)
            .assert.containsText('body','View the profiles of people named Rick Dominguez.');
    }
}