function Search (text) {
    $(".keywords").each(function(index, element) {
        let keyword = $(element).text();
        if(keyword.indexOf(text) ===-1) {
            $(element).parent().css("display", "none");
        }else{
            $(element).parent().css("display", "block");
        }
    });
}

$(".input_text").on("input", function(event){
    let text = $ (".input_text").val();
    if (text === "") {
        $(".images").css("display", "block");
    }else{
        Search(text);
    }
});