import Panic3 from "./index.js";
import request from "supertest";
import { test, expect } from "@jest/globals";

describe('Renders GET helpers correctly', () => {
    test('GET all users who are happy to help', () => {
        const response = request(Panic3)
            .get(`http://localhost:3001/help`)
            .expect(200)
            .expect((res) => {
                const expected = {
                    data: expect.any(Object)
                }

                    .toJSON();
                console.log(response);
                expect(response).toEqual(expected)
            });
    });
});