import axios from 'axios';


const API_URL_STRAPI = 'http://localhost:1337/api' 
const API_TOKEN_STRAPI = 'ce4931a30dffb251135f6db3af0b035d0566c207a475f3748fc10eb31763ee0bfcd5a9ab58341bdfef984915136d182969282974a5b7d7075027d55ea4e3c525f031b6f4ac75355b6aca361d4aa8ee616da96a97a0386e9760c24acc6ddbe348c3360aed70f8f38705e08024f6e562dc36b58960ce2965a4473621cbbee1030f';


export const fetchBlogs = async () => {
    try {
        const response = await axios.get(`${API_URL_STRAPI}/articles?populate=*`, {
            headers: {
              Authorization: `Bearer ${API_TOKEN_STRAPI}`,
            },
          });
        return response.data;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
    }


export const fetchBlogBySlug = async (slug) => {
    try {
        const response = await axios.get(
        `${API_URL_STRAPI}/articles?filters[slug][$eq]=${slug}&populate=*`,
        {
            headers: {
            Authorization: `Bearer ${API_TOKEN_STRAPI}`,
            },
        }
        );
    
        const articles = response?.data?.data;
    
        // Pastikan kita return objek blog (bukan array)
        if (Array.isArray(articles) && articles.length > 0) {
        return articles[0];
        } else {
        throw new Error("Blog tidak ditemukan.");
        }
    } catch (error) {
        console.error("Gagal mengambil blog berdasarkan slug:", error);
        throw error;
    }
    };
      

