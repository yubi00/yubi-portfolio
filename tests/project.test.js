jest.setTimeout(30000);

const request = require("supertest");
const app = require("../src/app");

const {
  adminOne,
  adminTwo,
  projectOneId,
  projectTwoId,
  setupDatabase,
} = require("./fixtures/db");
const Project = require("../src/models/project");

beforeEach(setupDatabase);

test("should fetch projects from database", async () => {
  const response = await request(app).get("/projects").send().expect(200);

  expect(response.body.projects.length).toBe(2);
});

test("should fetch individual project if found", async () => {
  const response = await request(app)
    .get(`/projects/${projectOneId}`)
    .send()
    .expect(200);
});

test("should not create new project for unauthenticated users", async () => {
  await request(app)
    .post("/projects")
    .send({
      title: "racing app",
      description: "2d racing game on c++ and sfml",
      github: "https://github.com/racinggame",
      site: "https://amazingrace.com",
    })
    .expect(401);
});

test("should create new project for authenticated admins", async () => {
  const response = await request(app)
    .post("/projects")
    .set("Authorization", `Bearer ${adminTwo.tokens[0].token}`)
    .send({
      title: "racing app",
      description: "2d racing game on c++ and sfml",
      github: "https://github.com/racinggame",
      site: "https://amazingrace.com",
    })
    .expect(201);

  //assert that the new project was added
  const project = await Project.findById(response.body._id);
  expect(project).not.toBeNull();
});

test("should not delete project for unauthenticated users", async () => {
  await request(app).delete(`/projects/${projectOneId}`).send().expect(401);
});

test("should delete project for autheticated admins", async () => {
  const response = await request(app)
    .delete(`/projects/${projectOneId}`)
    .set("Authorization", `Bearer ${adminOne.tokens[0].token}`)
    .send()
    .expect(200);

  //assert that the project was removed
  const project = await Project.findById(response.body._id);
  expect(project).toBeNull();
});

test("should not update project for unauthencated users", async () => {
  await request(app)
    .patch("/projects/" + projectTwoId)
    .send({
      description: "a new description",
    })
    .expect(401);
});

test("should update project for authenticated admins", async () => {
  const response = await request(app)
    .patch(`/projects/${projectTwoId}`)
    .set("Authorization", `Bearer ${adminTwo.tokens[0].token}`)
    .send({
      description: "a new desc",
    })
    .expect(200);

  //assertions about the updates
  const project = await Project.findById(response.body._id);
  expect(project.description).toBe("a new desc");
});
