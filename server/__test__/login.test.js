const request = require('supertest');
const express = require('express');

const User= require("../models/UserProfile");
const userLogin= require("../router/User");
const app= express();

app.use(express.json());
app.use('/api', userLogin);



describe('Authentication API', () => {
    test('Register a new user', async () => {
      const userData = {
        user_name: 'Test User2',
        user_email: 'test1@example.com',
        user_password: 'password123'
      };
  
      const response = await request(app)
        .post('/api/register')
        .send(userData)
        .expect(201);
  
      expect(response.body).toHaveProperty('user');
      expect(response.body).toHaveProperty('token');
      expect(response.body.message).toBe('User registered successfully');
    });
  
    test('Login with existing user credentials', async () => {
      const loginData = {
        email: 'test@example.com',
        password: 'password123'
      };
  
      const response = await request(app)
        .post('/api/login')
        .send(loginData)
        .expect(201);
  
      expect(response.body).toHaveProperty('user');
      expect(response.body).toHaveProperty('token');
      expect(response.body.message).toBe('Authentication successful');
    });
  
    test('Login with incorrect credentials', async () => {
      const loginData = {
        email: 'test@example.com',
        password: 'wrongpassword'
      };
  
      await request(app)
        .post('/api/login')
        .send(loginData)
        .expect(401);
    });
  });