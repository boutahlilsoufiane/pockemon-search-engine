import { get } from '../configs';
import { pockemonEndPoints } from './endPoints';

export const pockemonApis = {
  getPockemonList: (limit, offset) => {
    let endPointUpdated = pockemonEndPoints.list.replace('#limit', limit)
    endPointUpdated = endPointUpdated.replace('#offset', offset)

    return get(endPointUpdated);
  },
  getPockemonDetails: (name) => {
    const endPointUpdated = pockemonEndPoints.details.replace('#name', name)

    return get(endPointUpdated);
  }
};
