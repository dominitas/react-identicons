export type RGBA = [number, number, number, number?];

export interface IdenticonOptions {
  background?: RGBA,
  foreground?: RGBA,
  margin?: number,
  size?: number,
  saturation?: number,
  brightness?: number,
  format?: 'svg' | 'png',
}

export class Identicon {
  public options: Required<IdenticonOptions>;

  constructor(hash: string, options: IdenticonOptions);

  public toString(raw?: boolean): string;
}
