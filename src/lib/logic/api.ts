export async function sendDataToServer(data) {
  try {
    const response = await fetch(`${serverAddress}/event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      console.log('Данные успешно отправлены на сервер!');
    } else {
      console.error('Ошибка при отправке данных на сервер:', response.status);
    }
  } catch (error) {
    console.error('Ошибка при отправке данных на сервер:', error);
  }
}
