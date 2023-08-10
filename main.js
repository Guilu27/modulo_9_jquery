$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#cancel-button").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();

    const urlNewImg = $("#url-new-img").val();
    const newImg = $(`<li style="display: none;"></li>`);

    $(`<img src="${urlNewImg}" />`).appendTo(newImg);
    $(`
    <div class="overlay-img-link">
        <a 
        href="${urlNewImg}" 
        target="_blank" 
        title="Ver imagem em tamanho real"
        >
        Ver imagem em tamanho real
        </a>
    </div>`).appendTo(newImg);

    $(newImg).appendTo("ul");
    $(newImg).fadeIn(1000);
    $("#url-new-img").val("");
  });
});
