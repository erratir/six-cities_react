import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockOffer = {
  "previewImage": `https://es31-server.appspot.com/six-cities/static/hotel/7.jpg`,
  "title": `Бунгало в попе мира`,
  "type": `room`,
  "price": 99999,
  "id": 9997,
};

describe(`E2E-test: PlaceCard`, () => {
  let clickHandler;
  let placeCard;
  let header;

  beforeEach(() => {
    clickHandler = jest.fn();
    placeCard = shallow(<PlaceCard offer={mockOffer} handleClick={clickHandler}/>);
    header = placeCard.find(`.place-card__name a`);
  });

  it(`should have title`, () => {
    expect(header).toHaveLength(1);
  });

  describe(`before click on title`, () => {
    it(`handler shouldn't be called`, () => {
      expect(clickHandler).toBeCalledTimes(0);
    });
  });

  describe(`click on title`, () => {
    beforeEach(() => {
      header.simulate(`click`);
    });

    it(`handler should be called once`, () => {
      expect(clickHandler).toBeCalledTimes(1);
    });
  });
});
