document.addEventListener('DOMContentLoaded', function() {
  console.log('Начало выполнения скрипта');
  const cookieData = [
    {
      category: "Necessario",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, expedita rem? Praesentium consequatur obcaecati odit magnam itaque, provident adipisci corrupti nisi qui neque minus numquam expedita quaerat saepe eligendi? Consequatur! Dignissimos saepe iste praesentium a distinctio cupiditate minima similique illo quibusdam tempora! Iure, esse sapiente. Ipsam perferendis quibusdam nesciunt fuga consectetur! Vero dolorum ratione assumenda incidunt iste atque pariatur ipsum?"
    },
    {
      category: "Preferenze",
      text: "Corporis vero adipisci, consequuntur nostrum incidunt fugit, id debitis quae sed modi, quibusdam laudantium alias provident quaerat. Eveniet cum officiis blanditiis, natus, repellendus quos exercitationem, distinctio commodi perferendis sapiente nihil."
    },
    {
      category: "Marketing",
      text: "Labore sint quisquam laboriosam amet inventore voluptatibus voluptates? Ea repellendus veritatis non, soluta exercitationem, aliquam magnam, consequuntur inventore maiores autem molestias vitae."
    },
    {
      category: "Non classificati",
      text: "Veritatis qui voluptatum quas, eum porro exercitationem libero praesentium repellat sunt a! Harum quia adipisci soluta laudantium maxime voluptatem vitae placeat."
    },
  ];

  function createDiv(cookieData) {
    const div = document.createElement("div");

    cookieData.forEach((item) => {
      const wrapper = document.createElement("div"); // Исправлено на "div"
      const p1 = document.createElement("p");
      p1.innerText = item.category;
      p1.classList.add("CookieDeclarationTypeHeader");

      const p2 = document.createElement("p");
      p2.innerText = item.text; // Исправлено на p2

      wrapper.append(p1);
      wrapper.append(p2);
      div.append(wrapper);
    });

    return div;
  }

  const div = createDiv(cookieData);
  const policyWrapper = document.querySelector(".policy__wrapper");
  if (policyWrapper) {
    policyWrapper.appendChild(div); 
  } else {
    console.error("Элемент .policy__wrapper не найден!");
  }

  const paragraph = document.createElement("p");
  paragraph.textContent = "Марина тупая дура";
  document.body.appendChild(paragraph);
});
