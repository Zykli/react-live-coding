export default [
  {
    icon: 'fas fa-medal',
    title: 'Kурс молодого бойца и подводчика',
    rewards: [
      {
        prize: 20,
        name: 'пряников'
      },
      {
        prize: 5,
        name: 'очков рейтинга "Молодец"'
      },
      {
        prize: 'бейдж',
        name: 'Только находчивые'
      }
    ],
    actions: [
      {
        icon: 'far fa-check-circle',
        status: 'finish',
        title: 'Заполнить профиль'
      },
      {
        icon: 'fas fa-circle-notch',
        status: 'in_progress',
        title: 'Пройти онлайн курс по продажам'
      },
      {
        icon: 'fas fa-check-circle',
        status: 'not_ready',
        title: 'Bыпить воды'
      },
      {
        icon: 'fas fa-clock',
        status: 'not_ready',
        title: 'Зайти в систему 20 раз'
      },
      {
        icon: 'fas fa-check-circle',
        status: 'in_progress',
        title: 'Поспать и записать сны'
      }
    ]
  },
  {
    icon: 'far fa-star',
    title: 'Выполнить план по продажам',
    rewards: [
      {
        prize: 40,
        name: 'пряников'
      },
      {
        prize: 0,
        name: 'бейдж "Добытчик"'
      }
    ],
    actions: [
      {
        status: 'finish',
        title: 'найти одного клинета'
      },
      {
        status: 'in_progress',
        title: 'найти второго клинета'
      },
      {
        status: 'not_ready',
        title: 'найти третьего клинета'
      },
      {
        status: 'not_ready',
        title: 'найти четвертого клинета'
      }
    ]
  },
  {
    icon: 'fas fa-star-of-life',
    title: 'Перевыполнить план по продажам',
    rewards: [
      {
        prize: 80,
        name: 'пряников'
      },
      {
        prize: 0,
        name: 'бейдж "Суперобытчик"'
      }
    ],
    actions: [
      {
        status: 'in_progress',
        title: 'перевыполнить план продаж в 2 раза'
      }
    ]
  },
]