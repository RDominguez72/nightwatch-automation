module.exports = {
    url: 'https://www.google.com/advanced_search',

    elements: {
        queryField: 'input[class="jfk-textinput"]',
        languageDropdown: '#lr_button',
        submitButton: 'input[type="submit"]',
    },

    commands: [{
        query(text){
            return this
                .setValue('@queryField',text);
        },

        setLanguage(language){
            return this
                .click('@languageDropdown')
                .click(`.goog-menuitem[value="${language}"]`);
            },

        submit(){
            return this
                .click('@submitButton');
        },

        assertTitle(expectedTitle){
            return this
                .assert.title(expectedTitle);
        },

        verifyText(text){
            return this
                .assert.containsText('body',text);
        }
    }]
        
    };

