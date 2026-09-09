export const CONTACT_CONFIG = {
  phone: "+55 16 99279-2142",
  phoneFormatted: "(16) 99279-2142",
  phoneRaw: "5516992792142",
  email: "contato@clinicmanager.com.br",
  getWhatsAppUrl: (message?: string) => {
    const baseUrl = "https://wa.me/5516992792142";
    if (!message) return baseUrl;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  },
};
