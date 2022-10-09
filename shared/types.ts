import {
  Experience,
  ExperienceDescription,
  Project,
  ProjectDescription,
  Tag,
} from "@prisma/client";
import { NextApiRequest } from "next";

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type CustomBodyRequest<T, U = any> = Override<
  NextApiRequest,
  {
    body: T;
    query: U;
  }
>;

export type LoginRequestBody = {
  username: string;
  password: string;
};

export type VerifyAccessTokenBody = {
  accessToken: string;
};

export type CreatePostBody = {
  title: string;
  content?: string;
  author: string;
};

export type UpdateTagQuery = {
  id: string;
};

export type UpdateTagBody = {
  label: string;
  link: string | null;
};

export type UpdateTagMutation = UpdateTagQuery & UpdateTagBody;

export type GetProjectsDto = Project & {
  projectDescriptions: ProjectDescription[];
  tags: Tag[];
};

export type GetExperiencesDto = Experience & {
  experienceDescriptions: ExperienceDescription[];
  tags: Tag[];
};
