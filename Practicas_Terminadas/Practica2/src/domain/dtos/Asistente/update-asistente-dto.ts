export class UpdateAsistenteDto {
  private constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly correo: string,
    public readonly telefono: string,
    public readonly clienteId: number | null,
    public readonly metodoPagoId: number | null,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.id) returnObj.id = this.id;
    if (this.nombre) returnObj.nombre = this.nombre;
    if (this.correo) returnObj.correo = this.correo;
    if (this.telefono) returnObj.telefono = this.telefono;
    if (this.clienteId) returnObj.clienteId = this.clienteId;
    if (this.metodoPagoId) returnObj.metodoPagoId = this.metodoPagoId;
    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateAsistenteDto?] {
    const { id, nombre, correo, telefono, clienteId, metodoPagoId } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }
    if (!id && !nombre && !correo && !telefono && !clienteId && !metodoPagoId) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateAsistenteDto(id, nombre, correo, telefono, clienteId, metodoPagoId)];
  }
}
