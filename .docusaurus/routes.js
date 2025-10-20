import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
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
    component: ComponentCreator('/docs', 'f96'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd77'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '225'),
            routes: [
              {
                path: '/docs/api',
                component: ComponentCreator('/docs/api', 'dfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture-overview',
                component: ComponentCreator('/docs/architecture-overview', '4a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/architecture/adr/routing-and-guards',
                component: ComponentCreator('/docs/architecture/adr/routing-and-guards', '703'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/architecture',
                component: ComponentCreator('/docs/category/architecture', '6d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/component-catalog',
                component: ComponentCreator('/docs/category/component-catalog', 'eba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/playbooks',
                component: ComponentCreator('/docs/category/playbooks', '1fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/box-selector',
                component: ComponentCreator('/docs/components/box-selector', '4c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/breadcrumbs',
                component: ComponentCreator('/docs/components/breadcrumbs', '2be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/button',
                component: ComponentCreator('/docs/components/button', 'd2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/checkbox-input',
                component: ComponentCreator('/docs/components/checkbox-input', '979'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/contact-form',
                component: ComponentCreator('/docs/components/contact-form', 'ec0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/cta-section',
                component: ComponentCreator('/docs/components/cta-section', 'f02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/dropdown',
                component: ComponentCreator('/docs/components/dropdown', '516'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/expansion-panel',
                component: ComponentCreator('/docs/components/expansion-panel', 'a4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/footer',
                component: ComponentCreator('/docs/components/footer', '15c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/form-input',
                component: ComponentCreator('/docs/components/form-input', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/google-sign-in-button',
                component: ComponentCreator('/docs/components/google-sign-in-button', 'e08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/icon',
                component: ComponentCreator('/docs/components/icon', '342'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/location-search',
                component: ComponentCreator('/docs/components/location-search', '3fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/otp-input',
                component: ComponentCreator('/docs/components/otp-input', '35d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/passwords-container',
                component: ComponentCreator('/docs/components/passwords-container', '69b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/price-selector',
                component: ComponentCreator('/docs/components/price-selector', '091'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/product-box',
                component: ComponentCreator('/docs/components/product-box', '0fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/search',
                component: ComponentCreator('/docs/components/search', '97d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/select',
                component: ComponentCreator('/docs/components/select', '9a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/social-media-input',
                component: ComponentCreator('/docs/components/social-media-input', '49c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/components/spinner',
                component: ComponentCreator('/docs/components/spinner', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '2a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/permissions',
                component: ComponentCreator('/docs/permissions', '9d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/playbooks/add-a-route',
                component: ComponentCreator('/docs/playbooks/add-a-route', 'c53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/routing-map',
                component: ComponentCreator('/docs/routing-map', 'fdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/state-slices',
                component: ComponentCreator('/docs/state-slices', 'c9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/terminology',
                component: ComponentCreator('/docs/terminology', '33a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-flows',
                component: ComponentCreator('/docs/user-flows', '636'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ux-conventions',
                component: ComponentCreator('/docs/ux-conventions', '8c1'),
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
