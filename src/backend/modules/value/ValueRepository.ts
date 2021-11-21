import { CreateValueDTO, ValueDTO, UpdateValueDTO } from './ValueDTO';
import { singleton } from 'tsyringe';

@singleton()
export class ValueRepository {
  private values: ValueDTO[];

  constructor() {
    this.values = [
      {
        id: 1,
        value: 'valor 1',
      },
    ];
  }

  public create({ value }: CreateValueDTO) {
    const newValue: ValueDTO = {
      id: Date.now(),
      value,
    };
    this.values.push(newValue);
    return newValue;
  }

  public index() {
    return this.values;
  }

  public findById(id: number) {
    return this.values.find(value => value.id === id);
  }

  public findIndexById(id: number) {
    return this.values.findIndex(value => value.id === id);
  }

  public update(id: number, { value }: UpdateValueDTO) {
    const valueIndex = this.findIndexById(id);
    if (this.values[valueIndex]) {
      const updatedValue = {
        ...this.values[valueIndex],
        id,
        value,
      };
      this.values = [
        ...this.values.filter(record => record.id !== id),
        updatedValue,
      ];
      return updatedValue;
    } else return undefined;
  }

  public delete(id: number) {
    this.values = this.values.filter(record => record.id !== id);
    return;
  }
}
