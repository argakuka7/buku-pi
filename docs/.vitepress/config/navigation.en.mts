import type { DefaultTheme } from 'vitepress'

/** English global navigation (top bar). */
export const nav = [
      { text: 'Home', link: '/en/' },
      {
        text: 'Start Learning',
        items: [
          {
            text: 'Entry points',
            items: [
              { text: 'Learning map: 5 modules, 14 lessons', link: '/en/mulai' },
              { text: 'First success in 30 minutes', link: '/en/guide/start-here' },
              { text: 'Full table of contents', link: '/en/guide/' },
              { text: 'Choosing between Pi, OMP, and Selesai', link: '/en/reference/pi-forks' },
              { text: 'Start with the introduction', link: '/en/guide/introduction' },
              { text: 'How Pi works end to end', link: '/en/guide/how-pi-works' }
            ]
          },
          {
            text: 'Finishing the course',
            items: [
              { text: 'CASE 08 · Capstone project', link: '/en/cases/graduation-project' }
            ]
          }
        ]
      },
      {
        text: 'Hands-on',
        items: [
          {
            text: 'Case studies & extensions',
            items: [
              { text: 'Case study library', link: '/en/cases/' },
              { text: 'Plugin picks & how to choose', link: '/en/plugins/' },
              { text: 'Skill, Extension, and Package', link: '/en/guide/skills-extensions-packages' }
            ]
          },
          {
            text: 'Management & safety',
            items: [
              { text: 'Lifecycle after installation', link: '/en/guide/lifecycle-management' },
              { text: 'Permissions, isolation, and verification', link: '/en/guide/safety' }
            ]
          }
        ]
      },
      {
        text: 'Find answers',
        items: [
          {
            text: 'Quick lookup',
            items: [
              { text: 'Reference home', link: '/en/reference/' },
              { text: 'Frequently asked questions (FAQ)', link: '/en/reference/faq' },
              { text: 'Troubleshooting guide', link: '/en/reference/troubleshooting' },
              { text: 'AI & agent terms', link: '/en/reference/glossary' }
            ]
          }
        ]
      },
      {
        text: 'Further reading',
        items: [
          {
            text: 'Articles & archive',
            items: [
              { text: 'Licensed Earendil translations', link: '/en/translations/' },
              { text: 'Learning notes', link: '/en/journey/' },
              { text: '98-tweet archive', link: '/en/tweets/' }
            ]
          }
        ]
      },
      { text: 'Releases', link: '/en/releases/' }
    ] satisfies DefaultTheme.NavItem[]

