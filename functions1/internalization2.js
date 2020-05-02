let extractRegion = locale => locale.substring(3,5);
function extractLanguage(locale) {
  return locale.substring(0,2);
}

function localGreet(locale) {
  let region = extractRegion(locale);
  let language = extractLanguage(locale);
  
  if (language === 'en') {
    switch (region) {
  case 'US': return 'Hey!';
  case 'GB': return 'Hello!';
  case 'AU': return 'Howdy!';
    }
  } else {
  switch (language) {
  case 'en': return 'Hi!';
  case 'fr': return 'Salut!';
  case 'au': return 'Howdy';
    }
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'