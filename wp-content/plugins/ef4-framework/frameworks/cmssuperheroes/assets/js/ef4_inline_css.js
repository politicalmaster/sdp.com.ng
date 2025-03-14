jQuery(document).ready(function ($) {
    var _inline_css = '<style data-type="zk-custom-css">';
    $(document).find('.ef4-inline-css[data-css]').each(function(){
        var _this = $(this);
        _inline_css += _this.attr('data-css');
        _this.remove();
    });
    _inline_css += "</style>";
    $('head').append(_inline_css);
});