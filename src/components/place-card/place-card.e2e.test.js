import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockOffer = {
  "previewImage": `https://loremflickr.com/260/200/hostel,room`,
  "title": `Бунгало в попе мира`,
  "isPremium": true,
  "rating": 3.9,
  "type": `room`,
  "price": 99999,
  "id": 9997,
};

describe(`E2E-test: PlaceCard`, () => {
  let imageClickHandler;
  let titleClickHandler;
  let placeCard;
  let title;
  let image;
  const event = {preventDefault: () => {}};

  beforeEach(() => {
    imageClickHandler = jest.fn();
    titleClickHandler = jest.fn();
    placeCard = shallow(<PlaceCard offer={mockOffer} handleImageClick={imageClickHandler} handleTitleClick={titleClickHandler}/>);
    title = placeCard.find(`.place-card__name a`);
    image = placeCard.find(`.cities__image-wrapper a`);
  });


  it(`should have image`, () => {
    expect(image).toHaveLength(1);
  });

  describe(`before click on image`, () => {
    it(`handler shouldn't be called`, () => {
      expect(imageClickHandler).toBeCalledTimes(0);
    });
  });

  describe(`click on image`, () => {
    beforeEach(() => {
      image.simulate(`click`, event);
    });

    it(`handler should be called once`, () => {
      expect(imageClickHandler).toBeCalledTimes(1);
    });
  });

  it(`should have title`, () => {
    expect(title).toHaveLength(1);
  });

  describe(`before click on title`, () => {
    it(`handler shouldn't be called`, () => {
      expect(titleClickHandler).toBeCalledTimes(0);
    });
  });

  describe(`click on title`, () => {
    beforeEach(() => {
      title.simulate(`click`);
    });

    it(`handler should be called once`, () => {
      expect(titleClickHandler).toBeCalledTimes(1);
    });
  });


});
