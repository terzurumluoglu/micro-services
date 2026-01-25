// import { FastifyPluginAsync } from 'fastify';
// import fp from 'fastify-plugin';
// import { EnvironmentConfig } from '@terzurumluoglu/core-models';
// import { MailSender } from '@terzurumluoglu/api-mail';
// import { Server } from '@terzurumluoglu/api-platform';

// const mailSenderPlugin: FastifyPluginAsync = async (_) => {
//   const { MAIL_SERVICE, MAIL_USER, MAIL_PASS } = Server.fastify
//     .config as EnvironmentConfig;

//   MailSender.init({
//     service: MAIL_SERVICE,
//     user: MAIL_USER,
//     pass: MAIL_PASS,
//   });

//   //   // Decorate
//   //   fastifyInstance.decorate('mailSender', MailSender.get());
// };

// export default fp(mailSenderPlugin);
