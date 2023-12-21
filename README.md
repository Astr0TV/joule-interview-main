# Joule interview

This repository aims to emulate a blog post application. It is imperfect on purpose, we'd like your comments on it !<br/>
Please see the exercise as if you joined a team that created this repository, which is now used like this in production. What would you do with it ?<br/>
<br/>
We would advise spending between 60 and 120 minutes on this exercise, and try answering the following questions:<br/>
Project Good Practices:

# Project Good Practices:

**1. Modular Structure:**  
The project follows a modular structure, enhancing readability and maintainability. Each feature or module resides in its own directory.

**2. Use of DTOs (Data Transfer Objects):**  
DTOs are utilized for request and response objects. This practice aids in data validation, providing a clear contract between different parts of the application.

**3. Dependency Injection:**  
NestJS's dependency injection is employed throughout the codebase, making it easier to manage dependencies and facilitating the creation of testable code.

**4. Middleware Usage:**  
Middleware is wisely used for logging, addressing cross-cutting concerns and ensuring a clean separation of concerns.

**5. Error Handling Middleware:**  
The presence of error handling middleware is crucial for gracefully managing errors and delivering meaningful responses to users.

**6. Validation Pipes:**  
Validation pipes contribute to code reliability by enforcing input validation.

# Code Quality Refactoring:

**1. Consistent Naming:**  
Ensure consistent naming conventions across the entire codebase to improve readability and maintainability.

**2. Code Duplication:**  
Identify and eliminate redundant or duplicated code to enhance maintainability and reduce the chances of introducing bugs.

**3. Enhanced Logging:**  
Add more informative logging, especially in critical areas of the code, to aid in debugging and monitoring.

**4. Unit Tests:**  
Expand test coverage to ensure critical parts of the application are well-tested, helping catch issues early in development.

**5. Use of Interfaces:**  
Define interfaces for DTOs and other complex objects to enforce a clear contract and improve code understanding.

# CI/CD Improvement:

**1. Automated Testing:**  
Integrate automated tests into the CI/CD pipeline to catch bugs early and prevent the introduction of regressions.

**2. Static Code Analysis:**  
Introduce static code analysis tools to catch potential issues and enforce coding standards.

**3. Code Reviews:**  
Strengthen the code review process to catch issues that automated tools might miss and ensure that best practices are followed.

**4. Continuous Monitoring:**  
Implement tools for continuous monitoring of the application in production to identify and address issues promptly.

# Developer Experience (DevX) Enhancement:

**1. Documentation:**  
Improve and maintain comprehensive documentation for developers to understand the architecture, APIs, and deployment processes.

**2. Automated Setup:**  
Provide scripts or automation for setting up the development environment, dependencies, and database schema to reduce onboarding time.

**3. Live Reload:**  
Implement tools or configurations that enable live reload during development to speed up the feedback loop.

**4. Swagger/OpenAPI:**  
If not already done, consider integrating Swagger or OpenAPI for automatic API documentation generation.

# Security Improvements:

**1. Input Validation:**  
Strengthen input validation by using validation pipes and ensuring that all user inputs are properly sanitized.

**2. Authentication and Authorization:**  
Review and enhance the authentication and authorization mechanisms, ensuring that sensitive endpoints are appropriately protected.

**3. Dependency Scanning:**  
Regularly scan dependencies for known security vulnerabilities and update dependencies accordingly.

**4. Data Encryption:**  
If handling sensitive data, ensure that data at rest and in transit is properly encrypted.

# Adding a Commenting Feature:

**Database Schema:**  
Add a Comment entity to the database schema with appropriate relationships to articles.

**API Endpoints:**  
Create API endpoints for adding, fetching, updating, and deleting comments.

**DTOs:**  
Define DTOs for comment-related operations.

**Authentication:**  
Ensure that only authenticated users can add comments.

**Validation:**  
Implement validation for comment content length, format, etc.

**Notifications:**  
Consider adding a notification system for notifying article authors or other relevant parties when a new comment is added.

**Testing:**  
Develop unit and integration tests for the new commenting feature.

**Documentation:**  
Update API documentation to include details about the new commenting feature, including usage and endpoints.


# Installation & setup

```shell
npm install
```

## Prisma & DB

### databse

To start the database, you can use docker

```shell
docker compose up database
```

### migrations

Apply migrations to the database with the following command

```shell
npm run migrate
```

### seed

You can then populate the database with the seeds we created !

```shell
npm run seed
```

# Running the app

Once you have setup the database and applied the migrations

```shell
npm run start
```

# Login

To login on the app in the dev environment you can call the login endpoint with the credentials found in the `prisma/seed.ts` file,
and then use the `accessToken` provided as a Bearer Token. With swagger you can use this token to login.

# Test

```shell
# unit tests
npm run test

# e2e tests
npm run test:e2e
```

# Prisma

### Generate new migrations

When changing the data model you should run the following command to generate and apply the associated migration

```shell
npm run migrate -- --name "<NAME>"
```

# GitFlow

The `main` branch is protected. A Merge request has to be approved before it is merged into main. It is then automatically deployed with our CI/CD.
We build the image of the application on a registry. From there, a Portainer service receives a notification and deploys the new version of the image.

# Docker

```shell
docker compose up
```

# Drone

We use drone for our CI/CD. We have two pipelines, one running at every new commit on a `pull_request`, and one whenever there is a push on `dev` or `main` branch
