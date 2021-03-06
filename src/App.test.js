import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import BlogControl from './components/BlogControl';
import BlogPost from './components/BlogPost';
import DataSource from './DataSource';

describe('render', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders initial elements', () => {
    const sut = shallow(<App />);
    expect(sut.find(BlogControl)).toBeDefined();
    expect(sut.find('div.Blog-entries')).toBeDefined();
    expect(sut.find(BlogPost).length).toBe(5);
  });
});


describe('behavior', () => {
  it('receives new post', () => {
    const sut = shallow(<App />);
    expect(sut.find(BlogPost).length).toBe(5);
    DataSource.addPost("New post", "New description");
    sut.update();
    expect(sut.find(BlogPost).length).toBe(6);
  });
});