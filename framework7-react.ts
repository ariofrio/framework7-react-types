// This import makes sure that the following module declaration extends,
// instead of replaces the original module.

/// @ts-ignore
import * as React from "@types/react";

declare module "react" {
    // tslint:disable-next-line:no-empty-interface
    interface Component extends F7ComponentExtensions {}
    interface F7ComponentExtensions {
        /**
         * Callback function that will be executed when Framework7 fully intialized. Useful to use in components when you need to access Framework7 API and to be sure it is ready. So it is safe to put all Framework7 related logic into this callback. As an argument it receives initialized Framework7 instance. For example:
         * 
         *  export default class extends React.Component {
         *      ...
         *      render() {
         *          ...
         *      },
         *      componentDidMount() {
         *          this.$f7ready((f7) => {
         *          f7.dialog.alert('Component mounted');
         *          });
         *      },
         *      ...
         *  };
         * 
         */
        $f7ready: any

        /** Main Framework7's initialized instance. It allows you to use any of Framework7 APIs */
        $f7: any
        
        /** Access to built-in Dom7 DOM library that utilizes most edge and high-performance methods for DOM manipulation */
        $$: any
        /** Access to built-in Dom7 DOM library that utilizes most edge and high-performance methods for DOM manipulation */
        Dom7: any
            
        /** Access to Device utilities */
        $device: any
        /** Access to Request library for XHR requests */
        $request: any
        /** Access to Utils object with few useful utilities */
        $utils: any
        /** Object with boolean properties with information about currently used theme (iOS or MD): this.$theme.ios and this.$theme.material */
        $theme: any
        /**
         * Framework7 Router Instance. It has a lot of useful Methods & Properties to use for navigation
         * 
         * This property only available for components loaded with router (e.g. pages, routable modals, routable tabs). If you need to access this property in "deeper" child components, then you need to pass it down using props.
         */
        $f7router: any


        /**
         * Object with current route data that was used to load this page, tab or modal. It has the following properties
         * 
         * url - route URL
         * path - route path
         * query - object with route query. If the url is /page/?id=5&foo=bar then it will contain the following object {id: '5', foo: 'bar'}
         * params - route params. If we have matching route with /page/user/:userId/post/:postId/ path and url of the page is /page/user/55/post/12/ then it will be the following object {userId: '55', postId: '12'}
         * name - route name
         * hash - route URL hash
         * route - object with matching route from available routes
         * context - context that was passed to the route
         *
         * This property only available for components loaded with router (e.g. pages, routable modals, routable tabs). If you need to access this property in "deeper" child components, then you need to pass it down using props.
         */
        $f7route: any
    }
}
