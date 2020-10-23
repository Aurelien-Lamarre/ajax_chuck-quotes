const getSimpsonsQuotes = () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    axios.get(url)
        .then(function(res){
            return res.data;
        })
        .then(function(jokes){
            console.log('data decoded from JSON:', jokes);
            const jokesHtml = `
            <p><strong>${jokes.value}</strong></p>
            <img src="${jokes.icon_url}" />
            <p>(Refresh the page and click again to get a new joke)</p>
          `;
          const newQuote = document.querySelector('#new');
          newQuote.addEventListener('click', () => {
            document.querySelector('#chuck-norris').innerHTML = jokesHtml;
          })
          
        })
}

getSimpsonsQuotes();