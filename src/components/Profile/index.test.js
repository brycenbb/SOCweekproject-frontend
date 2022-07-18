import Profile from "./index.js";
import { test, expect } from "@jest/globals";
import request from "supertest";

describe('Renders the users details correctly', () => {
    test('Renders the users details when logged in', () => {
        const response = request(Profile)
            .get('/localhost:3000')
            .expect(200)
            .expect((res) => {
                const expected = {
                    success: true,
                    isAuthenticated: true,
                    slackUsername: expect.any(String)
                }

                    .toJSON();
                console.log(response);
                expect(response).toEqual(expected)
            });
    });
});