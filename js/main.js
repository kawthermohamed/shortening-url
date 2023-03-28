let inputUrl = document.querySelector(".original-url");
let shortenBtn = document.querySelector(".shorten-btn");

let originalLinkplace = document.querySelector(".ori-url");
let shortLinkplace = document.querySelector(".sh-url");
let copyBtn = document.querySelector(".copy");
let warningTex = document.querySelector(".empty");
let shortenContainer = document.querySelector(".shorten-after");
//1=>
shortenBtn.onclick = shortenUrl;

function shortenUrl() {
  if (inputUrl.value == "") {
    warningTex.classList.add("active");
    shortenContainer.classList.remove("active");
  } else {
    warningTex.classList.remove("active");
    shortenContainer.classList.add("active");
    let originalUrl = inputUrl.value;

    fetch(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`)
      .then((data) => {
        return data.json();
      })
      .then((solve) => {
        console.log(solve);
        let shortenUrl = solve.result.full_short_link;
        let oriLink = solve.result.original_link;
        originalLinkplace.innerHTML = oriLink;
        shortLinkplace.innerHTML = shortenUrl;
        inputUrl.value = "";
      });
  }
}

//2=>

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("copy")) {
    // Get the text field
    let copyText = shortLinkplace.innerHTML;

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied the text: " + copyText);
  }
});
