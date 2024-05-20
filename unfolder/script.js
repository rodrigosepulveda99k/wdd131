// Acceso al formulario de notas
const noteForm = document.getElementById('noteForm');

// Acción al enviar el formulario de notas
noteForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const datetime = document.getElementById('datetime').value;

    // Crear un objeto de nota
    const note = {
        name: name,
        address: address,
        datetime: datetime
    };

    // Llamar a una función para agregar la nota al calendario
    agregarNotaAlCalendario(note);

    // Limpiar el formulario
    noteForm.reset();
});

// Función para agregar la nota al calendario
function agregarNotaAlCalendario(nota) {
    // Aquí puedes agregar el código para agregar la nota al calendario
    // Por ejemplo, podrías actualizar la lista de notas en la página
    const notesList = document.getElementById('notesList');
    const listItem = document.createElement('li');
    listItem.textContent = `${nota.name} - ${nota.address} - ${nota.datetime}`;
    notesList.appendChild(listItem);
}
