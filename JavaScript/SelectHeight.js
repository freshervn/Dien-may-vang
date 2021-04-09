function SetHeight(node) {
    var $id = node.attr('data-targer-height');
    var $height = $('#' + $id).height();
    node.outerHeight($height);
}
