// Header
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.classList.add('header__blur');
    } else {
        header.classList.remove('header__blur')
    }
}


// Burger
$(document).ready(function () {
    $(".header__burger").click(function () {
        $(".header__burger, .header__menu").toggleClass("open");
        $("body").toggleClass("open");
        $(".overlay").toggleClass("show");
    });
    $(document).click(function (e) {
        let target = e.target;
        if (!$(target).is(".header__burger") &&
            !$(target).parents(".header__burger").length &&
            !$(target).parents(".header__menu").length
        ) {
            $(".header__burger, .header__menu").removeClass("open");
            $("body").removeClass("open");
            $(".overlay").removeClass("show");
        }
    });
});


// Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


//Swiper-button-prev
$(document).on('mousedown', '.slider-prev', function () {
    $(this).removeClass('slider-prev').addClass('slider-prev2');
});
$(document).on('mouseup', '.slider-prev2', function () {
    $(this).removeClass('slider-prev2').addClass('slider-prev');
});


$(document).on('touchstart', '.slider-prev', function () {
    $(this).removeClass('slider-prev').addClass('slider-prev2');
});
$(document).on('touchend', '.slider-prev2', function () {
    $(this).removeClass('slider-prev2').addClass('slider-prev');
});


//Swiper-button-next
$(document).on('mousedown', '.slider-next', function () {
    $(this).removeClass('slider-next').addClass('slider-next2');
});
$(document).on('mouseup', '.slider-next2', function () {
    $(this).removeClass('slider-next2').addClass('slider-next');
});


$(document).on('touchstart', '.slider-next', function () {
    $(this).removeClass('slider-next').addClass('slider-next2');
});
$(document).on('touchend', '.slider-next2', function () {
    $(this).removeClass('slider-next2').addClass('slider-next');
});


// Portfolio
$(document).on('touchstart', '.portfolio-btn__block', function () {
    $(this).removeClass('portfolio-btn__block').addClass('portfolio-btn__block2');
});
$(document).on('touchend', '.portfolio-btn__block2', function () {
    $(this).removeClass('portfolio-btn__block2').addClass('portfolio-btn__block');
});


if (document.documentElement.clientWidth < 965) {
    $('.portfolio-btn__block').click(function (event) {
        event.preventDefault();
        $('#svg1').toggle();
        $('#svg2').toggle();
    });
}


// Example
if (document.documentElement.clientWidth < 965) {
    $('.arrow__btn').click(function (event) {
        event.preventDefault();
        $('#svg__ex').toggle();
        $('#svg__ex2').toggle();
    });
}


//Nav - link
$(document).on('mousedown', '.nav__link', function () {
    $(this).removeClass('nav__link').addClass('nav__link2');
});
$(document).on('mouseup', '.nav__link2', function () {
    $(this).removeClass('nav__link2').addClass('nav__link');
});


$(document).on('touchstart', '.nav__link', function () {
    $(this).removeClass('nav__link').addClass('nav__link2');
});
$(document).on('touchend', '.nav__link2', function () {
    $(this).removeClass('nav__link2').addClass('nav__link');
});


// Button
$(document).on('mousedown', '.order__btn', function () {
    $(this).removeClass('order__btn').addClass('order__btn2');
});
$(document).on('mouseup', '.order__btn2', function () {
    $(this).removeClass('order__btn2').addClass('order__btn');
});


$(document).on('touchstart', '.order__btn', function () {
    $(this).removeClass('order__btn').addClass('order__btn2');
});
$(document).on('touchend', '.order__btn2', function () {
    $(this).removeClass('order__btn2').addClass('order__btn');
});


//Individualy - arrow
$(document).on('mousedown', '.individualy-arrow__btn', function () {
    $(this).removeClass('individualy-arrow__btn').addClass('individualy-arrow__btn2');
});
$(document).on('mouseup', '.individualy-arrow__btn2', function () {
    $(this).removeClass('individualy-arrow__btn2').addClass('individualy-arrow__btn');
});


$(document).on('touchstart', '.individualy-arrow__btn', function () {
    $(this).removeClass('individualy-arrow__btn').addClass('individualy-arrow__btn2');
});
$(document).on('touchend', '.individualy-arrow__btn2', function () {
    $(this).removeClass('individualy-arrow__btn2').addClass('individualy-arrow__btn');
});


if (document.documentElement.clientWidth < 965) {
    $('.individualy-arrow__btn').click(function (event) {
        event.preventDefault();
        $('#svg__in').toggle();
        $('#svg__in2').toggle();
    });
}


//Couple - arrow
$(document).on('mousedown', '.couple-arrow__btn', function () {
    $(this).removeClass('couple-arrow__btn').addClass('couple-arrow__btn2');
});
$(document).on('mouseup', '.couple-arrow__btn2', function () {
    $(this).removeClass('couple-arrow__btn2').addClass('couple-arrow__btn');
});


