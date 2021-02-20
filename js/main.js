var content = document.getElementById("contentHolder");

var links = [
  {
    label: "Week01 notes",
    url: "week01/index.html",
  },
  {
    label: "Week02 notes",
    url: "week02/index.html",
  },
  {
    label: "Week03 notes",
    url: "week03/week03notes.html",
  },
  {
    label: "week04 notes",
    url: "week04/week04notes.html",
  },
  {
    label: "week05 notes",
    url: "week05/week05notes.html",
  },
  {
    label: "Mid Term Cheking",
    url: "week06/todo/todo.html",
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
