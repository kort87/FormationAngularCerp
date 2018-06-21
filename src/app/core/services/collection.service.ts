import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private _collection: Observable<Item[]>;
  private url = 'api/COLLECTION';

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Item[]>(this.url);
  }

  /**
   * Get collection
   */
  public get collection(): Observable<Item[]> {
    return this._collection;
  }

   /**
    * Set collection
    */
  public set collection(col: Observable<Item[]>) {
    this._collection = col;
  }

    /**
     * Get item from collection
     */
    public getItemById(id: number) {
      return this.http.get<Item>(`${this.url}/${id}`);
    }


     /**
      * Add item in collection
      */
     public addItem(item: Item): Observable<Item> {
      //  this._collection.push(item);
      return this.http.post<Item>(this.url, item);
     }
     /**
      * Update item in collection
      */

      public updateItem(item: Item): Observable<Item> {
        return this.http.put<Item>(this.url, item);
      }

      /**
       * Delete item in collection
       */
}