$(document).on('touchstart', '.couple-arrow__btn', function () {
    $(this).removeClass('couple-arrow__btn').addClass('couple-arrow__btn2');
});
$(document).on('touchend', '.couple-arrow__btn2', function () {
    $(this).removeClass('couple-arrow__btn2').addClass('couple-arrow__btn');
});


if (document.documentElement.clientWidth < 965) {
    $('.couple-arrow__btn').click(function (event) {
        event.preventDefault();
        $('#svg__co').toggle();
        $('#svg__co2').toggle();
    });
}


//Woman - arrow
$(document).on('mousedown', '.woman-arrow__btn', function () {
    $(this).removeClass('woman-arrow__btn').addClass('woman-arrow__btn2');
});
$(document).on('mouseup', '.woman-arrow__btn2', function () {
    $(this).removeClass('woman-arrow__btn2').addClass('woman-arrow__btn');
});


$(document).on('touchstart', '.woman-arrow__btn', function () {
    $(this).removeClass('woman-arrow__btn').addClass('woman-arrow__btn2');
});
$(document).on('touchend', '.woman-arrow__btn2', function () {
    $(this).removeClass('woman-arrow__btn2').addClass('woman-arrow__btn');
});


if (document.documentElement.clientWidth < 965) {
    $('.woman-arrow__btn').click(function (event) {
        event.preventDefault();
        $('#svg__wo').toggle();
        $('#svg__wo2').toggle();
    });
}



//Button - arrow
$(document).on('mousedown', '.arrow__btn', function () {
    $(this).removeClass('arrow__btn').addClass('arrow__btn2');
});
$(document).on('mouseup', '.arrow__btn2', function () {
    $(this).removeClass('arrow__btn2').addClass('arrow__btn');
});


$(document).on('touchstart', '.arrow__btn', function () {
    $(this).removeClass('arrow__btn').addClass('arrow__btn2');
});
$(document).on('touchend', '.arrow__btn2', function () {
    $(this).removeClass('arrow__btn2').addClass('arrow__btn');
});


//All - arrow
$(document).on('mousedown', '.all-btn__block', function () {
    $(this).removeClass('all-btn__block').addClass('all-btn__block2');
});
$(document).on('mouseup', '.all-btn__block2', function () {
    $(this).removeClass('all-btn__block2').addClass('all-btn__block');
});


$(document).on('touchstart', '.all-btn__block', function () {
    $(this).removeClass('all-btn__block').addClass('all-btn__block2');
});
$(document).on('touchend', '.all-btn__block2', function () {
    $(this).removeClass('all-btn__block2').addClass('all-btn__block');
});


if (document.documentElement.clientWidth < 965) {
    $('.all__block').click(function (event) {
        event.preventDefault();
        $('#svg__all').toggle();
        $('#svg__all2').toggle();
    });
}


// Order
$(document).on('touchstart', '.order-btn__block', function () {
    $(this).removeClass('order-btn__block').addClass('order-btn__block2');
});
$(document).on('touchend', '.order-btn__block2', function () {
    $(this).removeClass('order-btn__block2').addClass('order-btn__block');
});


if (document.documentElement.clientWidth < 965) {
    $('.order-btn__block').click(function (event) {
        event.preventDefault();
        $('#svg__or').toggle();
        $('#svg__or2').toggle();
    });
}


//Ratte
$(document).on('mousedown', '.studio__block', function () {
    $(this).removeClass('studio__block').addClass('studio__block2');
});
$(document).on('mouseup', '.studio__block2', function () {
    $(this).removeClass('studio__block2').addClass('studio__block');
});


$(document).on('touchstart', '.studio__block', function () {
    $(this).removeClass('studio__block').addClass('studio__block2');
});
$(document).on('touchend', '.studio__block2', function () {
    $(this).removeClass('studio__block2').addClass('studio__block');
});


if (document.documentElement.clientWidth < 965) {
    $('.studio__block').click(function (event) {
        event.preventDefault();
        $('#svg__st').toggle();
        $('#svg__st2').toggle();
    });
}


$(document).on('mousedown', '.location__block', function () {
    $(this).removeClass('location__block').addClass('location__block2');
});
$(document).on('mouseup', '.location__block2', function () {
    $(this).removeClass('location__block2').addClass('location__block');
});


$(document).on('touchstart', '.location__block', function () {
    $(this).removeClass('location__block').addClass('location__block2');
});
$(document).on('touchend', '.location__block2', function () {
    $(this).removeClass('location__block2').addClass('location__block');
});


if (document.documentElement.clientWidth < 965) {
    $('.location__block').click(function (event) {
        event.preventDefault();
        $('#svg__lo').toggle();
        $('#svg__lo2').toggle();
    });
}


//Contacts - button
$(document).on('mousedown', '.contacts-order__btn', function () {
    $(this).removeClass('contacts-order__btn').addClass('contacts-order__btn2');
});
$(document).on('mouseup', '.contacts-order__btn2', function () {
    $(this).removeClass('contacts-order__btn2').addClass('contacts-order__btn');
});


