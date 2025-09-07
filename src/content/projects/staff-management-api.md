---
title: Staff Management API
summary: Java Spring Boot REST API for managing employees; clean controller/service layers; JSON responses and basic persistence.
duration: Jul 2024 – Sep 2024
---

# Staff Management API

**Duration:** Jul 2024 – Sep 2024

A simple but clean **Spring Boot** REST service that exposes endpoints to manage staff records.

**Endpoints**
- `GET /employees` – list employees
- `GET /employees/{id}` – get by id
- `POST /employees` – create
- `PUT /employees/{id}` – update
- `DELETE /employees/{id}` – delete

**Design**
- Controller → Service → Repository layers
- DTOs for request/response shapes
- Exception handling & validation stubs
- In-memory persistence (H2/Map) with easy swap to JPA

**Stack**
Java, Spring Boot, Spring Web, Lombok, (H2/JPA optional), Maven.

**GitHub**: <https://github.com/Waltberry/StaffManagementAPI>

