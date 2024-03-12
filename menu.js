fetch(menu.json)

.then(response => response.json())

.then(data =>( 
    const menuContainer = document.getElementById('menu-container');
    //Que hace? Aqui se procesan los datos JSON, ya convertidos. Se obtiene una referencia el container del menu en el HTML mediante getElementByID('meu-container'), y luego se itera sobre los elementos .(categorias) del menu.
    data.items.forEach(category => { 
        const categorytitle = document.createElement('h2');
        //Que hace?  Aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se anade este titulo al contenedor menu.
        categorytitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table');
        //Que hace? Se crea un elemento table para cada categoria .Ademas, se  prepara el encabezado(tablehead) con las columnas pertinentes , tableBody se inicializa vacio y se llenara con los elementos de la categoria.
        const tableHead = '<tr><th>Foto</th></tr>';
        let tableBody = '';

        });
    ))