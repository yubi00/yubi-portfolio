jest.setTimeout(30000)
const request = require('supertest')
const app = require('../src/app')
const Admin = require('../src/models/admin')
const { adminOne, 
        adminOneId, 
        adminTwo, 
        adminTwoId, 
        setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('should signup a new admin', async () => {
    const response = await request(app).post('/admins').send({
        email: "yubikhadka@gmail.com",
        password: "123yubikhadka"
    }).expect(201)
    //assert that the database was changed correctly
    const admin = await Admin.findById(response.body.admin._id)
    expect(admin).not.toBeNull()
     
    //assertions about the response
    expect(response.body).toMatchObject({
        admin: {
            email: 'yubikhadka@gmail.com'
        },
        token: admin.tokens[0].token
    })

    //assertions about the plain password
    expect(admin.password).not.toBe('123yubikhadka')
})

test('should login existing admin', async () => {
   const response = await request(app).post('/admins/login').send({
       email: adminOne.email,
       password: adminOne.password
   }).expect(201)

  //assert that new token was added
  const admin = await Admin.findById(response.body.admin._id)
  expect(response.body.token).toBe(admin.tokens[1].token)

})

test('should not login nonexistent admins', async() => {
    await request(app).post('/admins/login').send({
        email: "randomemail@gmail.com",
        password: "iknowright"
    }).expect(400)
})

test('should get admin profile', async () => {
    const response = await request(app)
        .get('/admins/me')
        .set('Authorization', `Bearer ${adminOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('should not get profile for unauthenticated admins', async () => {
    await request(app)
        .get('/admins/me')
        .send()
        .expect(401)
})

test('should delete account for authenticated admins', async () => {
    const response = await request(app)
                .delete('/admins/me')
                .set('Authorization', `Bearer ${adminTwo.tokens[0].token}`)
                .send()
                .expect(200)
    
    //assert that the admin was removed from the database
    const admin = await Admin.findById(adminTwoId)
    expect(admin).toBeNull()
})

test('should not delete account for unauthenticated admins', async () => {
    await request(app)
        .delete('/admins/me')
        .send()
        .expect(401)
})

test('should update account for authenticated admins', async () => {
    const response = await request(app)
        .patch('/admins/me')
        .set('Authorization', `Bearer ${adminOne.tokens[0].token}`)
        .send({
            email: "newemail@gmail.com"
        }).expect(200)

    //assertions about the updates
    const admin = await Admin.findById(adminOneId)
    expect(admin.email).toBe('newemail@gmail.com')
})

test('should not update account for unauthenticated admins', async() => {
    await request(app)
        .patch('/admins/me')
        .send({
            email: "wahever@gmail.com"
        }).expect(401)
})

