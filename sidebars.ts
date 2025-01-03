import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tech: [
    'timeline',
    'local-dev',
    {
      type: 'category',
      label: '🛠️ Homelab',
      link: {
        type: 'generated-index',
        title: '🛠️ Homelab',
        description: 'Homelab setup.',
        slug: '/homelab'
      },
      items: [
        'homelab/hardware',
        'homelab/proxmox',
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
  ]
};

export default sidebars;
