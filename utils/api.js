import axios from 'axios';

const API_BASE_URL = 'https://demo2.officebase.net/api';  // Update with your backend API URL

// Request interceptor to add the token to the request headers
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle authentication errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      localStorage.removeItem('token');
      // Redirect to login page or show a modal, etc.
    }
    return Promise.reject(error);
  }
);

export const fetchCompanies = async (companyType) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies/?company_type=${companyType}`);
    console.log(`response: ${response}`)
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    return [];
  }
};

export const fetchAllCoursesByCategory = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses/?category=${categoryId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses by category:', error);
    return [];
  }
};

export const fetchCategoryById = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${categoryId}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories/`);
    const categories = await Promise.all(
      response.data.map(async (category) => {
        const coursesResponse = await axios.get(
          `${API_BASE_URL}/courses/?category=${category.id}&is_popular=true`
        );
        return {
          ...category,
          courses: coursesResponse.data,
        };
      })
    );
    return categories;
  } catch (error) {
    console.error('Error fetching categories and courses:', error);
    return [];
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await api.post('/signup', { name, email, password});
    console.log('response: ', response)
    return response.data;
  }  catch (error) {
    if (error.response && error.response.data) {
      const errorData = error.response.data;

      // Check if the error data is already an object
      if (typeof errorData === 'object' && errorData !== null) {
        throw errorData;
      } else {
        // If the error data is not an object, try parsing it as JSON
        try {
          throw JSON.parse(errorData);
        } catch (e) {
          // If parsing fails, throw the original error data
          throw errorData;
        }
      }
    } else {
      throw error;
    }
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    console.log('token: ', response.data.token)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    await api.post('/logout');
    localStorage.removeItem('token');
  } catch (error) {
    throw error.response.data;
  }
};

export const getUser = async () => {
  try {
    const response = await api.get('/user');
    console.log(response)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const fetchYouTubeVideo = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/youtube-videos/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching YouTube video:', error);
    throw error;
  }
};

export const fetchPopularCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories/?is_popular=true`);
      return response.data;
    } catch (error) {
      console.error('Error fetching popular categories:', error);
      throw error;
    }
  };
  
export const fetchCourseCategory = async (category_id)=>{
    try{
      
    }catch(error) {
      throw(error);
    }
};
export const fetchPopularCourses = async (categoryId = null) => {
    try {
      const url = categoryId
        ? `${API_BASE_URL}/course/?category=${categoryId}`
        : `${API_BASE_URL}/courses/popular/`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching popular courses:', error);
      throw error;
    }
  };

  export const fetchAllCategoriesWithCourses = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/all_categories/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching all categories with courses:', error);
      return [];
    }
  };