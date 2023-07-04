export type Config = {
  /**
   * The title of the site
   */
  title: string;

  /**
   * The tagline of the site
   * @default ""
   * @optional
   * @example "The Flutter Framework That Bonds Your App Together"
   * */
  tagline?: string;

  /**
   * The favicon of the site
   * @default "img/favicon.ico"
   * @optional
   * */
  favicon?: string;
};
