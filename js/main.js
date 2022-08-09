const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し

});

$(function () {
    // liの数を取得
    const listItems = $(".js-accordion .works-i").length;
    $(".js-accordion").each(function () {
        // 最初に表示させるliの数
        let num = 2,
            // 閉じた時に表示させるliの数
            closeNum = num - 1;
        // 最初はもっと見るボタン表示、閉じるボタン非表示
        $(this).find(".js-btn-more").show();
        $(this).find(".js-btn-close").hide();
        // 5行目まで表示
        $(this)
            .find(".works-i:not(:lt(" + num + "))")
            .hide();
        // もっと見るボタンがクリックされた時
        $(".js-btn-more").click(function () {
            // numに+5ずつしていく = 5行ずつ追加する
            num += 1;
            $(this)
                .parent()
                .find(".works-i:lt(" + num + ")")
                .slideDown();
            // liの数よりnumが多い時、
            if (listItems <= num) {
                // もっと見るボタン非表示
                $(".js-btn-more").hide();
                // 閉じるボタン表示
                $(".js-btn-close").show();
                // 閉じるボタンがクリックされたら、
                $(".js-btn-close").click(function () {
                    $(this)
                        .parent()
                        .find(".works-i:gt(" + closeNum + ")")
                        // 6行目以降は非表示
                        .slideUp();
                    // 閉じるボタンを非表示
                    $(this).hide();
                    // もっと見るボタン表示に
                    $(".js-btn-more").show();
                });
            }
        });
    });
});


