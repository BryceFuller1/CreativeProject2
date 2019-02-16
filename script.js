
function myFunction() {


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
                    theString += "<p class=\"trivz\">";
                    if ( r === 0 )
                    {
                      theString += "a) ";
                    }
                    else if ( r === 1 )
                    {
                      theString += "b) ";
                    }
                    else if ( r === 2 )
                    {
                      theString += "c) ";
                      theString += json.results[i].incorrect_answers[r];
                      theString += "</p>";
                      theString += "<p class=\"trivz\">" + "d) "+ json.results[i].correct_answer + "</p>";
                      break;
                    }

                    theString += json.results[i].incorrect_answers[r];
                    theString += "</p>";
                  }
                    theString += "</p>";
                    theString += "<p class=\"garz\"> </p>";
                }

                theString += "<p class=\"answerz\">Answers for those who do not know:</p>";
                for (let i=0; i < json.results.length; i++)
                {
                  theString += "<p>" + (i+1) + ". " + json.results[i].correct_answer + "</p>";
                }

                theString += "<p class=\"trivz\"> Click the button again for more trivia</p>";

              document.getElementById("gameResults").innerHTML = theString;
            });













}


//replace just APIKEY
