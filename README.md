## Local Development Setup

1. Ensure that you have the following installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Yarn](https://yarnpkg.com/)

2. Create a `.env` file following the format provided in `.env-example`.
   For `DATABASE_URL`, set it to `"postgresql://postgres:postgres@localhost:6543/personal-site-db?schema=public"`.

3. Ensure that Docker is running before executing the following commands:

```bash
docker compose up -d # Initialise docker container

yarn prisma migrate dev # Execute database migrations

yarn dev # Start the server
```
