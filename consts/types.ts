export interface NavLink {
  label: string;
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  link: string;
  start: string;
  end: string;
  descriptions: string[];
  tags: Tag[];
}

export interface Project {
  title: string;
  github: string;
  descriptions: string[];
  tags: Tag[];
}

export interface Tag {
  label: string;
  link: string;
}
