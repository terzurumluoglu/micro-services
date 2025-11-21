import { Type, Static } from '@sinclair/typebox';
import { UserSchema } from '../user/user.schema';

export const PostSchema = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  body: Type.String(),
  user: UserSchema,
});

export type PostType = Static<typeof PostSchema>;
