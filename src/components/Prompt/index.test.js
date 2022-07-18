import Prompt from "./index.js";
import request from "supertest";
import { test, expect } from "@jest/globals";
import React from "react";
import { render } from "@testing-library/react";


describe('POST user information when submitted', function () {
    test('Prompt takes in users email and slackUsername', function () {
        const response = request(Prompt)
            .get('/http://localhost:3001/users')
            .expect(200)
            .expect((res) => {
                const expected = {
                    success: true,
                    data: expect.any(Object)
                };
                const actual = res.body;
                const payload = actual.data;
                expect({
                    email: expect.any(String),
                    slackUsername: expect.any(String)
                }).toEqual(payload);
                expect(actual).toEqual(expected);
            });
    });
});

