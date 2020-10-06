
document.querySelector("#sub").addEventListener("click", reverseWords);



function reverseWords(message){
    var message = document.querySelector("#mes").value;
    if (message.split(" ").length == 1){
        document.querySelector("#rev").innerText = "Please write more than one word!"
        return
    }
    else{
    var meslist = message.split(" ");
    var revlist = meslist.reverse();
    document.querySelector("#rev").innerText = revlist.join(" ")}
    }

