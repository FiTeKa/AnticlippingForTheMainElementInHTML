/*
 *   Script made by FiTeKa
 *   https://github.com/FiTeKa/AnticlippingForTheMainElementInHTML
 *   This script is free to use if you are leaving this comments are in the script
 */
window.addEventListener('load', () => { 
     let headerHeight = document.querySelector('header').offsetHeight 
     let footerHeight = document.querySelector('footer').offsetHeight 
     let mainElemnt = document.querySelector('main') 
     mainElemnt.style.marginTop = `${headerHeight}px` 
     mainElemnt.style.marginBottom = `${footerHeight}px` 
 })
