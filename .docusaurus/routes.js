import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '37e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '083'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '14b'),
            routes: [
              {
                path: '/docs/developer/api/',
                component: ComponentCreator('/docs/developer/api/', '4b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/api/auth',
                component: ComponentCreator('/docs/developer/api/auth', '15c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/api/calendar',
                component: ComponentCreator('/docs/developer/api/calendar', '72b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/api/http-client',
                component: ComponentCreator('/docs/developer/api/http-client', '821'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/api/products',
                component: ComponentCreator('/docs/developer/api/products', '0cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/api/user',
                component: ComponentCreator('/docs/developer/api/user', 'f8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/architecture/',
                component: ComponentCreator('/docs/developer/architecture/', '8a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/architecture/adr/routing-and-guards',
                component: ComponentCreator('/docs/developer/architecture/adr/routing-and-guards', '4eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/architecture/application-structure',
                component: ComponentCreator('/docs/developer/architecture/application-structure', '337'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/architecture/routing-and-access',
                component: ComponentCreator('/docs/developer/architecture/routing-and-access', '20d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/architecture/state-and-data-flow',
                component: ComponentCreator('/docs/developer/architecture/state-and-data-flow', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/',
                component: ComponentCreator('/docs/developer/components/', 'f2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/box-selector',
                component: ComponentCreator('/docs/developer/components/box-selector', '079'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/breadcrumbs',
                component: ComponentCreator('/docs/developer/components/breadcrumbs', '2e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/button',
                component: ComponentCreator('/docs/developer/components/button', '254'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/checkbox-input',
                component: ComponentCreator('/docs/developer/components/checkbox-input', 'a60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/contact-form',
                component: ComponentCreator('/docs/developer/components/contact-form', '23f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/cta-section',
                component: ComponentCreator('/docs/developer/components/cta-section', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/drawer',
                component: ComponentCreator('/docs/developer/components/drawer', '2ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/dropdown',
                component: ComponentCreator('/docs/developer/components/dropdown', '3a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/expansion-group',
                component: ComponentCreator('/docs/developer/components/expansion-group', '927'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/expansion-panel',
                component: ComponentCreator('/docs/developer/components/expansion-panel', '974'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/footer',
                component: ComponentCreator('/docs/developer/components/footer', '5d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/form-input',
                component: ComponentCreator('/docs/developer/components/form-input', 'eb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/google-sign-in-button',
                component: ComponentCreator('/docs/developer/components/google-sign-in-button', 'da8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/icon',
                component: ComponentCreator('/docs/developer/components/icon', '850'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/location-search',
                component: ComponentCreator('/docs/developer/components/location-search', 'a9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/otp-input',
                component: ComponentCreator('/docs/developer/components/otp-input', '764'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/passwords-container',
                component: ComponentCreator('/docs/developer/components/passwords-container', '326'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/price-selector',
                component: ComponentCreator('/docs/developer/components/price-selector', 'af4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/product-box',
                component: ComponentCreator('/docs/developer/components/product-box', '1c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/rich-text-editor',
                component: ComponentCreator('/docs/developer/components/rich-text-editor', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/rte-menu-bar',
                component: ComponentCreator('/docs/developer/components/rte-menu-bar', '557'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/search',
                component: ComponentCreator('/docs/developer/components/search', '020'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/select',
                component: ComponentCreator('/docs/developer/components/select', '20b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/social-media-input',
                component: ComponentCreator('/docs/developer/components/social-media-input', '052'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/spinner',
                component: ComponentCreator('/docs/developer/components/spinner', 'dc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/status-badge',
                component: ComponentCreator('/docs/developer/components/status-badge', 'dc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/tabs',
                component: ComponentCreator('/docs/developer/components/tabs', 'a04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/components/uppy-file-uploader',
                component: ComponentCreator('/docs/developer/components/uppy-file-uploader', 'd53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/developer-overview',
                component: ComponentCreator('/docs/developer/developer-overview', '46c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/frontend-api-reference',
                component: ComponentCreator('/docs/developer/frontend-api-reference', '775'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/local-setup',
                component: ComponentCreator('/docs/developer/local-setup', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/playbooks/add-a-route',
                component: ComponentCreator('/docs/developer/playbooks/add-a-route', '03c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/routing-and-access-reference',
                component: ComponentCreator('/docs/developer/routing-and-access-reference', 'eef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/state-reference',
                component: ComponentCreator('/docs/developer/state-reference', '20a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer/ux-conventions',
                component: ComponentCreator('/docs/developer/ux-conventions', '182'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/administrators/admin-overview',
                component: ComponentCreator('/docs/product/administrators/admin-overview', '94e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/administrators/audit-logs',
                component: ComponentCreator('/docs/product/administrators/audit-logs', '453'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/administrators/creating-products-for-creators',
                component: ComponentCreator('/docs/product/administrators/creating-products-for-creators', '6f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/administrators/managing-products',
                component: ComponentCreator('/docs/product/administrators/managing-products', '04b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/administrators/managing-users',
                component: ComponentCreator('/docs/product/administrators/managing-users', '68b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/core-concepts/authentication-and-onboarding',
                component: ComponentCreator('/docs/product/core-concepts/authentication-and-onboarding', 'ed9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/core-concepts/calendar-connections',
                component: ComponentCreator('/docs/product/core-concepts/calendar-connections', '8e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/core-concepts/local-vs-server-backed-features',
                component: ComponentCreator('/docs/product/core-concepts/local-vs-server-backed-features', '2ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/core-concepts/product-statuses',
                component: ComponentCreator('/docs/product/core-concepts/product-statuses', '8a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/core-concepts/product-types',
                component: ComponentCreator('/docs/product/core-concepts/product-types', 'be9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/core-concepts/search-and-discovery',
                component: ComponentCreator('/docs/product/core-concepts/search-and-discovery', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/consultation-products',
                component: ComponentCreator('/docs/product/creators/consultation-products', 'f63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/course-products',
                component: ComponentCreator('/docs/product/creators/course-products', 'efc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/creating-a-product',
                component: ComponentCreator('/docs/product/creators/creating-a-product', '373'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/creator-overview',
                component: ComponentCreator('/docs/product/creators/creator-overview', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/creator-settings',
                component: ComponentCreator('/docs/product/creators/creator-settings', 'a9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/customers',
                component: ComponentCreator('/docs/product/creators/customers', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/download-products',
                component: ComponentCreator('/docs/product/creators/download-products', '8df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/managing-products',
                component: ComponentCreator('/docs/product/creators/managing-products', '5ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/marketing-and-reviews',
                component: ComponentCreator('/docs/product/creators/marketing-and-reviews', '9f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/membership-products',
                component: ComponentCreator('/docs/product/creators/membership-products', 'b01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/creators/sales',
                component: ComponentCreator('/docs/product/creators/sales', 'b83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/customers/customer-account-settings',
                component: ComponentCreator('/docs/product/customers/customer-account-settings', 'a09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/customers/customer-overview',
                component: ComponentCreator('/docs/product/customers/customer-overview', '4eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/customers/exploring-products',
                component: ComponentCreator('/docs/product/customers/exploring-products', 'bd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/customers/library',
                component: ComponentCreator('/docs/product/customers/library', 'f0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/customers/product-detail-pages',
                component: ComponentCreator('/docs/product/customers/product-detail-pages', '2aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/customers/shopping-cart',
                component: ComponentCreator('/docs/product/customers/shopping-cart', 'a42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/customers/wishlist',
                component: ComponentCreator('/docs/product/customers/wishlist', '100'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/start-here/current-platform-status',
                component: ComponentCreator('/docs/product/start-here/current-platform-status', '36c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/start-here/glossary',
                component: ComponentCreator('/docs/product/start-here/glossary', '64b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/start-here/product-overview',
                component: ComponentCreator('/docs/product/start-here/product-overview', '409'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/product/start-here/roles-and-access',
                component: ComponentCreator('/docs/product/start-here/roles-and-access', '889'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
