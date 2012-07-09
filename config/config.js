( function(winkstart, amplify, $) {

    winkstart.config =  {
        /* Was winkstart.debug */
        debug: false,

        advancedView: false,

        /* web server used by the cdr module to show the link to the logs */
        logs_web_server_url: 'http://cdrs.2600hz.com/',

        /* Customized name displayed in the application (login page, resource module..) */
        company_name: 'Lincom-3000',

        base_urls: {
            'u.2600hz.com': {
                /* If this was set to true, Winkstart would look for u_2600hz_com.png in config/images/logos */
                custom_logo: false
            },
            'apps.2600hz.com': {
                custom_logo: false
            }
        },

        /* Was winkstart.realm_suffix */
        realm_suffix: {
            login: '.sip.2600hz.com',
            register: '.trial.2600hz.com'
        },

        /* What applications is available for a user that just registered */
        register_apps: {
            cluster: {
               label: 'Cluster Manager',
               icon: 'cluster_manager',
               api_url: 'http://apps.2600hz.com:8000/v1'
            },
            voip: {
                label: 'Trial PBX',
                icon: 'phone',
                api_url: 'http://apps001-demo-ord.2600hz.com:8000/v1'
            }
        },

        /* Custom links */
        nav: {
            help: 'http://www.2600hz.org/support.html'
            /* logout: ''*/
        }
    };

    winkstart.apps = {
        'auth' : {
            api_url: 'http://apps.2600hz.com:8000/v1',
            /* These are some settings that are set automatically. You are free to override them here.
            account_id: null,
            auth_token: null,
            user_id: null,
            realm: null
            */
        },
        'myaccount': {}
    };

    amplify.cache = false;

})(window.winkstart = window.winkstart || {}, window.amplify = window.amplify || {}, jQuery);
