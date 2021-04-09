function DivideHeightEqually(division) {
    if (!division){
        test('khong tim thay phan tu');
        return;
    }
    // test(division);
    $number = division.find('> *').length;
    $height = division.height() / $number;    
    test(division);
    $(division).find('> *').each(
        function () {
            $(this).outerHeight($height);
        }
    )
}
