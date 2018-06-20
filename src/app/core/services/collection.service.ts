import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
  }

  /**
   * Get collection
   */
  public get collection(): Item[] {
    return this._collection;
  }

   /**
    * Set collection
    */
  public set collection(col: Item[]) {
    this._collection = col;
  }

    /**
     * Get item from collection
     */


     /**
      * Add item in collection
      */
     public addItem(item: Item): void {
       this._collection.push(item);
     }
     /**
      * Update item in collection
      */

      /**
       * Delete item in collection
       */
}
