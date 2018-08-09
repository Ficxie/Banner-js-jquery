$(document).ready(function () {
    var warp = $("#WFWrap");
    var boxes = warp.children("div");

    waterfall(warp,boxes);

    $(window).resize(function () {
        this.location.reload();
    })
})

function waterfall(warp,boxes) {
    var boxWidth = boxes.eq(0).width()+10;
    var windowWidth = $(window).width();
    var colsNumber = Math.floor(windowWidth/boxWidth);

    warp.width(boxWidth*colsNumber);

    var everyHeight = new  Array();
    for (var i = 0; i<boxes.length;i++){
        if (i<colsNumber){
            everyHeight[i] = boxes.eq(i).height()+10;
        } else {
            var minHeight = Math.min.apply(null,everyHeight);
            var minIndex = gtIndex(minHeight,everyHeight);
            boxes.eq(i).css({
                'position':'absolute',
                'top':minHeight,
                'left':boxes.eq(minIndex).position().left,
                'opacity':'0'
            }).stop().animate({
                'opacity':'1'
            });
            everyHeight[minIndex] += boxes.eq(i).height() + 10;
        }
    }

}

function gtIndex(minHeight,everyHeight) {
    for (index in everyHeight){
        if (everyHeight[index] == minHeight){
            return index;
        }
    }
}