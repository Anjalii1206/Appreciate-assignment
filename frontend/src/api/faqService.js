import axios from "axios";

const API_URL = "https://fruit-ai-15zg.onrender.com/faqs";

export const getAllFAQs = () => axios.get(API_URL);
export const getFAQById = (id) => axios.get(`${API_URL}${id}/`);
export const createFAQ = (faq) => axios.post(API_URL, faq);
export const updateFAQ = (id, faq) => axios.put(`${API_URL}${id}/`, faq);
export const deleteFAQ = (id) => axios.delete(`${API_URL}${id}/`);
