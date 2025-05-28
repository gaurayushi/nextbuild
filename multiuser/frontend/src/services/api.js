const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
  try {
    const res = await fetch(`${BASE_URL}/location/countries`);
    return res.json();
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return [];
  }
}

export async function fetchStates(countryId) {
  try {
    const res = await fetch(`${BASE_URL}/location/states/${countryId}`);
    return res.json();
  } catch (error) {
    console.error("Failed to fetch states:", error);
    return [];
  }
}

export async function fetchCities(stateId) {
  try {
    const res = await fetch(`${BASE_URL}/location/cities/${stateId}`);
    return res.json();
  } catch (error) {
    console.error("Failed to fetch cities:", error);
    return [];
  }
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
