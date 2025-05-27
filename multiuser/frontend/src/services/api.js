export async function checkUsername(username) {
  try {
    const response = await fetch(`http://localhost:5000/api/users/check-username?username=${username}`);
    const data = await response.json();
    return data.available;
  } catch (error) {
    console.error("Username check failed:", error);
    return false;
  }
}

export async function fetchCountries() {
  const res = await fetch("http://localhost:5000/api/location/countries");
  return res.json();
}

export async function fetchStates(countryId) {
  const res = await fetch(`http://localhost:5000/api/location/states/${countryId}`);
  return res.json();
}

export async function fetchCities(stateId) {
  const res = await fetch(`http://localhost:5000/api/location/cities/${stateId}`);
  return res.json();
}

export async function submitUser(formData) {
  try {
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    const response = await fetch("http://localhost:5000/api/users/create", {
      method: "POST",
      body: form,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Submit error:", error);
    return null;
  }
}
