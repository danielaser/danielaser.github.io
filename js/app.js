const sectionPage = new fullpage('#fullpage', {
    autoScrolling: true,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: false,
    navigation: true,
    menu: '#menu',
    anchors: ['home', 'about', 'myProjects', 'contact'],
    navigationTooltips: ['Home', 'About', 'MyProjects', 'Contact'],
    showActiveTooltip: false,
    sectionsColor: ['#000', '#c2c2c2', '#000'],
    verticalCentered: true,
    controlArrows: true,
    slidesNavigation: false,
    afterLoad: function (origin, destination) {
        if (destination.anchor == 'contact') {
            document.querySelector('.footer').querySelector('h2').style.opacity = 1;
        }
    }
});