// NEXUS ORGANIZER gif play
document.querySelector('.no1').addEventListener('mouseover', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Webp.net-gifmaker-3-2.gif)';
});
document.querySelector('.no1').addEventListener('mouseout', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-17-at-3.48.20-PM.png)';
});
document.querySelector('.no2').addEventListener('mouseover', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Webp.net-gifmaker-3-2.gif)';
});
document.querySelector('.no2').addEventListener('mouseout', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-17-at-3.48.20-PM.png)';
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
function removeFake() {
    document.querySelector('.hamRightHeader-dropdown').style.display = 'none';
    document.querySelector('.greyout').style.display = 'none';
};
