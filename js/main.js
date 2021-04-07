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
    label: "Challenge One: Todo",
    url: "week06/todo/todo.html",
  },
  {
    label: "week07 notes",
    url: "week07/week07notes.html",
  },
  {
    label: "week08 notes",
    url: "week08/week08notes.html",
  },
  {
    label: "week09 notes",
    url: "week09/week09notes.html",
  },
  {
    label: "week10 notes",
    url: "week10/week10notes.html",
  },
  {
    label: "Challenge 2: Weather",
    url: "week12/weather/weather.html",
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
