import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getLocation().then(data => {
    for (let loc of data.results) {
        const location = Utils.showLocations(loc, loc.id);

        document.getElementById("root").append(location);
    }
});

DataBusiness.getCharacters().then(data => {
    for (let charRow of data.results) {
        const character = Utils.createCharacterRow(charRow);

        document.getElementById("root").append(character);
        // character.onclick = function () {
        //     Utils.showCharacter(charRow);
        // };

        // ----funciona pero practicamos con el otro endpoint "Recuperar un personaje: /api/character/{id}"----
        DataBusiness.getCharacterByID(charRow.id).then(data => {
            character.onclick = function () {
                Utils.showCharacter(data);
            };
        });
    };
});

