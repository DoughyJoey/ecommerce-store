import React from 'react';
import { shallow } from 'enzyme';
import { CollectionPage } from './collection.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

// groups tests
describe('CollectionPage', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  // runs before tests
  beforeEach(() => {
    // creates mock collection
    const mockCollection = {
      items: mockItems,
      title: 'Test'
    };

    // renders collection page and passes in mock colelction props
    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  // expects collection page to match snapshot
  it('should render the CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // expects the same number of collection item and mock items to get rendered
  it('should render the same number of CollectionItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});