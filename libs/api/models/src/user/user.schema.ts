import { Type, Static } from '@sinclair/typebox';

export const UserSchema = Type.Object({
  _id: Type.String(),
  email: Type.String({ format: 'email' }),
  createdAt: Type.Number(),
  roles: Type.Array(Type.String()),
  name: Type.String(),
  status: Type.String(),
  updatedAt: Type.Number(),
});

export type UserType = Static<typeof UserSchema>;
