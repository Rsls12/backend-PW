import {ItemDeLaOrden} from '../models/index.js';
import RepositoryBase from '../repositories/base.js';

class ItemDeLaOrdenRepository extends RepositoryBase {
  constructor() {
    super(ItemDeLaOrden);
  }

  async addProducto(idOrden, idProducto, cantidad) {
    return await this.model.create({ idOrden, idProducto, cantidad });
  }
}

export default new ItemDeLaOrdenRepository();
