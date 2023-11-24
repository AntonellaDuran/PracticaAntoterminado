export class AsistenteEntity {
  constructor(
    public id: number,
    public nombre: string,
    public correo: string,
    public telefono: string,
    public clienteId: number | null,
    public metodoPagoId: number | null,
  ) {}

  public static fromObject(object: { [key: string]: any }): AsistenteEntity {
    const { id, nombre, correo, telefono, clienteId, metodoPagoId } = object;
    if (!id) throw 'Id is required';
    if (!nombre) throw 'nombre property is required';
    if (!correo) throw 'correo property is required';
    if (!telefono) throw 'telefono property is required';

    return new AsistenteEntity(id, nombre, correo, telefono, clienteId, metodoPagoId);
  }
}

  
  
  