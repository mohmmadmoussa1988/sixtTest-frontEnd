import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CenteredTitle from "./centered-title";
import toJson from "enzyme-to-json";
configure({ adapter: new Adapter() });
describe(`<CenteredTitle />`, () => {
  it("should render CenteredTitle", () => {
    const wrapper = shallow(<CenteredTitle>New Title</CenteredTitle>);
    let results = toJson(wrapper);
    expect(results.node.rendered).toEqual("New Title");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
