import Panic2 from "./index.js";
import request from "supertest";
import { test, expect } from "@jest/globals";

test('Renders correctly', () => {
    const response = request(Panic2)
        .get('/localhost:3000/panic2')
        .expect(200)
        .toJSON();
    console.log(response)
    expect(response).toMatchSnapshot();
});