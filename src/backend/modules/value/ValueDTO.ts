export class ValueDTO {

  id: number;
  value: string;
}

export type CreateValueDTO = Pick<ValueDTO, 'value'>
export type UpdateValueDTO = Pick<ValueDTO, 'value'>
