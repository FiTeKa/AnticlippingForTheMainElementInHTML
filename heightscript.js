/*
 *   Script made by FiTeKa
 *   https://github.com/FiTeKa/AnticlippingForTheMainElementInHTML
 *   This script is free to use if you are leaving this comments in the script and you arent't using it to make money or for a business
 */
window.addEventListener('load', () => { 
     let headerHeight = document.querySelector('header').offsetHeight 
     let footerHeight = document.querySelector('footer').offsetHeight 
     let mainElemnt = document.querySelector('main') 
     mainElemnt.style.marginTop = `${headerHeight}px` 
     mainElemnt.style.marginBottom = `${footerHeight}px` 
 })
