var main = function () {
"use strict";
var toDos = [
"Buy groceries"
"Update few new tasks"
"Prepare to lesson on Monday"
"Reply on LinkedIn"
"Go for a walk"
"Finish with book"
];
var tabNumber;
for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
$(tabSelector).on("click", function () {
$(".tabs span").removeClass("active");
$(this).addClass("active");
return false;
});
}
};