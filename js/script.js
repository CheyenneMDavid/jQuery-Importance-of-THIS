// If I use the p element, when the paragraphs are clicked on, they both disapear at the same time.
// by using the "this" keyword, the paragraphs can be clicked on individually
$('p').click(function() {
    $(this).slideToggle('slow');
});