export interface BlogPost {
  id: number;
  title: string;
  description: string;
  url: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title:
      "Shell Scripting to Simulate 100s of parallel logins into a GPU Server",
    description: "Architectural Overview for a Mass Login into a GPU Server",
    url: "https://tekrajawasthi15.medium.com/shell-scripting-to-simulate-100s-of-parallel-logins-into-a-gpu-server-337074549244",
  },
];
