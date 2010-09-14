function message(border, background, htmlMsg, author)
{
    var borderCssOpt = {"border": border};
    var backgroundCssOpt = {"background": background};

    $("#container").css(borderCssOpt);
    $("#container").hide().css(backgroundCssOpt).fadeIn(1000);
    $(".congratulate").hide().delay(1000).html(htmlMsg).fadeIn(1000);
    $(".sign").hide().delay(3000).html(author).fadeIn(1000);
}

$(document).ready(function() {
    var step = 1;
    var h = $(document).height();
    var h90 = h - h * 0.05;
    var containerCss = {"height": h90};
    $("#container").css(containerCss);
    
    $("#container").click( function() {
        switch(step)
        {
            case 1:
                message("2px #ffaaaa solid", "url('images/lynx.jpg')", "ЕЛЕНА ДАЛЮК!!!<br />ПОЗДРАВЛЯЮ ТЕБЯ С ДНЁМ РОЖДЕНИЯ!!!", "Лёша!");
                step++;
                break;
            case 2:
                message("2px #00e4e2 solid", "#00f4f2 url('images/sanchos.png') center center no-repeat", "И Я ПОЗДРАВЛЯЮ ТЕБЯ<br />С ДНЁМ РОЖДЕНИЯ!!!", "Санчос!");
                step++;
                break;
            case 3:
                message("2px #a5e25e solid", "#a5f28f url('images/parents.jpg') center center no-repeat", "И МЫ<br />ПОЗДРАВЛЯЕМ ТЕБЯ С ДНЕМ РОЖДЕНИЯ!!!", "Мама и папа!");
                step++;
                break;
            case 4:
                message("2px #fff18d solid", "#ffeb62 url('images/end.jpg') center center no-repeat", "<br /><br /><br />14 сентября<br />2010 года", "");
                step = 1;
        }
   });
});

