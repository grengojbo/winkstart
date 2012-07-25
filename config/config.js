( function(winkstart, amplify, $) {

    winkstart.config =  {
        /* Was winkstart.debug */
        debug: true,

        advancedView: false,

        register_type: 'onboard',

        onboard_roles: {
            'default': {
                apps: {
                    voip: {
                        label: 'Hosted PBX',
                        icon: 'phone',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    },
                    pbxs: {
                        label: 'PBX Connector',
                        icon: 'device',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    },
                    numbers: {
                        label: 'Number Manager',
                        icon: 'menu1',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    }
                },
                available_apps: ['voip', 'cluster', 'userportal', 'accounts', 'developer', 'numbers', 'pbxs'],
                default_api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
            },
            'reseller': {
                apps: {
                    voip: {
                        label: 'Hosted PBX',
                        icon: 'phone',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    },
                    accounts: {
                        label: 'Accounts',
                        icon: 'account',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    },
                    numbers: {
                        label: 'Number Manager',
                        icon: 'menu1',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    }
                },
                available_apps: ['voip', 'cluster', 'userportal', 'accounts', 'developer', 'numbers', 'pbxs'],
                default_api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
            },
            'small_office': {
                apps: {
                    voip: {
                        label: 'Hosted PBX',
                        icon: 'phone',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    },
                    numbers: {
                        label: 'Number Manager',
                        icon: 'menu1',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    }
                },
                available_apps: ['voip', 'cluster', 'userportal', 'accounts', 'developer', 'numbers', 'pbxs'],
                default_api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
            },
            'single_phone': {
                apps: {
                    voip: {
                        label: 'Hosted PBX',
                        icon: 'phone',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    },
                    numbers: {
                        label: 'Number Manager',
                        icon: 'menu1',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    }
                },
                available_apps: ['voip', 'cluster', 'userportal', 'accounts', 'developer', 'numbers', 'pbxs'],
                default_api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
            },
            'api_developer': {
                apps: {
                    developer: {
                        label: 'Developer Tool',
                        icon: 'connectivity',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    },
                    numbers: {
                        label: 'Number Manager',
                        icon: 'menu1',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    }
                },
                available_apps: ['voip', 'cluster', 'userportal', 'accounts', 'developer', 'numbers', 'pbxs'],
                default_api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
            },
            'voip_minutes': {
                apps: {
                    pbxs: {
                        label: 'PBX Connector',
                        icon: 'device',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    },
                    numbers: {
                        label: 'Number Manager',
                        icon: 'menu1',
                        api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
                    }
                },
                available_apps: ['voip', 'cluster', 'userportal', 'accounts', 'developer', 'numbers', 'pbxs'],
                default_api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
            }
        },

        device_threshold: [5, 20, 50, 100],

        /* web server used by the cdr module to show the link to the logs */
        logs_web_server_url: 'http://cdrs.2600hz.com/',

        /* Customized name displayed in the application (login page, resource module..) */
        company_name: '2600hz',

        base_urls: {
            'u.sky5.com.ua': {
                /* If this was set to true, Winkstart would look for u_2600hz_com.png in config/images/logos */
                custom_logo: false
            },
            'apps.sky5.com.ua': {
                custom_logo: false
            }
        },

        /* Was winkstart.realm_suffix */
        realm_suffix: {
            login: '.sip.sky5.com.ua',
            register: '.trial.sky5.com.ua'
        },

        /* What applications is available for a user that just registered */
        register_apps: {
            cluster: {
               label: 'Cluster Manager',
               icon: 'cluster_manager',
               api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
            },
            voip: {
                label: 'Trial PBX',
                icon: 'phone',
                api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
            },
            accounts: {
                label: 'Accounts',
                icon: 'account',
                api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
            }
        },

        /* Custom links */
        nav: {
            help: 'http://blog.sky5.com.ua/support/'
            /* logout: ''*/
        },

        default_api_url: 'http://linkom3000-10.cosmonova.net.ua/v1',

        available_apps: {
            'voip': {
                id: 'voip',
                label: 'Hosted PBX',
                icon: 'device',
                desc: 'Manage vmboxes, callflows ...'
            },
            'cluster': {
                id: 'cluster',
                label: 'Cluster Manager',
                icon: 'cluster_manager',
                desc: 'Manage Servers and Infrastructure'
            },
            'userportal': {
                id: 'userportal',
                label: 'Userportal',
                icon: 'user',
                desc: 'Let the user manage is own vmbox ...'
            },
            'accounts': {
                id: 'accounts',
                label: 'Accounts',
                icon: 'account',
                desc: 'Manage your sub-accounts'
            },
            'developer': {
                id: 'developer',
                label: 'Developer',
                icon: 'connectivity',
                desc: 'Api Developer Tool'
            },
            'pbxs': {
                id: 'pbxs',
                label: 'PBX Connector',
                icon: 'device',
                desc: 'Manage your pbxs'
            },
            'numbers': {
                id: 'numbers',
                label: 'Number Manager',
                icon: 'menu1',
                desc: 'Manage your numbers'
            }
        }
    };

    winkstart.apps = {
        'auth' : {
            api_url: 'http://linkom3000-10.cosmonova.net.ua/v1'
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
