const tbody = document.getElementById("tbody");

class Lista {
	async getDatos() {
		const resString = await fetch(
			"http://localhost/GinaLista/assets/php/datos.php"
		);
		const resJson = await resString.json();
		const { ok, publicaciones } = resJson;
		let text = "";
		if (ok) {
			if (publicaciones.length > 0) {
				publicaciones.map((publicacion) => {
					const elem = new Elemento();
					text += elem.renderElemento(publicacion);
				});
			}
		}
		return text;
	}

	async buildPublicaciones() {
		tbody.innerHTML = await this.getDatos()
		setTimeout(async () => {
			await this.buildPublicaciones();
		} , 2000)
	}
}

class Elemento extends Lista {
	constructor() {
		super();
	}

	renderElemento(elemento) {
		const text = `
    <tr>
      <td> ${elemento.ID} </td>
      <td> ${elemento.DATO} </td>
      <td> ${elemento.FECHA} </td>
    </tr>
    `;
		return text;
	}
}

const Lis = new Lista();
Lis.buildPublicaciones();
