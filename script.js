
document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);

  if ( value === "yes")
  {
        const url3 = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
          fetch(url3)
            .then(function(response) {
              return response.json();
            }).then(function(json) {
              let theString = "";

              for (let i=0; i < json.results.length; i++)
              {
                  theString += "<p class=\"trivz\">" + (i+1) + ". "+ json.results[i].question + "</p>";

                  theString += "<p class=\"trivz\">";
                  for ( let r=0; r < json.results[i].incorrect_answers.length; r++)
                  {
                    theString += json.results[i].incorrect_answers[r] + '  ';
                  }
                  theString += "</p>";
                }

              document.getElementById("gameResults").innerHTML = theString;
            });
    }

    else
    {
      let noMessage = "";

      noMessage += "<p> Plz type yes for Trivia. It is fun </p>";

      document.getElementById("gameResults").innerHTML = noMessage;
    }




});


//replace just APIKEY
