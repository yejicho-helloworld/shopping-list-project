const addBtn = document.querySelector(".footer_button");
// 입력창
const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");

function add() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("list");
  itemRow.setAttribute("class", "item_row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const itemName = document.createElement("span");
  itemName.setAttribute("class", "item_name");
  itemName.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item_delete");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item_divider");

  item.appendChild(itemName);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

addBtn.addEventListener("click", () => {
  add();
});

input.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    add();
  }
});
