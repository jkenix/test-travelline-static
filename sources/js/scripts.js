// Ждем, пока весь контент документа будет загружен
document.addEventListener("DOMContentLoaded", function () {
  // Находим все карточки с классом ".rooms-card"
  document.querySelectorAll(".rooms-card").forEach((card) => {
    // Находим кнопку и контент в карточке
    const btn = card.querySelector(".rooms-card__btn");
    const card_content = card.querySelector(".rooms-card__content");

    // Добавляем обработчик события для кнопки
    btn.addEventListener("click", (e) => {
      // Предотвращаем всплытие события клика
      e.stopPropagation();
      // Добавляем класс активности кнопке
      btn.classList.add("rooms-card__btn--active");
    });

    // Добавляем обработчик события наmouseleave для карточки
    card.addEventListener("mouseleave", () => {
      // Проверяем, активна ли кнопка
      if (btn.classList.contains("rooms-card__btn--active")) {
        // Добавляем класс активности карточке и контенту
        card.classList.add("rooms-card--active");
        card_content.classList.add("rooms-card__content--active");
        // Добавляем класс для эффекта изменения стиля кнопки
        btn.classList.add("rooms-card__btn--reversed");
      }
    });

    // Добавляем обработчик события клика на карточке
    card.addEventListener("click", (e) => {
      // Проверяем, что клик не был на элементе с классом ".check-pay"
      if (!e.target.closest(".check-pay")) {
        // Убираем классы активности у карточки и ее контента
        card.classList.remove("rooms-card--active");
        card_content.classList.remove("rooms-card__content--active");
        // Убираем классы активности у кнопки
        btn.classList.remove("rooms-card__btn--active");
        btn.classList.remove("rooms-card__btn--reversed");
      }
    });
  });
});
