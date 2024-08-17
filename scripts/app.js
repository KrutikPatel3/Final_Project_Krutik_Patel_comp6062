const app = Vue.createApp({
    data(){
        return{
            Fact : {
                text : 'A Random Fact',
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
                fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
                .then(response => response.json())
                .then(data => {
                    this.Fact.text = data.text;
                })
            
            },
            getWeather(){
                fetch('https://weather-data.liamstewart.ca/?city=Toronto')
                .then(response => response.json()
                .then(data => {
                    this.Weather.temperature = data.temperature;
                    this.Weather.wind = data.wind_speed;
                    this.Weather.description = data.description;
                }))
            },
            getDefinition(){
                fetch('https://api.dictionaryapi.dev/api/v2/entries/en/Bottle')
                .then(response => response.json())
                .then(data => {
                    this.Dictionary.word = data.word;
                    this.Dictionary.phonetic = data.phonetic;
                    this.Dictionary.partOfSpeech = data.meanings.partOfSpeech;
                    this.Dictionary.definition = data.meanings.definition;
                })
            }
        };
    },
});

app.mount('#app');