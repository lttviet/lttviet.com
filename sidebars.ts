import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tech: [
    'timeline',
    'local-dev',
    'keyboards',
    {
      type: 'category',
      label: '🛠️ Homelab',
      link: {
        type: 'doc',
        id: 'homelab/index',
      },
      items: [
        'homelab/hardware',
        'homelab/proxmox',
        'homelab/secrets',
        'homelab/cloud-init',
        'homelab/terraform',
        'homelab/ansible',
        'homelab/k3s',
        'homelab/dns',
        'homelab/wildcard-tls-cert',
        'homelab/vpn',
      ]
    },
    {
      type: 'category',
      label: '📚 Guides',
      link: {
        type: 'generated-index',
        title: '📚 Guides',
        slug: '/guides'
      },
      items: [
        'guides/git-submodule',
        'guides/homepass',
        {
          Outdated: [
            'guides/outdated/ansible',
            'guides/outdated/win10',
            'guides/outdated/wireguard'
          ]
        }
      ]
    },
    'llm',
    'stable-diffusion',
    'low-code'
  ],
  finance: [
    'finance/credit-cards',
    'finance/investment',
    'finance/robinhood',
    'finance/crypto',
  ],
  books: [
    'books/index',
    'books/1984',
    'books/slaughterhouse-five',
    'books/project-hail-mary',
    'books/snow-crash',
    'books/the-metamorphosis-of-prime-intellect',
    {
      'Papers': [
        'books/papers/dreaming-is-the-inverse-of-anxious-mind-wandering',
        'books/papers/the-superior-virtue-of-the-oppressed',
      ]
    },
  ],
  games: [
    'games/metaphor-refantazio',
    'games/baldurs-gate-3',
    'games/armored-core-6',
  ]
};

export default sidebars;
