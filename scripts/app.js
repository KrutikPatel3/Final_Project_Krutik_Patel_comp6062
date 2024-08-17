const app = Vue.createApp({
    data(){
        return{
            Fact : {
                text : 'A Random Fact',
                url : 'https://uselessfacts.jsph.pl/api/v2/facts/random',
            },

            Weather : {
                temperature : 0,
                wind : 0,
                description : 'desc',
                url : 'https://weather-data.liamstewart.ca',
            },

            Dictionary : {
                word: 'word',
                phonetic : 'phonetic',
                partOfSpeech : 'pOS',
                definition : 'define',
                url : 'https://api.dictionaryapi.dev/api/v2/entries/en',
            },
        };
    },
    computed(){
        return{
            

        };
    },
    methods(){
        return{
            updateQuote(){
                fetch(Fact.url, {
                    method: 'GET',
                })
                .then(response => response.json)
                .then(data => JSON.parse(Fact.text))
                console.log(Fact.text);
            },
        };
    },
});

app.mount('#app');