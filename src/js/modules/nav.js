

/*=============== ACCORDION ===============*/
const $navItems = document.querySelectorAll('.nav__item')

// 1. Selecionar cada item
$navItems.forEach((item) =>{
    const $accordionTitle = item.querySelector('.nav__header')

    // 2. Seleccionar cada click del header
    $accordionTitle.addEventListener('click', () =>{
        // 7. Crear la variable
        const openItem = document.querySelector('.nav-open')
        
        // 5. Llamar a la funcion toggle item
        toggleItem(item)

        // 8. Validar si existe la clase
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Crear una funcion tipo constante
const toggleItem = (item) =>{
    // 3.1 Crear la variable
    const $navDropdown = item.querySelector('.nav-dropdown')

    // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
    if(item.classList.contains('nav-open')){
			$navDropdown.removeAttribute('style')
        item.classList.remove('nav-open')
    }else{
        // 4. Agregar el height maximo del content
        $navDropdown.style.height = $navDropdown.scrollHeight + 'px'
        item.classList.add('nav-open')
    }
}