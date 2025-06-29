window.addEventListener('load', function () {
    rateForFun();
    ratingJs();
});
function rateForFun() {
    var readonly = $(this).data('readonly');
    $('.default-rating').raty({
        readOnly: function () {
            return $(this).data('readonly');
        },
        score: function () {
            return $(this).attr('data-score');
        },
    });
}

function ratingJs() {
    var readdddonly;
    var style = '-big';
    readdddonly = $('#default-demo').attr('data-readonly');
    $('#default-demo').raty({
        readOnly: readdddonly,
        cancelOff: dir_theme + 'rs/plugins/raty/images/cancel-off.png',
        cancelOn: dir_theme + 'rs/plugins/raty/images/cancel-on.png',
        starHalf: dir_theme + 'rs/plugins/raty/images/star-half' + style + '.png',
        starOff: dir_theme + 'rs/plugins/raty/images/star-off' + style + '.png',
        starOn: dir_theme + 'rs/plugins/raty/images/star-on' + style + '.png',
        half: true,
        number: 5,
        numberMax: 5,
        score: function () {
            return $(this).attr('data-score');
        },
        click: function (score, evt) {
            var game_id = $(this).attr('data-id');
            var rate = $(this).attr('data-score');
            var url = domain_url + '/rate-game.ajax';
            var data = {'game_id': game_id, 'score': score};
            $.ajax({
                type: "POST",
                url: url,
                data: data,
                cache: false,
                success: function (html) {
                    var data = $.parseJSON(html);
                    $('#countrate').text(data.rate_count + ' votes ');
                    $('#averagerate').text(data.rate_average);
                    $('#gorgeous-bar').css("width", data.gorgeous + "%");
                    $('#gorgeous-bar-value').html(data.gorgeous + "%");
                    $('#good-bar').css("width", data.good + "%");
                    $('#good-bar-value').html(data.good + "%");
                    $('#regular-bar').css("width", data.regular + "%");
                    $('#regular-bar-value').html(data.regular + "%");
                    $('#poor-bar').css("width", data.poor + "%");
                    $('#poor-bar-value').html(data.poor + "%");
                    $('#bad-bar').css("width", data.bad + "%");
                    $('#bad-bar-value').html(data.bad + "%");
                    $(".rating-num").addClass(data.class);
                    $(".rate-title").addClass(data.class);
                    $(".rate-title").html(data.name);
                    $('#default-demo').raty({
                        readOnly: true,
                        cancelOff: dir_theme + 'rs/plugins/raty/images/cancel-off.png',
                        cancelOn: dir_theme + 'rs/plugins/raty/images/cancel-on.png',
                        starHalf: dir_theme + 'rs/plugins/raty/images/star-half' + style + '.png',
                        starOff: dir_theme + 'rs/plugins/raty/images/star-off' + style + '.png',
                        starOn: dir_theme + 'rs/plugins/raty/images/star-on' + style + '.png',
                        half: true,
                        number: 5,
                        numberMax: 5,
                        score: score
                    });
                    $("#default-demo").css("cursor: pointer;");
                },
                error: function () {
                    $('#default-demo').raty({
                        readOnly: true,
                        cancelOff: dir_theme + 'rs/plugins/raty/images/cancel-off.png',
                        cancelOn: dir_theme + 'rs/plugins/raty/images/cancel-on.png',
                        starHalf: dir_theme + 'rs/plugins/raty/images/star-half' + style + '.png',
                        starOff: dir_theme + 'rs/plugins/raty/images/star-off' + style + '.png',
                        starOn: dir_theme + 'rs/plugins/raty/images/star-on' + style + '.png',
                        half: true,
                        number: 5,
                        numberMax: 5,
                        score: rate,
                    });
                }
            });
        }
    });
}