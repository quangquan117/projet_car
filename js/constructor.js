class ControllerCar {

    async loadContent() {
        console.log("loadContent");
        const result = await fetch("./api/car.json");
        const data = await result.json();
        console.table(data);

        /* itération pour l'affichage des noms
        "marque":"Fiat",
          "annee":"1960",
          "type":"Utilitaire",
          "etat":"Ancien",
          "desc":"Utilisée souvent dans les film 
          anciens comme La dolce vita",
          "image":"./asset/1950-500.jpg"*/

        for (let index of data) {
            console.log(`${index.marque} : ${index.annee} : 
            ${index.type} : ${index.etat} : 
            ${index.desc} :  ${index.image}`);
        }

        // element virtuel html
        const parent = document.querySelector("section");
        const el = document.createElement("ul");
        const addparent = parent.appendChild(el);

        // put car in html
        for (let i in data) {
            addparent.innerHTML += `
            <li>marque : ${data[i].marque}</li>
            <li>année : ${data[i].annee}</li>
            <li>type : ${data[i].type}</li>
            <li>etat : ${data[i].etat}</li>
            <li>desc : ${data[i].desc}</li>
            <li><img src="${data[i].image}" alt="${data[i].marque}"></img></li>`;
        }
    }
}
export const newControllerCar = new ControllerCar();