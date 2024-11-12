import { AppType } from './../app/api/[[...route]]/route';
import { hc } from "hono/client"

export const client = hc<AppType>("https://jira-clone-9f4d.vercel.app/")
