let heightElement = 0;

$(() => {
    $('#action-act').click(async function(e) {
        const elementAction = ["#export", "#test-ops-back-up-data", "#ka-upload"];
        console.log(heightElement)
        if (this.src.includes('collapse')) {
            this.src = 'icons/expand.svg';
            await elementAction.forEach(i => $(i).hide());
            $('#suite-open-dropdown').css('top', '-61px');
            $('#workspace').css('max-height', heightElement + 90);
        } else {
            this.src = 'icons/collapse.svg';
            await elementAction.forEach(i => $(i).show());
            $('#suite-open-dropdown').css('top', '27px');
            $('#workspace').css('max-height', heightElement);
        }
    })
})

$(window).resize(function() {
    let height = $(window).height();
    if (height < 723) {
        heightElement = 300;
    } else if (height > 724 && height < 839) {
        heightElement = 400;
    } else {
        heightElement = 570;
    }
    $('#workspace').css('max-height', heightElement);
});