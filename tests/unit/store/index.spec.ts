import store from '@/store';
import state from '../../mockedState';
import { State } from '@/types/interfaces';

let mockedState: State;

describe('Given a vuex store', () => {
    beforeEach(() => {
        mockedState = state;
      });
    describe('When is created', () => {
        describe('And a state is created', () => {
            test('Then it should be equal to the real state', () => {
                expect(store.state).toEqual({
                    products: [
                        {
                          id: 1,
                          image: 'https://i.ibb.co/PFKMSLV/Watch.png',
                          name: 'AppleWatch',
                          price: 450,
                          amount: 1,
                          stock: 5
                        },
                        {
                          id: 2,
                          image: 'https://i.ibb.co/s5HmDvj/HDD.png',
                          name: 'HDD',
                          price: 50,
                          amount: 1,
                          stock: 15
                        },
                        {
                          id: 3,
                          image: 'https://i.ibb.co/Cm90JRn/Headphones.png',
                          name: 'Headphones',
                          price: 40,
                          amount: 1,
                          stock: 5
                        },
                        {
                          id: 4,
                          image: 'https://i.ibb.co/crRjK4q/iPhone.png',
                          name: 'iPhone',
                          price: 1200,
                          amount: 1,
                          stock: 7
                        },
                        {
                          id: 5,
                          image: 'https://i.ibb.co/Wzssb0C/MacBook.png',
                          name: 'MacBook',
                          price: 2100,
                          amount: 1,
                          stock: 8
                        },
                        {
                          id: 6,
                          image: 'https://i.ibb.co/51b3yk5/Speaker.png',
                          name: 'Speaker',
                          price: 50,
                          amount: 1,
                          stock: 13
                        },
                        {
                          id: 7,
                          image: 'https://i.ibb.co/GH1gtKh/VR-Control.png',
                          name: 'VR Control',
                          price: 85,
                          amount: 1,
                          stock: 10
                        },
                        {
                          id: 8,
                          image: 'https://i.ibb.co/qByXxvh/Camera.png',
                          name: 'Camera',
                          price: 450,
                          amount: 1,
                          stock: 10
                        }
                      ],
                      productsInCart: []
                })
            })
        })

    })
})