document.addEventListener('DOMContentLoaded', function() {
console.log('Начало выполнения скрипта')
const cookieData = [
  {
    category: "Necessario",
    cookies: [
      { name: "Nome", value: "grecaptcha", provider: "Google" },
      { name: "Nome", value: "GRECAPTCHA", provider: "Google" },
      { name: "Nome", value: "fbct", provider: "Google" },
      { name: "Nome", value: "Lgi", provider: "Linkedin" },
      { name: "Nome", value: "CookieConsent", provider: "Cookiebot" },
      { name: "Nome", value: "flagorder", provider: "unomobile.it" },
      { name: "Nome", value: "CookieCheck", provider: "unomobile.it" },
      { name: "Nome", value: "rcsa", provider: "Google" },
      { name: "Nome", value: "rcsb", provider: "Google" },
      { name: "Nome", value: "rcsc", provider: "Google" },
      { name: "Nome", value: "rcsd", provider: "Google" },
      { name: "Nome", value: "rcsd-sf", provider: "Google" },
      { name: "Nome", value: "test_cookie", provider: "Google" },
    ],
  },
  {
    category: "Preferenze",
    cookies: [
      { name: "Nome", value: "tldc", provider: "Linkedin" },
      { name: "Nome", value: "tidlo_state_p", provider: "unomobile.it" },
      { name: "Nome", value: "Tldlc", provider: "Tidio" },
    ],
  },
  {
    category: "Marketing",
    cookies: [
      { name: "Nome", value: "fbp", provider: "Meta Platforms, Inc." },
      { name: "Nome", value: "ga", provider: "Google" },
      { name: "Nome", value: "ga_#", provider: "Google" },
      { name: "Nome", value: "IDE", provider: "Google" },
      { name: "Nome", value: "ds_uuid", provider: "Google" },
      {
        name: "Nome",
        value: "lastExternalReferrer",
        provider: "Meta Platforms, Inc.",
      },
      {
        name: "Nome",
        value: "lastExternalReferrerTime",
        provider: "Meta Platforms, Inc.",
      },
      { name: "Nome", value: "paged-to-conversion-tt", provider: "Google" },
      { name: "Nome", value: "paged-to-user-id-tt", provider: "Google" },
      { name: "Nome", value: "pagead_handling", provider: "Google" },
    ],
  },
  {
    category: "Non classificati",
    cookies: [
      { name: "Nome", value: "order", provider: "unomobile.it" },
      { name: "Nome", value: "preload", provider: "unomobile.it" },
      { name: "Nome", value: "tidlo_state_an", provider: "unomobile.it" },
      { name: "Nome", value: "Tldlc", provider: "Tidio" },
    ],
  },
];

function createTable(cookieData) {
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  const headers = [
    "Categoria",
    "Nome",
    "Fornitore",
    "Scope",
    "Durata massima di attivazione",
    "Tipo",
  ];
  headers.forEach((header) => {
    const cell = headerRow.insertCell();
    cell.textContent = header;
  });

  cookieData.forEach((category) => {
    category.cookies.forEach((cookie) => {
      const row = table.insertRow();
      const categoryCell = row.insertCell();
      const nameCell = row.insertCell();
      const providerCell = row.insertCell();
      const scopeCell = row.insertCell();
      const durationCell = row.insertCell();
      const typeCell = row.insertCell();

      categoryCell.textContent = category.category;
      nameCell.textContent = cookie.name + ": " + cookie.value;
      providerCell.textContent = cookie.provider;
      scopeCell.textContent = "In attesa"; // Замените на реальный scope
      durationCell.textContent = "Sessione"; // Замените на реальную продолжительность
      typeCell.textContent = "Cookie HTTP"; // Замените на реальный тип

      // Добавьте другие столбцы, если необходимо
    });
  });

  return table;
}

const table = createTable(cookieData);
const policyWrapper = document.querySelector(".policy__wrapper");
if (policyWrapper) {
  policyWrapper.appendChild(table); 
} else {
  console.error("Элемент .policy__wrapper не найден!");
}
   const paragraph = document.createElement("p");
  paragraph.textContent = "Марина тупая дура";
  document.body.appendChild(paragraph);
})


