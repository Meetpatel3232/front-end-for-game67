import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (email, password) => {
  try {
    const response = await API.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log("Login error:", error.response?.data);

    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};
export const registerUser = async (gameId, email, password) => {
  try {
    const response = await API.post("/auth/register", {
      name: gameId,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log("Register error:", error.response?.data);

    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
    };
  }
};

export const getGames = async (gamename, Gametype) => {
  try {
    const response = await API.get("/game/getGame", {
      params: {
        gamename,
        Gametype,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Get games error:", error.response?.data);

    return {
      success: false,
      message: error.response?.data?.message || "Failed to get games",
    };
  }
};

export const getGameById = async (id) => {
  try {
    const response = await API.get(`/game/${id}`);

    return response.data;
  } catch (error) {
    console.log("Get game error:", error.response?.data);

    return {
      success: false,
      message: error.response?.data?.message || "Failed to get game",
    };
  }
};


export const getComments = async (gameId) => {
  try {
    const response = await API.get(`/getComments/${gameId}`);
    return response.data;
  } catch (error) {
    console.log("Get comments error:", error.response?.data);
    return null;
  }
};

export const addComment = async (formData) => {
  try {
    const response = await API.post("/addComments", formData);
    return response.data;
  } catch (error) {
    console.log("Add comment error:", error.response?.data);
    return null;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await API.delete(`/deleteComments/${commentId}`);
    return response.data;
  } catch (error) {
    console.log("Delete comment error:", error.response?.data);
    return null;
  }
};


export const addReview = async (gameId, review) => {
    try {
        const response = await API.post(
            `/addReview/${gameId}/${review}`
        );

        return response.data;

    } catch (error) {
        console.log(
            "Add review error:",
            error.response?.data
        );

        return null;
    }
};


export const getReviews = async (gameId) => {
    try {
        const response = await API.get(
            `/getReviews/${gameId}`
        );

        return response.data;

    } catch (error) {
        console.log(
            "Get reviews error:",
            error.response?.data
        );

        return null;
    }
};

export default API;