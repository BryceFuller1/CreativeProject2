



        const url3 = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
        fetch(url3)
          .then(function(response) {
            return response.json();
          }).then(function(json) {
            let poop = "";


            poop += "<p>";

            poop += json.response_code;

            poop += json.results[0].category;
            for (let i=0; i < json.results.length; i++) {
                poop += json.results[i].category + " " + json.results[i].difficulty;
              }




            poop += "</p>";

            document.getElementById("gameResults").innerHTML = poop;
          });




//replace just APIKEY
