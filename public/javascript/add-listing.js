async function newFormHandler(event) {
  event.preventDefault();

  const item = document.querySelector('input[name="listing-item"]').value;
  const description = document.querySelector(
    'textarea[name="listing-description"]'
  ).value;
  const price = document.querySelector('input[name="listing-price"]').value;
  const category_id = document.querySelector(
    'select[name="categoryType"]'
  ).value;

  const response = await fetch(`/api/listings`, {
    method: 'POST',
    body: JSON.stringify({
      item,
      description,
      price,
      category_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    console.log(response.statusText);
    alert('Please fill out all fields.');
  }
}

document
  .querySelector('.new-listing-form')
  .addEventListener('submit', newFormHandler);
