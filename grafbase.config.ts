import {g, auth, config} from '@grafbase/sdk';

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  desciption: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
})

const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  users: g.relation(() => User)
})

export default config({
  schema: g
})