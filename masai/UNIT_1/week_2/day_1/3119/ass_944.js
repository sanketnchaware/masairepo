var country = "Mexico";
switch (country) {
    case "India":
    case "China":
    case "Nepal":
    case "Singapore":
        console.log("Asia");
        break;
    case "Mexico":
    case "Canada":
    case "United States of America":
        console.log("North America");
        break;
    case "Australia":
        console.log("Antarctica");
        break;
    case "France":
    case "Germany":
    case "Sweden":
        console.log("Europe");
        break;
    case "Nigeria":
    case "South Africa":
        console.log("Africa");
        break;
    case "Argentina":
    case "Brazil":
        console.log("South America");
        break;
    default:
        console.log("Invalid name");
}