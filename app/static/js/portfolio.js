// NEXUS ORGANIZER gif play
document.querySelector('.no1').addEventListener('mouseover', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/static/images/NEXUSORGANIZER.gif)';
});
document.querySelector('.no1').addEventListener('mouseout', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/static/images/firstNEXUS.png)';
});
document.querySelector('.no2').addEventListener('mouseover', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/static/images/NEXUSORGANIZER.gif)';
});
document.querySelector('.no2').addEventListener('mouseout', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/static/images/firstNEXUS.png)';
});


// HAMBURGER functionality
// click ham
document.querySelector('.hamham').addEventListener('click', function() {
    document.querySelector('.hamRightHeader-dropdown').style.display = 'unset';
    document.querySelector('.greyout').style.display = 'unset';
});
// exit out of grey out
document.querySelector('.greyout').addEventListener('click', function() {
    removeFake();
});
document.querySelector('.exitFake').addEventListener('click', function() {
    removeFake();
});
// exits mobile header menu
function removeFake() {
    document.querySelector('.hamRightHeader-dropdown').style.display = 'none';
    document.querySelector('.greyout').style.display = 'none';
};
