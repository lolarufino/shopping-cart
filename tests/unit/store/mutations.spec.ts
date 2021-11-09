import mutations from '../../../src/store/mutations';
import state from '../../mockedState';
import { State } from '@/types/interfaces';

let mockedState: State;

describe('Given a mutation', () => {
    beforeEach(() => {
        mockedState = state;
      });
      test('Should update productsincart state', () => {
        const payload = 
            {
              id: 1,
              image: 'https://i.ibb.co/PFKMSLV/Watch.png',
              name: 'AppleWatch',
              price: 450,
              amount: 1,
              stock: 5
            }

        mutations.updateCart(mockedState,payload)
        expect(mockedState.productsInCart).toEqual([
            {
              id: 1,
              image: 'https://i.ibb.co/PFKMSLV/Watch.png',
              name: 'AppleWatch',
              price: 450,
              amount: 1,
              stock: 5
            }
        ])
    })
})