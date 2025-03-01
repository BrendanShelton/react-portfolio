require("dotenv").config();
const token = process.env.ACCESS_TOKEN;

if (!token) {
  throw new Error("ACCESS_TOKEN not found in environment variables.");
}



// GitHub API endpoint for user repositories
const url = "https://api.github.com/user/repos";

// Headers for authentication and API version
const headers = {
  "Authorization": `token ${token}`,
  "Accept": "application/vnd.github.v3+json"
};

// Function to fetch repositories
async function getRepositories() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const repos = await response.json();
    return repos
    // Loop through and display repository info
    // repos.forEach(repo => {
    // //   console.log(`Repo Name: ${repo.name}`);
    // //   console.log(`URL: ${repo.html_url}`);
    // //   console.log(`Description: ${repo.description || "No description"}`);
    //     console.log(repo)
    //   console.log("------------------------");
    // });

  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
}

// Call the function
console.log(
getRepositories());

export default getRepositories