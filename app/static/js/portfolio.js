// NEXUS ORGANIZER
// document.querySelector('.no1').addEventListener('click', function() {
//     window.open('https://gist.github.com/NoahRR/9c12e841502d5dff0fb79a4bc3255d78');
// })
document.querySelector('.no1').addEventListener('mouseover', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Webp.net-gifmaker-3-2.gif)';
})
document.querySelector('.no1').addEventListener('mouseout', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-17-at-3.48.20-PM.png)';
})
// document.querySelector('.no2').addEventListener('click', function() {
//     window.open('https://gist.github.com/NoahRR/9c12e841502d5dff0fb79a4bc3255d78');
// })
document.querySelector('.no2').addEventListener('mouseover', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Webp.net-gifmaker-3-2.gif)';
})
document.querySelector('.no2').addEventListener('mouseout', function() {
    this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-17-at-3.48.20-PM.png)';
})

// // OLD PORTFOLIO
// document.querySelector('#outdatedportfolio').addEventListener('click', function() {
//     // window.open('https://noahrr.github.io/Homepage/index.html');
//     window.open('https://github.com/NoahRR/Homepage');
// })
// document.querySelector('#outdatedportfolio').addEventListener('mouseover', function() {
//     this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Webp.net-gifmaker-3-1.gif)';
// })
// document.querySelector('#outdatedportfolio').addEventListener('mouseout', function() {
//     this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-17-at-11.28.46-AM.png)';
// })

// // CS50 FINANCE
// document.querySelector('#cs50-finance').addEventListener('click', function() {
//     window.open('https://github.com/NoahRR/CS50-projects/tree/master/finance');
// })
// document.querySelector('#cs50-finance').addEventListener('mouseover', function() {
//     this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Webp.net-gifmaker-4.gif)';
// })
// document.querySelector('#cs50-finance').addEventListener('mouseout', function() {
//     this.style.backgroundImage = 'url(https://noahrayroberts.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-17-at-1.11.46-PM.png)';
// })

// CS50 ALL
// document.querySelector('#CS50all').addEventListener('click', function() {
//     window.open('https://github.com/NoahRR/CS50-projects');
// })

// // PROJECT FILTER BUTTON FUNCTIONALITY
// document.querySelectorAll('#projfilter button').forEach(function(item) {
//     item.addEventListener('click', function() {
        
//         // swap 'disabled/clicked' button style
//         document.querySelectorAll('#projfilter button').forEach(function(item2) {
//             item2.classList.remove('projselection');
//         })
//         item.classList.add('projselection');
        
//         // functionality
//         if (item.innerText == 'Show Only Websites') {
//             document.querySelectorAll('.cont div').forEach(function(item3) {
//                 if (!item3.classList.contains('switchWebsite')) {
//                     item3.style.display = 'none';
//                 }
//             })
//             document.querySelector('#outdatedportfolio').style.gridColumn = 'span 4';
//             document.querySelector('#cs50-finance').style.gridColumn = 'span 3';
//         } else if (item.innerText == 'Show All') {
//             document.querySelectorAll('.cont div').forEach(function(item3) {
//                 item3.style.display = 'unset';
//             })
//             document.querySelector('.no2').style.display = 'none';
//             document.querySelector('.sw2').style.display = 'none';
//             document.querySelector('#outdatedportfolio').style.gridColumn = 'span 2';
//             document.querySelector('#cs50-finance').style.gridColumn = 'span 2';
//         }
//     })
// })

// YOUTUBE
// document.querySelector('#youtube').addEventListener('click', function() {
//     window.open('https://www.youtube.com/channel/UCprzf1JVJD835UG0QND2D3g?view_as=subscriber')
// })

// // SOUNDCLOUD
// document.querySelector('#soundcloud').addEventListener('click', function() {
//     window.open('https://soundcloud.com/mielmeanshoney')
// })

// document.querySelector('#fakeHeaderPortfolio').addEventListener('click', function() {
//     document.querySelector('#Portfolio_highlights_loc').scrollIntoView({behavior: 'smooth'});
// })
// document.querySelector('.fakeHeaderAbout').addEventListener('click', function() {
//     document.querySelector('#mystory').scrollIntoView();
// })
// document.querySelector('.fakeHeaderSocial').addEventListener('click', function() {
//     document.querySelector('#endcontact').scrollIntoView();
// })

// document.querySelector('.fakeHeaderSocialH').addEventListener('click', function() {
//     document.querySelector('#endcontact').scrollIntoView();
//     removeFake();
// })
// document.querySelector('#fakeHeaderLeftHOME').addEventListener('click', function() {
//     document.querySelector('#big_body').scrollIntoView({behavior: 'smooth'});
//     removeFake();
// })

// HAMBURGER functionality
// click ham
document.querySelector('.hamham').addEventListener('click', function() {
    document.querySelector('.hamRightHeader-dropdown').style.display = 'unset';
    document.querySelector('.greyout').style.display = 'unset';
})
// exit out of grey out
document.querySelector('.greyout').addEventListener('click', function() {
    removeFake();
})
document.querySelector('.exitFake').addEventListener('click', function() {
    removeFake();
})
function removeFake() {
    document.querySelector('.hamRightHeader-dropdown').style.display = 'none';
    document.querySelector('.greyout').style.display = 'none';
}

document.querySelector('.see_resume_btn').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1qZ7sTecy2ftDcbx9aJuqS7yiZqJU3iyi/view?usp=sharing', '_blank');
})

// Location Changes
document.querySelector('#see_port_btn').addEventListener('click', function() {
    // window.open('#Portfolio_highlights_loc');
    document.querySelector('#Portfolio_highlights_loc').scrollIntoView({behavior: 'smooth'});
});


document.querySelector('#fakeHeaderLeftHOME').addEventListener('click', function() {
    document.querySelector('#big_body').scrollIntoView({behavior: 'smooth'});
    removeFake();
})
document.querySelector('#fakeHeaderPortfolioH').addEventListener('click', function() {
    document.querySelector('#Portfolio_highlights_loc').scrollIntoView({behavior: 'smooth'});
    removeFake();
})
document.querySelector('#fakeHeaderPortfolio').addEventListener('click', function() {
    document.querySelector('#Portfolio_highlights_loc').scrollIntoView({behavior: 'smooth'});
    removeFake();
})
