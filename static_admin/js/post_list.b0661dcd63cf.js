// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

//  Messages
const messegesNotifications = document.querySelector('#messeges-notifications');
const messeges = document.querySelector('.messeges');

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// Remove active class 
const changeActiveItems = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItems();
        item.classList.add('active')
    })
})

// MESSAGES
messegesNotifications.addEventListener('click', () => {
    messegesNotifications.querySelector('.notification-count').style.display = 'none';
})

// Theme Customisation

// opened modal
const openThemeModal = () => {
    themeModal.style.display = 'grid'; 
}

// Close modal

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }

}

// closed modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// remove active class from span

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

// Fonts

fontSizes.forEach(size => {
    
    size.addEventListener('click', () => {

    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
       
    if(size.classList.contains('font-size-1')){
        fontSize = '10px'; 
        root.style.setProperty('----sticky-top-left', '5.4rem');
    }else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
    }else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left', '-2rem');
    }else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('----sticky-top-left', '-5rem');
    }else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('----sticky-top-left', '-10rem');
    }
    
    // change font size in html
    document.querySelector('html').style.fontSize = fontSize;

    })

})

// remove active in background color span
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        // remove active in background color span
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue); 

    })
})


// Theme Background Colors
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change BG colors
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

Bg1.addEventListener('click', () => {
    lightColorLightness = '25%';
    whiteColorLightness = '100%';
    darkColorLightness = '95%';

    // add active class
    Bg1.classList.add('active');
    // remove active from other classes
    Bg2.classList.remove('active')
    Bg3.classList.remove('active')
    changeBG();
})

Bg2.addEventListener('click', () => {
    lightColorLightness = '95%';
    whiteColorLightness = '20%';
    darkColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove active from other classes
    Bg1.classList.remove('active')
    Bg3.classList.remove('active')
    changeBG();
})

Bg3.addEventListener('click', () => {
    lightColorLightness = '95%';
    whiteColorLightness = '10%';
    darkColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // remove active from other classes
    Bg1.classList.remove('active')
    Bg2.classList.remove('active')
    changeBG();
})



// End