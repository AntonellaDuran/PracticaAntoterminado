import './style.css';


(async () => {
  const response = await fetch('http://localhost:3000/api/asistente');
  const data = await response.json();

  let divTable = `<table>`;
  divTable += `<tr><th>Id</th><th>Nombre</th><th>Correo</th><th>Teléfono</th><th>ClienteId</th><th>MétodoPagoId</th><th>Acciones</th></tr>`;
  data.forEach((asistente: IAsistente) => {
    divTable += `<tr><td>${asistente.id}</td><td>${asistente.nombre}</td><td>${asistente.correo}</td><td>${asistente.telefono}</td><td>${asistente.clienteId}</td><td>${asistente.metodoPagoId}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button></td></tr>`;
  });
  divTable += `</table>`;

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable;

  const divButton = `<button class="btn btn-primary">Agregar</button>`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton;

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary');
  btnAgregar?.addEventListener('click', () => {
      const divForm = `<form>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" aria-describedby="nombre">
      </div>
      <div class="mb-3">
        <label for="correo" class="form-label">Correo</label>
        <input type="text" class="form-control" id="correo">
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Telefono</label>
        <input type="text" class="form-control" id="telefono">
      </div>
      <div class="mb-3">
        <label for="clienteId" class="form-label">Cliente ID</label>
        <input type="number" class="form-control" id="clienteId">
      </div>
      <div class="mb-3">
        <label for="metodoPagoId" class="form-label">Metodo Pago ID</label>
        <input type="number" class="form-control" id="metodoPagoId">
      </div>
      <button type='submit'  class="btn btn-save">Save</button>
      <button type='button'  class="btn btn-cancel">Cancel</button>
      </form>`;
      
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
      btnSave?.addEventListener('click', async (e) => {
          e.preventDefault();
          const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value;
          const correo = document.querySelector<HTMLInputElement>('#correo')!.value;
          const telefono = document.querySelector<HTMLInputElement>('#telefono')!.value;
          const clienteId = parseInt(document.querySelector<HTMLInputElement>('#clienteId')!.value);
          const metodoPagoId = parseInt(document.querySelector<HTMLInputElement>('#metodoPagoId')!.value);

          const response = await fetch('http://localhost:3000/api/asistente', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ nombre, correo, telefono, clienteId, metodoPagoId })
          });

          const data = await response.json();
          console.log(data);

          // Reload page
          location.reload();

      });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      console.log(id);
      await fetch(`http://localhost:3000/api/asistente/${id}`, {
        method: 'DELETE',
      });
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      const response = await fetch(`http://localhost:3000/api/asistente/${id}`);
      const data = await response.json();

      const btnCancel = `<button class="btn btn-cancel">Cancelar</button>`;
      const divForm = `<form>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" aria-describedby="nombre" value="${data.nombre}">
        </div>
        <div class="mb-3">
          <label for="correo" class="form-label">Correo</label>
          <input type="text" class="form-control" id="correo" value="${data.correo}">
        </div>
        <div class="mb-3">
          <label for="telefono" class="form-label">Teléfono</label>
          <input type="text" class="form-control" id="telefono" value="${data.telefono}">
        </div>
        <div class="mb-3">
          <label for="clienteid" class="form-label">ClienteId</label>
          <input type="text" class="form-control" id="clienteid" value="${data.clienteId}">
        </div>
        <div class="mb-3">
          <label for="metodopagoid" class="form-label">MétodoPagoId</label>
          <input type="text" class="form-control" id="metodopagoid" value="${data.metodoPagoId}">
        </div>
        <button type='submit' class="btn btn-save">Guardar</button>
        ${btnCancel}
      </form>`;
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
      const btnCancelUpdate = document.querySelector<HTMLButtonElement>('.btn-cancel');
      btnCancelUpdate?.addEventListener('click', () => {
        // Implementar lógica para cancelar la actualización
      });

      btnSave?.addEventListener('click', async (e) => {
        e.preventDefault();
        const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value;
        const correo = document.querySelector<HTMLInputElement>('#correo')!.value;
        const telefono = document.querySelector<HTMLInputElement>('#telefono')!.value;
        const clienteid = document.querySelector<HTMLInputElement>('#clienteid')!.value;
        const metodopagoid = document.querySelector<HTMLInputElement>('#metodopagoid')!.value;

        const response = await fetch(`http://localhost:3000/api/asistente/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, correo, telefono, clienteid, metodopagoid }),
        });

        const data = await response.json();
        console.log(data);
        // recargar la página
        location.reload();
      });
    });
  });
})();
