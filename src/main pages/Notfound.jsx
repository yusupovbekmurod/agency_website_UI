import React, {useEffect} from 'react'

export default function Notfound() {

    useEffect(() => {
        document.title = 'Error';
      }, []);

  return (
    <div>
        К сожалению, произошла ошибка, Запрошенная Вами страница не найдена!
    </div>
  )
}
