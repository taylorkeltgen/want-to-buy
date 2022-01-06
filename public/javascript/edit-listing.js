async function editFormHandler(event) {
  event.preventDefault();

  const description = document
    .querySelector('input[name="listing-description"]')
    .value.trim();
  const price = document
    .querySelector('input[name="listing-price"]')
    .value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/listings/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      description,
      price,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/listings/${id}`);
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.edit-listing-form')
  .addEventListener('submit', editFormHandler);
