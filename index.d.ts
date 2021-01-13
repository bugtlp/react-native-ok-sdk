declare module "react-native-ok-sdk" {
  export const Scopes = {
    VALUABLE_ACCESS: "VALUABLE_ACCESS",
    SET_STATUS: "SET_STATUS",
    PHOTO_CONTENT: "PHOTO_CONTENT",
    GROUP_CONTENT: "GROUP_CONTENT",
    VIDEO_CONTENT: "VIDEO_CONTENT",
    APP_INVITE: "APP_INVITE",
    LONG_ACCESS_TOKEN: "LONG_ACCESS_TOKEN",
  };

  export default class OkManager {
    static initialize(appId: string, appKey: string);
    static login(permissions: Array<keyof Scopes>): Primise<any>;
  }
}
