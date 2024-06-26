const submitBtn = document.getElementById('Hiii');

submitBtn.addEventListener('click', async function(){

  const name = document.getElementById('name_check').value;

  let result;

  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML = 'Checking gay level for ' + name + '...';

  await sleep(Math.random() * 2000 + 2000);

  if(name === 'Bao Anh' || name === 'Banh' || name === 'banh' || name === 'Nhan' || name === 'nhan' || name === 'Nhân' || name === 'nhân' || name === 'Dinh anh' || name === 'dinh anh' || name === 'danh' || name === 'anh' || name === 'Hoang' || name === 'hoang' || name === 'hoàng' || name === 'Hoàng'){
    result = '100%';
  }
  else {
    result = Math.floor(Math.random() * 100) + '%'; 
  }
  if (name === 'Thang' || name === 'Thắng' || name === 'thang') {
    result = '0%';
  }

    resultDiv.innerHTML = 'Gay level result: ' + result;
    let body = document.getElementById('booooody')
    if (result === '100%'){
        body.style.backgroundImage = "url('pictures/a3e.jpg')"    
    }
    else if (result === '0%'){
        body.style.backgroundImage = "url('pictures/chad.jpg')"
    }
    else{
        body.style.backgroundImage = "url('pictures/gay.jpg')"
    }
});

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
