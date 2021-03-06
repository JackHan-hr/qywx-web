import Rollbar from 'rollbar';

// Track error by rollbar.com
if (process.env.REACT_APP_ENV === 'production') {
  Rollbar.init({
    accessToken: 'e3205cb4380b4e5d94b7af403d8ac3cc',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'production',
    },
  });
}
