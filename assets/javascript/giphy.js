$(document).ready(function(){
    var buttons = [
        {emotion: "sad", 
        icon: "em-cry"
        },
        {emotion: "happy", 
        icon: "em-grinning"
        },
        {emotion: "angy", 
        icon: "em-angry"
        },
        {emotion: "sick", 
        icon: "em-sneezing_face"
        },
    ]
    for(i=0; i<buttons.length; i++){
        var button=$("<button>")
        .addClass("button-red")
        .attr("id", buttons[i].emotion)
        .attr("data-value", buttons[i].emotion)
        .append(
            $("<i>").addClass("em " + buttons[i].icon)
        )
        button.appendTo("#button-div")
    }
    $(document).on("click", ".button-red", function(){
        console.log($(this).attr("data-value"))
    })
})