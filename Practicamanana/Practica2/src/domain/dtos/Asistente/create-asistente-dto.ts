
export class CreateAsistenteDto {
  private constructor(
    public readonly nombre: string,
    public readonly correo: string,
    public readonly telefono: string,
    public readonly clienteId: number | null,
    public readonly metodoPagoId: number | null,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateAsistenteDto?] {
    const { nombre, correo, telefono, clienteId, metodoPagoId } = props;

    if (!nombre) return ['nombre property is required', undefined];
    if (!correo) return ['correo property is required', undefined];
    if (!telefono) return ['telefono property is required', undefined];
  

    return [undefined, new CreateAsistenteDto(nombre, correo, telefono, clienteId, metodoPagoId)];
  }
}

