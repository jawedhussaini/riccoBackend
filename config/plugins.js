
    
    module.exports = ({ env }) => ({
      // ...
      upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
     email: {
    config: {
      provider: 'strapi-provider-email-smtp',
      providerOptions: {
        host: 'smtp.gmail.com', //SMTP Host
        port: 465   , //SMTP Port
        secure: true,
        username: 'jawed.hussaini2000@gmail.com',
        password: 'wloo eatm bljz xhrw',
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      defaultFrom: 'jawed.hussaini2000@gmail.com',
      defaultReplyTo: 'jawed.hussaini2000@gmail.com',
    }, 
  }, 
  
          // ...
    });

