## Local Development Setup

1. Ensure that you have the following installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Yarn](https://yarnpkg.com/)

2. Create a `.env` file in the root directory following the format provided in `.env-example`.

3. Ensure that Docker is running before executing the following commands:

```bash
docker compose up -d # Initialise docker container

yarn migrate # Execute database migrations

yarn seed # Seed the database

yarn dev # Start the server
```
