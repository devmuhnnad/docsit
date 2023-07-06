export type Config = {
  /**
   * The title of the site
   * @default "Docsit"
   */
  title: string;

  /**
   * The tagline of the site
   * @default ""
   * @optional
   * @example "The Flutter Framework That Bonds Your App Together"
   * */
  tagline: string;

  /**
   * The favicon of the site
   * @default "img/favicon.ico"
   * @optional
   * */
  favicon: string;

  /**
   * Logo in hero section
   */
  logo: {
    /**
     * The src of the logo
     */
    src: string;
    /**
     * The alt of the logo
     */
    alt: string;
  };

  /**
   * Theme configuration
   */
  theme: {
    /**
     * Navbar configuration
     */
    navbar: {
      /**
       * The Title on the navbar
       *
       */
      title: string;
      /**
       * The logo on the navbar
       */
      logo?: {
        /**
         * The src of the logo
         */
        src: string;
        /**
         * The alt of the logo
         */
        alt: string;
      };

      /**
       * The links on the navbar
       */
      items: {
        /**
         * The text of the link
         */
        label: string;
        /**
         * The destination of the link
         */
        to: string;

        /**
         * open in new tab?
         */
        newTab?: boolean;
      }[];
    };
  };

  /**
   * Footer configuration
   */
  footer: {
    /**
     * The copy right text
     */
    copyright: string;
  };
};
