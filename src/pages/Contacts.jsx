const Contacts = () => {
  const link = () => {
    alert("Вы хотите переходить по ссылкам?");
  };
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Ganyushkino, Atyrau, Kazakhstan</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/markoowik"
                onClick={link}
              >
                @markoowik.dev
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:markoowik.dev@gmail.com">
                markoowik.dev@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
