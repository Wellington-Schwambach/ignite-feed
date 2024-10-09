import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import { PostType } from './components/Post'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Wellington-Schwambach.png',
      name: 'Wellington Schwambach',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋'},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
      { type: 'paragraph', content: 'Acesse e deixe seu feedback 👉'},
      { type: 'link', content: 'devonline.design'},
    ],
    publishedAt: new Date('2024-09-26 21:05:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Wellington-Schwambach.png',
      name: 'Julia Schmidt da Silva',
      role: 'Civil Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋'},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
      { type: 'paragraph', content: 'Acesse e deixe seu feedback 👉'},
      { type: 'link', content: 'devonline.design'},
    ],
    publishedAt: new Date('2024-10-02 21:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}