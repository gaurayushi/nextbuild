const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function checkUsername(username) {
  try {
    const response = await fetch(`${BASE_URL}/users/check-username?username=${username}`);
    const data = await response.json();
    return data.available;
  } catch (error) {
    console.error("Username check failed:", error);
    return false;
  }
}

export async function fetchCountries() {
  const res = await fetch(`${BASE_URL}/location/countries`);
  return res.json();
}

export async function fetchStates(countryId) {
  const res = await fetch(`${BASE_URL}/location/states/${countryId}`);
  return res.json();
}

export async function fetchCities(stateId) {
  const res = await fetch(`${BASE_URL}/location/cities/${stateId}`);
  return res.json();
}

export async function submitUser(formData) {
  try {
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    const response = await fetch(`${BASE_URL}/users/create`, {
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
