$(document).ready(function () {
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
        /*{emotion: "random",
        text: "?"
        },*/
    ]

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
   
    $(document).on("click", ".button-red", function () {
        console.log($(this).attr("data-value"))
        var emotion = $(this).attr("data-value")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            emotion + "&api_key=dc6zaTOxFJmzC&limit=15";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = response.data;
        
    for(var i = 0; i < results.length; i++){
        var emotionDiv = $("<div>");
        var p = $("<p>");
        var emotionImage = $("<img>");
        emotionImage.attr("src", results[i].images.fixed_height.url);
        emotionDiv.append(p);
        emotionDiv.append(emotionImage);
        $("#return").prepend(emotionDiv);
    }        
        
   
        })
    })
})