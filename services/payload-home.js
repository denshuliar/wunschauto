const payloadHome = {
  section_head: {
    background_image: {
      url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/herobg.jpg'
    },
    image: {
      url: 'https://wunschauto.onrender.com/_nuxt/img/logowhite.0698d1e.png'
    },
    title: 'Findet dein Wunschauto',
    subtitle: 'M2 ist Ihre Plattform für einen reibungslosen Autokauf- und verkauf.',
    button_1: 'M2 findet', // links will be hardcoded
    button_2: 'M2 Inseriert' // links will be hardcoded
  },
  section_referenzen: {
    title: 'Referenzen',
    subtitle: 'Die Zufriedenheit unserer Kunden steht bei uns an erster Stelle. M2 setzt dabei auf Vertrauen und Zuverlässigkeit. Wir freuen uns immer über positive Rückmeldungen einer erfolgreichen Zusammenarbeit.',
    referenzen: [
      {
        image: {
          url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/3.jpg'
        },
        price: '€ 149,90',
        title: 'Car Model Name',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, remaperiam, eaque ipsa quae ab illo',
        subtitle: 'Clients Name'
      },
      {
        image: {
          url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/2.jpg'
        },
        price: '€ 149,90',
        title: 'Car Model Name',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, remaperiam, eaque ipsa quae ab illo',
        subtitle: 'Clients Name'
      },
      {
        image: {
          url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/adam-niescioruk-HJHcFGPuZ4Q-unsplash-scaled.jpg'
        },
        price: '€ 149,90',
        title: 'Car Model Name',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, remaperiam, eaque ipsa quae ab illo',
        subtitle: 'Clients Name'
      },
      {
        image: {
          url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/1.jpg'
        },
        price: '€ 149,90',
        title: 'Car Model Name',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, remaperiam, eaque ipsa quae ab illo',
        subtitle: 'Clients Name'
      }
    ]
  },
  section_vorteile: {
    title: 'Deine Vorteile bei M2',
    subtitle: 'Vorteile',
    vorteile: [
      {
        image: {
          url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/1.svg'
        },
        title: 'Unkomplizierte Autosuche',
        description: 'Nutzen Sie unseren umfangreichen, flexiblen Service und wir finden Ihr Wunschauto zu Top-Konditionen.'
      },
      {
        image: {
          url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/2.svg'
        },
        title: 'Einfache Autoinserierung',
        description: 'Wir inserieren für Sie auf verschiedenen Plattformen und finden das beste Kaufangebot für Ihr Auto.'
      },
      {
        image: {
          url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/3.svg'
        },
        title: 'Organisierter Transport',
        description: 'Genießen Sie den Komfort unseres „Schlüsselfertig-Service“, während wir uns um Transport und bürokratische Angelegenheiten kümmern.'
      },
      {
        image: {
          url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/4.svg'
        },
        title: 'Freude mit Ihrem Wunschauto',
        description: 'Mit M2 kommen Sie effizient und stressfrei an Ihr Ziel.'
      }
    ]
  },
  section_services: {
    // checkbox images must be hardcoded
    // checkbox image : "https://wunschauto.onrender.com/_nuxt/img/tick.e546d3c.svg"
    // price label image : data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAZAGsDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAkLCP/EACYQAAEEAgIABQUAAAAAAAAAAAQAAwUGAgcBCAkSExQVChE3hrb/xAAYAQEAAwEAAAAAAAAAAAAAAAAACAkKB//EACQRAAEEAgEEAgMAAAAAAAAAAAMAAgQFAQYHCBESEwkVFBYh/9oADAMBAAIRAxEAPwCJ6Iir/W3hERERERERERERERERERERdPdP+p+z+6W96jonVYf2lJ57k6x2QoZ9+EolNBeHxn7nYcmOcecI6KaIZaHH9Vl2XmC4yCCc+QlBcctELRvQbqlojUlC1FA6V1tZ4+jQLETzZrvRKnZ7bZZDN546ZsNgmpWIKKJkpyYMPlCGGnGo2P5L4jYYOPiBAQBp1/T96z601npeJf8ATcwNadr3qXzZ7BzR4o4lnrlvh+XPjdd5iYuPPg1WAjDG5SuO+u43YvmzLJn7Z6QyiIe7ilTxjpsCqpQ20hsadYXEcZ8lxgZxRoj/ABIKIF2fJuX98YfLe3t3M1ov60DXOza/Ib1W7pyRyzacZUZNg0/SOLLqdVDrnum0tnsGzxfZDsNktI+Mx5DImBuLF1qOby8aoxbPOBluCx4+SuiIorLSUiIiIiIiIiIiIiIiIiIiIqAeHJ33v/QHfkZsaB5NnNb2XkKv7j15gR5BbfUPc85e8CadzxGHt9XzeflapKZctZtE8lw5T/EJOTI5OjJqXa+v9561pm3dWWQG3a/v8GLYaxPx+WXpGAk+bBxkhhzHAmPlI0tomLmog5oeShZgI6JkxRZAIkdrKbVmOqP4BoX7T/aWNda433efR4lVJA/n1+RvlRwvPkLop/YJhPST1G7BNh+XPD4YbguPYzLXPL7KxevzpA03mB2t8lQbX9M3cc6Prd3axacdrH2So+vnyYH2kPFhVOdZ1ToTY8KzxJcV1cZ0CUOQGLW5g//Z
    service_1: {
      title: 'M2 findet',
      image: {
        url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/pexels-pixabay-164654-scaled.jpg'
      },
      list: [
        {
          title: 'Das sorgfältige Ausfüllen von Datenbankformularen'
        },
        {
          title: 'Die umfangreiche Suche auf diversen Plattformen'
        },
        {
          title: 'Das detaillierte Filtern und Vergleichen der Suchergebnisse'
        },
        {
          title: 'Das Führen erfolgreicher Preisverhandlungen'
        },
        {
          title: 'Den professionellen Kontakt mit AutoverkäuferInnen'
        }
      ],
      button: 'Zum Formular',
      price: '€ 149,90'
    },
    service_2: {
      title: 'M2 inseriert',
      image: {
        url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/campbell-3ZUsNJhi_Ik-unsplash-scaled-e1613683235392.jpg'
      },
      list: [
        {
          title: 'Die Gestaltung ansprechender Inserate auf diversen Plattformen'
        },
        {
          title: 'Die verlässliche Kontaktabwicklung mit InteressentInnen'
        },
        {
          title: 'Das Führen erfolgreicher Preisverhandlungen'
        },
        {
          title: 'Die professionelle Verkaufsabwicklung'
        },
        {
          title: 'Die laufende Beobachtung und Anpassung des Inserats (Preisanpassungen, Anfragen etc.)'
        }
      ],
      button: 'Zum Formular'
    }
  },
  section_contact: {
    title: 'Nehmen Sie Kontakt mit uns auf',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    button: 'Kontakt',
    background_image: {
      url: 'https://admin.m2-wunschauto.at/wp-content/uploads/2021/02/contact.jpg'
    }
  }
}

const getPayloadHome = () => {
	return payloadHome
}

export default {
	getPayloadHome
}
