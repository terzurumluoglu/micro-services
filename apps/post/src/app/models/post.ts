import { Type, Static } from '@sinclair/typebox';

export const PostSchema = Type.Object({
  id: Type.Number(),
  userId: Type.Number(),
  title: Type.String(),
  body: Type.String(),
});

export type PostType = Static<typeof PostSchema>;
