/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto*/

//Creo l'array di oggetti

const teamMembers = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "img/wayne-barnett-founder-ceo.jpg " ,
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

//Stampa delle informazioni sulla console

teamMembers.forEach(member => {
  console.log(
    `Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`
  );
});

// Stampo delle informazioni sulla DOM

const container = document.querySelector("#team-container");
teamMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("h3");
    name.textContent = member.nome;

    const role = document.createElement("p");
    role.textContent = member.ruolo;

    const image = document.createElement("img");
    image.src = member.foto;
    image.alt = member.nome;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(role);

    container.appendChild(card);


});
