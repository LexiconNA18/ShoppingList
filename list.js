const addButton = document.querySelector("#addButton");
const addInput = document.querySelector("#addInput");
const shoppingList = document.querySelector("#shoppingList");

addButton.addEventListener("click", add);
addInput.addEventListener("change", add);


function add() {
	const itemText = addInput.value;
	insertItem(itemText);
	addInput.value = "";
}

const seed = getList();
seed.forEach(item => insertItem(item));

function insertItem(text, completed) {
	text = text.trim();
	if (text == "") return;
	const li = document.createElement("li");
	li.textContent = text;
	if (completed) li.classList.add("completed");
	shoppingList.append(li);
	li.addEventListener(
		"click", 
		() => li.classList.toggle("completed")		
	);

	const btn = document.createElement("button");
	btn.classList.add("remove");
	btn.textContent = "ta bort";
	btn.addEventListener("click", () => li.remove());
	li.append(btn);

	const myList = getList();
	myList.push(text)
	localStorage.setItem("list", JSON.stringify(myList));
}

function getList() {
	const myListAsString = localStorage.getItem("list");
	return JSON.parse(myListAsString);
}