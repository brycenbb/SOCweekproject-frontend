import Hint from "./index.js";
import { useState } from "react";
import { test, expect } from "@jest/globals";

const STATUS = {
    CLICKED: 'clicked',
    UNCLICKED: 'unclicked',
};

test('checkbox is clicked', () => {
    const checkBox = { Hint }
    let tree = checkBox.toJSON;
    expect(tree).toMatchSnapshot();
});


