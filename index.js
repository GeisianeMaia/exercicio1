const eplusDevList = [
  "Parça",
  "Galego",
  "Xará",
  "Baqueta",
  "Na",
  "Lindo",
  "Pablito",
  "Bahia"
];

function listDevs() {
    eplusDevList.map((list) => {
    console.log(list);

    return list.toUpperCase();
  });
}

listDevs(eplusDevList);

//a função deve dar console.log em cada um dos desenvolvedores da e-plus.
