document.addEventListener('DOMContentLoaded', function(){
    const learnMore = document.getElementById("learn-more-button");
    if(learnMore) {
       learnMore.addEventListener("click", function() {
          window.location.href = "principal.html";
       });
    }
});