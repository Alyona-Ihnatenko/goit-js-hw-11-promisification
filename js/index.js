const delay = ms => {
    // Твой код
    setTimeout(() => {
        // Если все ок, то вызывается resolve и передаем данные
        resolve('Data passed into resolve function :)');
    
        // Если что-то не так, вызваем reject и передаем ошибку
        // reject("Error passed into reject function :(")
      }, '${time}');
    };
  
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
  // Вызовы функции для проверки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms