// a var tem que ser forest porque no HTML o datasound está forest
export const forest = new Audio("./assets/Floresta.wav"); //New Audio - construtor pra criar um player no HTML, puxando o assets

export const rain = new Audio("./assets/Chuva.wav");

export const coffe = new Audio("./assets/Cafeteria.wav");

export const fireplace = new Audio("./assets/Lareira.wav");

forest.loop = true;
rain.loop = true;
coffe.loop = true;
fireplace.loop = true;
