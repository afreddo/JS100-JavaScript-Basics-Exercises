function greet(language) {
  switch (language) {
    case 'en':
      console.log('Hi!');
      break;
      case 'fr':
        console.log('Salut!');
        break;
        default:
        console.log('Howdy');
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'