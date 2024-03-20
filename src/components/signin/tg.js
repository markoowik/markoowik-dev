const form = document.querySelector("#myForm");

form.addEventListener("submit", formSend);

async function formSend(event) {
  event.preventDefault();

  const nameForm = this.querySelector("#name").value;
  const phoneForm = this.querySelector("#phone").value;

  const TOKEN = "5253906830:AAGuH7DPgtfiHSPfnCywsuYpEoNzxrJscQM";
  const chatID = "1033246135";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  let msg = `
    Новая завка!
    Имя клиента: ${nameForm};
    Телефон клиента: ${phoneForm};
  `;
  const response = await fetch(URI_API, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatID,
      text: msg,
    }),
  });
  const result = await response.json();

  if (result.ok) {
    alert("Форма отправлена");
  } else {
    alert("Ошибка");
  }
}
