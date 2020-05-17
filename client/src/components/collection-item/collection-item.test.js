import React from 'react';
import { shallow } from 'enzyme';
import { CollectionItem } from './collection-item.component';

// describe groups tests
describe('CollectionItem component', () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = 'www.image.com';
  const mockName = 'Arlo';
  const mockPrice = 200;

  // runs before tests
  beforeEach(() => {
    // creates mockAddItem function
    mockAddItem = jest.fn();

    // creates mock properties
    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName
      },
      // sets mockAddItem to addItem
      addItem: mockAddItem
    };

    // renders the collection item and passes in mock properties
    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  // expects collection item to match snapshot
  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // simulates click on AddButton
  it('should call addItem when AddButton clicked', () => {
    wrapper.find('AddButton').simulate('click');

    // expects mockAddItem to be called
    // toHaveBeenCalled provided by jest
    expect(mockAddItem).toHaveBeenCalled();
  });

  // expects imageUrl prop to be rendered on BackgroundImage
  it('should render imageUrl as a prop on BackgroundImage', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(imageUrl);
  });

  // expects name property to get rendered in NameContainer
  it('should render name prop in NameContainer', () => {
    expect(wrapper.find('NameContainer').text()).toBe(mockName);
  });

  // expects price property to get rendered on PriceContainer
  it('should render price prop in PriceContainer', () => {
    const price = parseInt(wrapper.find('PriceContainer').text());
    expect(price).toBe(mockPrice);
  });
});