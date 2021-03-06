// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  postRegistrationUrl: "http://localhost:3000/api/v1/auth/users", // + payload
  postLoginUrl: "http://localhost:3000/api/v1/auth/session",
  getUserUrl: "http://localhost:3000/api/v1/users/self",
  getFeedUrl: "http://localhost:3000/api/v1/media",
  getPostUrl: "http://localhost:3000/api/v1/media/",
  uploadImageUrl: "http://localhost:3000/api/v1/media/content/image",
  uploadPostUrl: "http://localhost:3000/api/v1/media"
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
