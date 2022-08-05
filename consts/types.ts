export type NavLink = {
  label: string;
  link: string;
};

export type Experience = {
  role: string;
  company: string;
  link: string;
  start: string;
  end: string;
  descriptions: string[];
  tags: Tag[];
};

export type Project = {
  title: string;
  github: string;
  descriptions: string[];
  tags: Tag[];
};

export type Tag = {
  label: string;
  link: string;
};
