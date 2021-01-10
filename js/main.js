var content = document.getElementById("contentHolder");

var links = [
  {
    label: "Week01 notes",
    url: "week01/index.html",
  },
];

function appendLabelAndUrl() {
  for (let i = 0; i < links.length; i++) {
    address =
      "<li>" +
      "<a href=" +
      links[i].url +
      ">" +
      links[i].label +
      "</a>" +
      "</li>";
    // const element = array[i];
    console.log(address);
    // content += address;
    document.getElementById("contentHolder").innerHTML += address;
  }
}
