export class ListModel {

  id?: number;
  shikona?: string;
  heya?: string;
  posRank?: string;
  favoriteGrip?: string;

  constructor(obj: Partial<ListModel>) {
    Object.assign(this, obj);
  }
}
