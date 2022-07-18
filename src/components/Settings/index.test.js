import handleSubmit from "./index.js";
import { test, expect } from "@jest/globals";
import request from "supertest";

describe('Updates the users username when submitted', () => {
    test('username is updated on submit', () => {
        const response = request(handleSubmit(Event))
            .get('localhost:3000/settings')
            .expect(200)
            .expect((res) => {
                const expected = {
                    method: 'PATCH',
                    setName: expect.any(String),
                    success: true,
                    data: expect.setState(true)
                }

                    .toJSON();
                console.log(response);
                expect(response).toEqual(expected)
            });
    });
});