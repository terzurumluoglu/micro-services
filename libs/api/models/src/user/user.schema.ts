import { Type, Static } from '@sinclair/typebox';

export const UserSchema = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  username: Type.String(),
  email: Type.String({ format: 'email' }),
  address: Type.Object({
    street: Type.String(),
    suite: Type.String(),
    city: Type.String(),
    zipcode: Type.String(),
    geo: Type.Object({
      lat: Type.String(),
      lng: Type.String(),
    }),
  }),
  phone: Type.String(),
  website: Type.String(),
  company: Type.Object({
    name: Type.String(),
    catchPhrase: Type.String(),
    bs: Type.String(),
  }),
});

export type UserType = Static<typeof UserSchema>;
