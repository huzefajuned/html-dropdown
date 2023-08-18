// Dummy data for dropdown options
const dropdown_Data = [
  "Kolkata 🇮🇳",
  "New York 🗽",
  "London 🇬🇧",
  "Tokyo 🇯🇵",
  "Paris 🇫🇷",
  "Sydney 🇦🇺",
  "Los Angeles 🇺🇸",
  "Mumbai 🇮🇳",
  "Berlin 🇩🇪",
  "Toronto 🇨🇦",
  "Beijing 🇨🇳",
  "Moscow 🇷🇺",
  "Rome 🇮🇹",
  "Rio de Janeiro 🇧🇷",
  "Cairo 🇪🇬",
];

// Load JavaScript when the page loads for the first time
window.addEventListener("DOMContentLoaded", function () {
  // Function for creating a main div,
  // an inner-div, and a select dropdown
  // then more

  function create_Main() {
    // Create main div
    const main_Div = document.createElement("div");
    main_Div.className = "main_div";
    document.body.appendChild(main_Div);

    // Create inner div
    const inner_Div = document.createElement("div");
    inner_Div.className = "inner_div";
    main_Div.appendChild(inner_Div);

    // Create a select dropdown
    const select_tag = document.createElement("select");
    select_tag.className = "select_main";

    // Create an option for the default selection
    const option_tag = document.createElement("option");
    option_tag.className = "option_main";
    option_tag.value = "";
    option_tag.text = "Choose Your Favourite City ! 🙋";
    select_tag.appendChild(option_tag);

    // Populate the dropdown with cities from the array
    for (const city of dropdown_Data) {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      select_tag.appendChild(option);
    }

    // Append the select dropdown to the inner div
    inner_Div.appendChild(select_tag);
  }

  create_Main();
});

//2. *************
//  add onclick addEventListener to alert  every single selcted value
