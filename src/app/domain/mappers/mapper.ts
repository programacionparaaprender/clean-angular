export abstract class Mapper<I, O> {
  abstract mapFrom(param: I): O;
  abstract mapTo(param: O): I;
  abstract mapFroms(param: I[]): O[];
  abstract mapTos(param: O[]): I[];
}
