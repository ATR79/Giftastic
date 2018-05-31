$(document).ready(function () {
    //create emoji buttons
    var buttons = [{
            emotion: "sad",
            icon: "em-cry"
        },
        {
            emotion: "happy",
            icon: "em-grinning"
        },
        {
            emotion: "angy",
            icon: "em-angry"
        },
        {
            emotion: "sick",
            icon: "em-sneezing_face"
        },
        {
            emotion: "silly",
            icon: "em-grinning_face_with_one_large_and_one_small_eye"
        },
        {
            emotion: "sick",
            icon: "em-sneezing_face"
        },
        {
            emotion: "complacent",
            icon: "em-neutral_face"
        },
        {
            emotion: "cool",
            icon: "em-sunglasses"
        },
        {
            emotion: "nervous",
            icon: "em-cold_sweat"
        },
        {
            emotion: "confused",
            icon: "em-confused"
        },
        {
            emotion: "curious",
            icon: "em-face_with_one_eyebrow_raised"
        },
        {
            emotion: "numb",
            icon: "em-expressionless"
        },
        {
            emotion: "bored",
            icon: "em-face_with_rolling_eyes"
        },
        {
            emotion: "loved",
            icon: "em-heart_eyes"
        },
        {
            emotion: "excited",
            icon: "em-hugging_face"
        },
        {
            emotion: "innocent",
            icon: "em-innocent"
        },
        {
            emotion: "affectionate",
            icon: "em-kissing_heart"
        },
        {
            emotion: "funny",
            icon: "em em-laughing"
        },
        {
            emotion: "sarcastic",
            icon: "em-smirk"
        },
        {
            emotion: "smart",
            icon: "em-nerd_face"
        },
        {
            emotion: "relaxed",
            icon: "em-relaxed"
        },
        {
            emotion: "sleepy",
            icon: "em-sleeping"
        },
        {
            emotion: "tearful",
            icon: "em-sob"
        },
        {
            emotion: "curious",
            icon: "em-thinking_face"
        },
        {
            emotion: "weary",
            icon: "em-weary"
        },
        {
            emotion: "hungry",
            icon: "em-drooling_face"
        },
        {
            emotion: "relieved",
            icon: "em-disappointed_relieved"
        },
        /*{emotion: "random",
        text: "?"
        },*/
    ]
    //loop length of buttons, add style and append
    for (i = 0; i < buttons.length; i++) {
        var button = $("<button>")
            .addClass("button-red")
            .attr("id", buttons[i].emotion)
            .attr("data-value", buttons[i].emotion)
            .append(
                $("<i>").addClass("em " + buttons[i].icon)
            )
        button.appendTo("#button-div")
    }
    //on click function and add api key
    $(document).on("click", ".button-red", function () {
        console.log($(this).attr("data-value"))
        var emotion = $(this).attr("data-value")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            emotion + "&api_key=dc6zaTOxFJmzC&limit=15";
        //introduce ajax url
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = response.data;
            
        //data-state, still, animate introduction
            for (var i = 0; i < results.length; i++) {
                var emotionDiv = $("<div>");
                var p = $("<p>");
                var emotionImage = $("<img>");
                var animatedImage = results[i].images.fixed_height.url;
                var staticImage = results[i].images.fixed_height_still.url;
                emotionImage.attr("src", staticImage);
                emotionImage.addClass("emotionGif");
                emotionImage.attr("data-state", "still");
                emotionImage.attr("data-still", staticImage);
                emotionImage.attr("data-animate", animatedImage);
                emotionDiv.append(p);
                emotionDiv.append(emotionImage);
                $("#return").prepend(emotionDiv);
            }
        //on click data state
            $(document).on("click", ".emotionGif", stillPlayGifs);
        
            function stillPlayGifs() {
                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            };

        })
    })
})