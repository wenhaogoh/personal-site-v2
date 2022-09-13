import {
  Experience,
  ExperienceDescription,
  Post,
  Project,
  ProjectDescription,
  Tag,
} from "@prisma/client";

import { ENV } from "../consts";
import {
  LoginRequestBody,
  UpdateTagBody,
  VerifyAccessTokenBody,
} from "../shared/types";

const responseBody = (res: Response) => {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

const getRequestWithBody = (method: string) => (url: string, body?: unknown) =>
  fetch(ENV.BASE_URL + url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include",
  }).then(responseBody);

const requests = {
  get: (url: string) => fetch(ENV.BASE_URL + url).then(responseBody),
  post: getRequestWithBody("POST"),
  put: getRequestWithBody("PUT"),
};

export const Authentication = {
  login: (body: LoginRequestBody): Promise<null> =>
    requests.post("/api/login", body),
  verify: (body: VerifyAccessTokenBody): Promise<null> =>
    requests.post("/api/login/token", body),
};

export const Posts = {
  getPosts: (): Promise<Post[]> => requests.get("/api/posts"),
};

export const Tags = {
  getTags: (): Promise<Tag[]> => requests.get("/api/tags"),
  updateTag: ({
    id,
    body,
  }: {
    id: number;
    body: UpdateTagBody;
  }): Promise<Tag> => requests.put(`/api/tags/${id}`, body),
};

export const Experiences = {
  getExperiences: (): Promise<
    (Experience & {
      experienceDescriptions: ExperienceDescription[];
      tags: Tag[];
    })[]
  > => requests.get("/api/experiences"),
};

export const Projects = {
  getProjects: (): Promise<
    (Project & {
      projectDescriptions: ProjectDescription[];
      tags: Tag[];
    })[]
  > => requests.get("/api/projects"),
};