/** English sidebars per section. Learning order lives here, not in the main config. */
export const sidebar = {
      '/en/guide/': [
        {
          text: 'Buku Pi',
          collapsed: true,
          items: [
            { text: 'Full table of contents', link: '/en/guide/' },
            { text: 'First success in 30 minutes', link: '/en/guide/start-here' },
            { text: 'Introduction · Why read this book', link: '/en/guide/introduction' },
            { text: 'Ten judgments that still hold', link: '/en/guide/lasting-principles' },
            { text: 'Conventions and notes on this edition', link: '/en/guide/edition-2026' },
            { text: 'Prologue · Mario Zechner, the author of Pi', link: '/en/guide/mario-zechner' }
          ]
        },
        {
          text: 'Module 1 · Installation and basic setup',
          collapsed: true,
          items: [
            { text: '1. Checks before installing', link: '/en/guide/before-install' },
            { text: '2. Install and launch Pi', link: '/en/guide/install-pi' },
            { text: 'Installing on Windows', link: '/en/guide/windows-setup' },
            { text: '3. Login and model setup', link: '/en/guide/connect-model' },
            { text: '4. Starting from a practice directory', link: '/en/guide/ready-to-work' },
            { text: 'Maintenance · updates, logout, and uninstall', link: '/en/guide/lifecycle-management' }
          ]
        },
        {
          text: 'Module 2 · Completing real tasks',
          collapsed: true,
          items: [
            { text: '5. Your first task', link: '/en/guide/first-task' },
            { text: '6. Files and working directory', link: '/en/guide/files-and-context' },
            { text: '7. Saving and resuming sessions', link: '/en/guide/sessions' }
          ]
        },
        {
          text: 'Module 3 · Long tasks and context',
          collapsed: true,
          items: [
            { text: '8. Context and compaction', link: '/en/guide/context-and-compaction' },
            { text: '9. Prompt caching basics', link: '/en/guide/prompt-caching' }
          ]
        },
        {
          text: 'Module 4 · Extending your Pi',
          collapsed: true,
          items: [
            { text: '10. Skill, Extension, and Package', link: '/en/guide/skills-extensions-packages' },
            { text: '11. Extension requirements and verification', link: '/en/guide/first-extension' },
            { text: '12. How subagents divide work', link: '/en/guide/subagents' }
          ]
        },
        {
          text: 'How it fits together',
          collapsed: true,
          items: [
            { text: 'From Prompt to Agent Loop', link: '/en/guide/how-pi-works' }
          ]
        },
        {
          text: 'Module 5 · A stable workflow',
          collapsed: true,
          items: [
            { text: '13. Long-running tasks and VPS', link: '/en/guide/vps-and-long-running' },
            { text: '14. Permissions, isolation, and verification', link: '/en/guide/safety' }
          ]
        },
        {
          text: 'Wrap-up & troubleshooting',
          collapsed: true,
          items: [
            { text: 'CASE 08 · Capstone project', link: '/en/cases/graduation-project' },
            { text: 'Pi troubleshooting guide', link: '/en/reference/troubleshooting' }
          ]
        }
      ],
      '/en/cases/': [
        {
          text: 'Get hands-on',
          collapsed: true,
          items: [
            { text: 'Case library and how to use it', link: '/en/cases/' },
            { text: 'Full Buku Pi table of contents', link: '/en/guide/' }
          ]
        },
        {
          text: 'Single exercises · CASE 01–07',
          collapsed: true,
          items: [
            { text: 'CASE 01 · Action list from meeting notes', link: '/en/cases/meeting-notes' },
            { text: 'CASE 02 · Before and after compaction', link: '/en/cases/compaction-before-after' },
            { text: 'CASE 03 · Your first Skill', link: '/en/cases/first-skill' },
            { text: 'CASE 04 · A minimal Extension', link: '/en/cases/first-extension' },
            { text: 'CASE 05 · Two independent reviews', link: '/en/cases/independent-review' },
            { text: 'CASE 06 · Recovering from a checkpoint', link: '/en/cases/checkpoint-recovery' },
            { text: 'CASE 07 · Safety review before a task', link: '/en/cases/safe-review' }
          ]
        },
        {
          text: 'Applied exercises',
          collapsed: true,
          items: [
            { text: 'From raw material to a checkable draft', link: '/en/cases/content-workflow' },
            { text: 'Fixing a small program', link: '/en/cases/code-repair' }
          ]
        },
        {
          text: 'Capstone',
          collapsed: true,
          items: [
            { text: 'CASE 08 · Buku Pi capstone project', link: '/en/cases/graduation-project' }
          ]
        },
        {
          text: 'When things break',
          collapsed: true,
          items: [{ text: 'Pi troubleshooting guide', link: '/en/reference/troubleshooting' }]
        }
      ],
      '/en/plugins/': [
        {
          text: 'Choosing and understanding',
          collapsed: true,
          items: [
            { text: 'Recommendations overview and how to choose', link: '/en/plugins/' },
            { text: 'Skill, Extension, and Package', link: '/en/guide/skills-extensions-packages' }
          ]
        },
        {
          text: 'Hands-on practice',
          collapsed: true,
          items: [
            { text: 'CASE 03 · Your first Skill', link: '/en/cases/first-skill' },
            { text: 'CASE 04 · A minimal Extension', link: '/en/cases/first-extension' }
          ]
        },
        {
          text: 'Management and troubleshooting',
          collapsed: true,
          items: [
            { text: 'Lifecycle after installation', link: '/en/guide/lifecycle-management' },
            { text: 'Extension fails to load', link: '/en/reference/troubleshooting#extension-failed' },
            { text: 'Plugins conflict with each other', link: '/en/reference/troubleshooting#resource-conflict' },
            { text: 'Permissions, isolation, and verification', link: '/en/guide/safety' }
          ]
        },
        {
          text: 'Primary sources',
          collapsed: true,
          items: [{ text: 'Skill and Extension tweets', link: '/en/tweets/04-skills-extensions' }]
        }
      ],
      '/en/reference/': [
        {
          text: 'Quick lookup',
          collapsed: true,
          items: [
            { text: 'Topic index', link: '/en/reference/' },
            { text: 'Choosing between Pi, OMP, and Selesai', link: '/en/reference/pi-forks' },
            { text: 'Frequently asked questions (FAQ)', link: '/en/reference/faq' },
            { text: 'Pi troubleshooting guide', link: '/en/reference/troubleshooting' },
            { text: 'AI & agent terms', link: '/en/reference/glossary' }
          ]
        },
        {
          text: 'Understanding how it works',
          collapsed: true,
          items: [
            { text: 'From Prompt to Agent Loop', link: '/en/guide/how-pi-works' },
            { text: 'Files and working directory', link: '/en/guide/files-and-context' },
            { text: 'Session and resuming', link: '/en/guide/sessions' },
            { text: 'Context and compaction', link: '/en/guide/context-and-compaction' },
            { text: 'Prompt caching', link: '/en/guide/prompt-caching' }
          ]
        },
        {
          text: 'Capabilities and limits',
          collapsed: true,
          items: [
            { text: 'Skill, Extension, and Package', link: '/en/guide/skills-extensions-packages' },
            { text: 'Plugin picks & how to choose', link: '/en/plugins/' },
            { text: 'Subagent', link: '/en/guide/subagents' },
            { text: 'Permissions, isolation, and verification', link: '/en/guide/safety' }
          ]
        },
        {
          text: 'Keep learning',
          collapsed: true,
          items: [
            { text: 'Full Buku Pi table of contents', link: '/en/guide/' },
            { text: '8 hands-on case studies', link: '/en/cases/' }
          ]
        }
      ],
      '/en/releases/': [
        {
          text: 'Version archive',
          collapsed: false,
          items: [
            { text: 'All release notes', link: '/en/releases/' },
            { text: 'Updating Pi safely', link: '/en/guide/lifecycle-management' },
            { text: 'Troubleshooting guide', link: '/en/reference/troubleshooting' }
          ]
        },
        {
          text: 'Keep understanding',
          collapsed: false,
          items: [
            { text: 'How Pi works end to end', link: '/en/guide/how-pi-works' },
            { text: 'Ten judgments left by 98 tweets', link: '/en/guide/lasting-principles' },
            { text: 'Raw notes on version iterations', link: '/en/tweets/01-meet-pi#post-2092265777214951636' }
          ]
        }
      ],
      '/en/translations/': [
        {
          text: 'Translation index',
          collapsed: true,
          items: [
            { text: 'Overview of eleven licensed translations', link: '/en/translations/' }
          ]
        },
        {
          text: 'Session and context',
          collapsed: true,
          items: [
            { text: 'A session you cannot carry with you', link: '/en/translations/session-portability' },
            { text: 'How compaction works in Pi', link: '/en/translations/compaction-in-pi' },
            { text: 'Prompt caching in agents', link: '/en/translations/prompt-caching' }
          ]
        },
        {
          text: 'Harness and Pi',
          collapsed: true,
          items: [
            { text: 'What is an agent harness?', link: '/en/translations/what-is-a-harness' },
            { text: 'This harness is mine', link: '/en/translations/mine-agent-harness' },
            { text: 'Pi: minimal yet efficient', link: '/en/translations/pi-minimal-performant' }
          ]
        },
        {
          text: 'Announcements and long-term thinking',
          collapsed: true,
          items: [
            { text: 'Pi and Lefos are live', link: '/en/translations/announcing-pi-and-lefos' },
            { text: "Reflections on today's announcement", link: '/en/translations/announcement-reflection' },
            { text: 'The high ground', link: '/en/translations/the-high-ground' },
            { text: 'An invitation to start a correspondence', link: '/en/translations/invitation' }
          ]
        },
        {
          text: 'Code quality and evaluation',
          collapsed: true,
          items: [
            { text: 'Measuring code sloppiness', link: '/en/translations/measuring-code-sloppiness' }
          ]
        },
        {
          text: 'Back to the Buku Pi',
          collapsed: true,
          items: [
            { text: 'From Prompt to Agent Loop', link: '/en/guide/how-pi-works' },
            { text: 'Reference topic index', link: '/en/reference/' }
          ]
        }
      ],
      '/en/journey/': [
        {
          text: 'Learning notes',
          collapsed: true,
          items: [
            { text: 'Writing beyond the Buku Pi', link: '/en/journey/' },
            { text: 'Why sessions and context stay in your hands', link: '/en/journey/why-pi-keeps-context-editable' },
            { text: '98-tweet archive', link: '/en/tweets/' }
          ]
        },
        {
          text: 'Learning stages',
          collapsed: true,
          items: [
            { text: '1. Meeting Pi out of curiosity', link: '/en/tweets/01-meet-pi' },
            { text: '2. Finish your first task first', link: '/en/tweets/02-first-tasks' },
            { text: '3. Understanding Session and context', link: '/en/tweets/03-sessions-context' },
            { text: '4. Skill and Extension', link: '/en/tweets/04-skills-extensions' },
            { text: '5. Teaching subagents to divide work', link: '/en/tweets/05-subagents-research' },
            { text: '6. Turning Pi into a long-term workflow', link: '/en/tweets/06-long-running' }
          ]
        },
        {
          text: 'Back to current conclusions',
          collapsed: true,
          items: [
            { text: 'Ten judgments that still hold', link: '/en/guide/lasting-principles' },
            { text: 'Full Buku Pi table of contents', link: '/en/guide/' }
          ]
        }
      ],
      '/en/tweets/': [
        {
          text: 'Learning notes',
          collapsed: true,
          items: [
            { text: 'Writing beyond the Buku Pi', link: '/en/journey/' },
            { text: 'Why sessions and context stay in your hands', link: '/en/journey/why-pi-keeps-context-editable' },
            { text: '98-tweet archive', link: '/en/tweets/' }
          ]
        },
        {
          text: 'Learning stages',
          collapsed: true,
          items: [
            { text: '1. Meeting Pi out of curiosity', link: '/en/tweets/01-meet-pi' },
            { text: '2. Finish your first task first', link: '/en/tweets/02-first-tasks' },
            { text: '3. Understanding Session and context', link: '/en/tweets/03-sessions-context' },
            { text: '4. Skill and Extension', link: '/en/tweets/04-skills-extensions' },
            { text: '5. Teaching subagents to divide work', link: '/en/tweets/05-subagents-research' },
            { text: '6. Turning Pi into a long-term workflow', link: '/en/tweets/06-long-running' }
          ]
        },
        {
          text: 'Back to current conclusions',
          collapsed: true,
          items: [
            { text: 'Ten judgments that still hold', link: '/en/guide/lasting-principles' },
            { text: 'Full Buku Pi table of contents', link: '/en/guide/' }
          ]
        }
      ]
    } satisfies DefaultTheme.Sidebar
