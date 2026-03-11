export type Workspace = {
  id: string;
  name: string;
  plan: "free" | "pro" | "enterprise";
};

export function defaultWorkspace(): Workspace {
  return { id: "ws_demo", name: "Demo Workspace", plan: "pro" };
}
