import supertest from "supertest";
import { createServer } from "../server";

describe("health endpoint ts", () => {
  test("it should returen 200 ok", async () => {
    await supertest(createServer())
      .get("/health")
      .expect(200)
      .then((res) => {
        expect(res.body.ok).toEqual(true);
      });
  });
});
