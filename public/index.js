const URL = 'http://localhost:4029';

const getHands = async () => {
  try {
    const response = await fetch(`${URL}`)
    const div2 =  document.createElement('div');
    let prueba =  document.getElementById('prueba')
    div2.innerText =  await String(response)
    await prueba.append(div2)
     
    }
    catch{

    }
}
getHands()

