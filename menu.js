fetch(menu.json)

.then(response => response.json())

.then(data =>( 
    const menuContainer = document.getElementById('menu-container');
    //Que hace? Aqui se procesan los datos JSON, ya convertidos. Se obtiene!"una referencia el container del menu en el HTML mediante getElementByID('meu-container'), y luego se itera sobre los elementos .(categorias) del menu.
    data.items.forEach(category => { 
        const categorytitle = document.createElement('h2');
        //Que hace?  Aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se anade este titulo al contenedor menu.
        categorytitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table');
        //Que hace? Se crea un elemento table para cada categoria .Ademas, se  prepara el encabezado(tablehead) con las columnas pertinentes , tableBody se inicializa vacio y se llenara con los elementos de la categoria.
        const tableHead = '<tr><th>Foto</th></tr>';
        let tableBody = '';
        // Como funciona? para cada categoria en los datos, se realizan varis pasos: se cre un elemento <h2> para el titulo de la categor, se establece su contenido de texto al nombre de la categoria (category.category), y luego se agrega al contenedor del menu.
        //Crear una tabla para los elementos de esa categoria: se genera una tabla por cada categoria. Primero se define el encabezado de la tabla (<th>foto</th><th>Descripcion</th><th>Precio</th>).

        category.items.forEach(item => { 
            tableBody += <tr>
                <td><img src= "${item.image}" alt="{item.name}"></img></td>
                <td>${item.name} - ${item.description}</td>
                <td>${item.price}</td>
                </tr>
        });
        //Que hace? para cada item dentro de category.items, se concatena una nueva fila (<tr>) a tableBody. Esta fila contiene una celda para la imagen del elemento (usando el atributo src pra la URL de la imagen y "alt" para el texto alternativo), tracelda para el nombre y la descripcion del, elemento, y una tercera celda para el precio del elemento.
        table.innerHead + tableBody;
        //Que hace? una vez complementadas todas las filas de la tabla para los elementos de una categoria, se combina el encabezado de la tabla (tableHead) con el cuerpo de la tabla (tableBody) y se establece como el contenido HTML de la tabla. Finalmente, esta tabla se añade del menu de la pagina web.

        });
    ));
    //Poblar la tabla con los elementos: Para cada item dentro de una categoria, se crea una fila (<tr></tr>) con tres celdas (<td></td>): una para la imagen (con un elemento <img>), otra para el nombre y descripcion del item