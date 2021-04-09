// mo cacte
function openCate(evt, cityName) {
    test(cityName);
    var i, tabcontent, tablinks;
    // an het cac tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // xoa het active cua nut bam
    tablinks = document.getElementsByClassName("OpenTab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // hien thi tab
    document.getElementById(cityName).style.display = "block";
}
$(document).ready(
    function () {
        $('.OpenTab').click(
            function () {
                // test($(this));
                openCate(Event, $(this).attr('data-target'));
                // them active cho button
                $(this).addClass('active');
            }
        );
        openCate(Event, 'all');
    }
)
