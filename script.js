const loginBtn = document.querySelector(".login-btn");
const loginContainer = document.querySelector(".login-container");
const subscribeBtn = document.querySelector(".subscribe-btn");
const subscribeContainer = document.querySelector(".subscribe-container");
const closeLogin = document.querySelector('.close-login')
const closeSubs = document.querySelector('.close-subs')
const mainContainer = document.querySelector('.main-container')
const readBtn = document.querySelector('.Read-btn')
const toggleContainer = document.querySelector('.toggle')



function showModal(selector) {
    const container = document.querySelector(selector);
    container.style.display = "block";
    requestAnimationFrame(() => {
        container.classList.add("modal-popup");
        mainContainer.classList.add('blur')

    });
}
function hideModal(selector) {
    const container = document.querySelector(selector);
    container.classList.remove("modal-popup")
    mainContainer.classList.remove('blur');

    setTimeout(() => {
        container.style.display = "none";
    }, 500)
}
loginBtn.addEventListener("click", (e) => {
    showModal('.login-container');

})
subscribeBtn.addEventListener("click", (e) => {
    showModal('.subscribe-container');
})
closeSubs.addEventListener('click', (e) => {
    hideModal(".subscribe-container")
})
closeLogin.addEventListener('click', (e) => {
    hideModal(".login-container")
})
// Toggle Manually Handle coz of some Html structure problem 
function showToggle(selector) {
    const allSelector = [
        document.querySelector(".toggle"),
        document.querySelector("#About"),
        document.querySelector(".post-container"),
        document.querySelector(".faq"),
        document.querySelector(".contact-info"),
        document.querySelector(".img-container"),
        document.querySelector(".header-container"),
    ]
    const target = document.querySelector(selector)
    allSelector.forEach(item => {
        if (target === item) {
            target.style.display = "block"
        } else {
            item.style.display = "none";
        }
    })

}
readBtn.addEventListener('click', (e) => {
    setTimeout(() => {
        showToggle('.toggle');
    }, 500)
})
// manually handle hideToggle 
function hideToggle(selector) {
    const allSelector = [
        document.querySelector(".toggle"),
        document.querySelector("#About"),
        document.querySelector(".post-container"),
        document.querySelector(".faq"),
        document.querySelector(".contact-info"),
        document.querySelector(".img-container"),
        document.querySelector(".header-container"),
    ]
    const target = document.querySelector(selector)
    allSelector.forEach(item => {
        if (item == target) {
            target.style.display = "none";
        } else {
            item.style.display = 'block';
        }
    })
}
const postCloseBtn = document.querySelector(".close-post-btn")
postCloseBtn.addEventListener('click', (e) => {
    setTimeout(() => {
        hideToggle('.toggle')
    }, 300)
})
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page from reloading

    const emailInput = document.querySelector(".input-txt");
    emailInput.value = "";
});


