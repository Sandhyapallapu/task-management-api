# Task Management API

## Overview
Simple backend API with CRUD, pagination, search, and soft delete.

## Setup
npm install
npm start

## Auth
Authorization: Bearer mysecrettoken

## Authentication
Header: Authorization: Bearer mysecrettoken
OR Query: ?token=mysecrettoken (for browser testing)

## Endpoints
POST /tasks
GET /tasks
PUT /tasks/:id
DELETE /tasks/:id
