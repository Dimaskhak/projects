document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content__active')
    })
  })
})
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger-menu').classList.add('burger-menu__active')
  })
  document.querySelector('.burger__btn__exit').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.remove('burger-menu__active')
  })
})

