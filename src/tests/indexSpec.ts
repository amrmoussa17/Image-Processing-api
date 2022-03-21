import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Test endpoint responses", () => {
  it("main route test", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });

  it("img route test ok", async () => {
    const response = await request.get("/img?filename=fjord&width=400&height=400");
    expect(response.status).toBe(200);
  });

  it("img route test ok", async () => {
    const response = await request.get("/img?filename=icelandwaterfall&width=700&height=1200");
    expect(response.status).toBe(200);
  });

  it("img route test bad request", async () => {
    const response = await request.get("/img?filename=fjr&width=s&height='");
    expect(response.status).toBe(400);
  });
});
