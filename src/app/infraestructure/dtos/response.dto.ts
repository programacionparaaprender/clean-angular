import { IMetaData } from './interfaces/metadata.interface';

export class ResponseDto<E> {
  public meta: IMetaData;
  public dates: E;
  constructor(meta: IMetaData, dates: E) {
    this.meta = meta;
    this.dates = dates;
  }
}
