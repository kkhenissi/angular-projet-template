import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: '',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
    ]
  },
  {
    id: 'ui-element',
    title: 'Administration',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'components',
        title: 'Gestion du portail',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'button',
            title: 'Catégories articles',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'Sous-catégories articles',
            type: 'item',
            url: '/basic/badges'
          },
           {
             id: 'breadcrumb-pagination',
             title: 'Paramètres globaux',
             type: 'item',
             url: '/basic/breadcrumb-paging'
           },
           {
             id: 'collapse',
             title: 'Campagnes',
             type: 'item',
             url: '/basic/collapse'
           },
           {
             id: 'tabs-pills',
             title: 'Gestion des imports',
             type: 'item',
             url: '/basic/tabs-pills'
           },
           {
             id: 'typography',
             title: 'Gestion des articles',
             type: 'item',
             url: '/basic/typography'
           }
        ]
      }
    ]
  },


  // {
  //   id: 'forms',
  //   title: 'Forms & Tables',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'forms-element',
  //       title: 'Forms Elements',
  //       type: 'item',
  //       url: '/forms/basic',
  //       icon: 'feather icon-file-text',
  //       classes: 'nav-item'
  //     },
  //     {
  //       id: 'tables',
  //       title: 'Tables',
  //       type: 'item',
  //       url: '/tables/bootstrap',
  //       icon: 'feather icon-server',
  //       classes: 'nav-item'
  //     }
  //   ]
  // },
  // {
  //   id: 'chart-maps',
  //   title: 'Chart & Maps',
  //   type: 'group',
  //   icon: 'icon-charts',
  //   children: [
  //     {
  //       id: 'charts',
  //       title: 'Charts',
  //       type: 'item',
  //       url: '/charts/morris',
  //       icon: 'feather icon-pie-chart',
  //       classes: 'nav-item'
  //     },
  //     {
  //       id: 'maps',
  //       title: 'Maps',
  //       type: 'item',
  //       url: '/maps/google',
  //       icon: 'feather icon-map',
  //       classes: 'nav-item'
  //     }
  //   ]
  // },


  {
    id: 'pages',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-pages',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Signup',
            type: 'item',
            url: '/auth/signup',
            target: true
          },
          {
            id: 'signin',
            title: 'Signin',
            type: 'item',
            url: '/auth/signin',
            target: true
          }
        ]
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        icon: 'feather icon-sidebar',
        classes: 'nav-item'
      },
      {
        id: 'disabled-menu',
        title: 'Disabled Menu',
        type: 'item',
        url: 'javascript:',
        classes: 'nav-item disabled',
        icon: 'feather icon-power',
        external: true
      },
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
