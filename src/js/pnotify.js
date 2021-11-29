import { notice, error} from '@pnotify/core';

const onEmptyQuery = () => {
  notice({
    title: 'WARNING!',
    text: 'Type something',
    hide: true,
    delay: 1000
  });
}
const onError = () => {
  error({
    title: 'Oops',
    text: 'Sorry, but we can\'t find film card. Try again later...',
    hide: true,
    delay: 3000
  });
}

export { onEmptyQuery, onError } 