$(document).on('touchstart', '.contacts-order__btn', function () {
    $(this).removeClass('contacts-order__btn').addClass('contacts-order__btn2');
});
$(document).on('touchend', '.contacts-order__btn2', function () {
    $(this).removeClass('contacts-order__btn2').addClass('contacts-order__btn');
});


// Back
$(document).on('touchstart', '.back-btn__block', function () {
    $(this).removeClass('back-btn__block').addClass('back-btn__block2');
});
$(document).on('touchend', '.back-btn__block2', function () {
    $(this).removeClass('back-btn__block2').addClass('back-btn__block');
});


if (document.documentElement.clientWidth < 325) {
    $('.back__img-btn').click(function (event) {
        event.preventDefault();
        $('#back').toggle();
        $('#back').toggle();
    });
}

// Anchor
// $("body").on('click', '[href*="#"]', function (e) {
//     let fixed_offset = 100;
//     $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
//     e.preventDefault();
// });


// Tabs
let tab = document.querySelectorAll('.table__title'),
    tabContent = document.querySelectorAll('.section');

tab.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
        hideTab();
        this.classList.add('active');
        tabContent[i].classList.add('active');
    });
});

function hideTab() {
    tab.forEach((item) => {
        item.classList.remove('active');
    });
    tabContent.forEach((item) => {
        item.classList.remove('active');
    });
}


if (document.documentElement.clientWidth < 325) {
    $('.studio__block').click(function (event) {
        event.preventDefault();
        $('#svg__st3').toggle();
        $('#svg__st4').toggle();
    });
}


if (document.documentElement.clientWidth < 325) {
    $('.rate__block').click(function (event) {
        event.preventDefault();
        $('#svg__lo3').toggle();
        $('#svg__lo4').toggle();
    });
}


$(document).on('touchstart', '.nav__link', function () {
    $(this).removeClass('nav__link').addClass('nav__link2');
});
$(document).on('touchend', '.nav__link2', function () {
    $(this).removeClass('nav__link2').addClass('nav__link');
});


// Form
$(document).on('mousedown', '.form-arrow__btn', function () {
    $(this).removeClass('form-arrow__btn').addClass('form-arrow__btn2');
});
$(document).on('mouseup', '.form-arrow__btn2', function () {
    $(this).removeClass('form-arrow__btn2').addClass('form-arrow__btn');
});


$(document).on('touchstart', '.form-arrow__btn', function () {
    $(this).removeClass('form-arrow__btn').addClass('form-arrow__btn2');
});
$(document).on('touchend', '.form-arrow__btn2', function () {
    $(this).removeClass('form-arrow__btn2').addClass('form-arrow__btn');
});


// Wo
$(document).on('mousedown', '.wo__btn', function () {
    $(this).removeClass('wo__btn').addClass('wo__btn2');
});
$(document).on('mouseup', '.wo__btn2', function () {
    $(this).removeClass('wo__btn2').addClass('wo__btn');
});


$(document).on('touchstart', '.wo__btn', function () {
    $(this).removeClass('wo__btn').addClass('wo__btn2');
});
$(document).on('touchend', '.wo__btn2', function () {
    $(this).removeClass('wo__btn2').addClass('wo__btn');
});


if (document.documentElement.clientWidth < 965) {
    $('.wo__btn').click(function (event) {
        event.preventDefault();
        $('#ex').toggle();
        $('#ex2').toggle();
    });
}


// Manbreast
if (document.documentElement.clientWidth < 965) {
    $('.arrow__btn').click(function (event) {
        event.preventDefault();
        $('#man').toggle();
        $('#man2').toggle();
    });
}


// Twoback
if (document.documentElement.clientWidth < 965) {
    $('.arrow__btn').click(function (event) {
        event.preventDefault();
        $('#two').toggle();
        $('#two2').toggle();
    });
}


// Womansit
if (document.documentElement.clientWidth < 965) {
    $('.arrow__btn').click(function (event) {
        event.preventDefault();
        $('#wom').toggle();
        $('#wom2').toggle();
    });
}


// Form - arrow
if (document.documentElement.clientWidth < 965) {
    $('.form-arrow').click(function (event) {
        event.preventDefault();
        $('#svd__form').toggle();
        $('#svd__form2').toggle();
    });
}


// Popup
let popupBg = document.querySelector('.popup__body'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.contacts-order__btn, .order__btn, .all-btn__block, .order-btn__block, .studio__block, .location__block'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__close');  // Кнопка для скрытия окна


openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});


window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('#tel'), function (input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });
});


// Ajax
$(document).ready(function () {
    //E-mail Ajax Send
    $('.form').submit(function () { //Change
        console.log(123);
        let th = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php', //Change
            data: th.serialize()
        }).done(function () {
            $(th).find('.popup2').addClass('active').fadeIn();
            setTimeout(function () {
                $(th).find('.popup2').removeClass('active').fadeOut();
                th.trigger('reset');
            }, 2000);
        });
        return false;
    });
});