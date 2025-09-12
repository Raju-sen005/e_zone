const cloudinary = require("cloudinary").v2;
const envConfig = require("../config/env.config");

cloudinary.config({
    cloud_name: envConfig.CLOUDINARY_NAME,
    api_key: envConfig.CLOUDINARY_API_KEY,
    api_secret: envConfig.CLOUDINARY_API_SECRET,
  });

const uploadImage = async (imageBuffer, folder) => { 
  const base64String = imageBuffer.toString("base64");
  const dataURI = `data:image/jpeg;base64,${base64String}`;

  // Upload an image
  const result = await cloudinary.uploader
    .upload(dataURI, {
      folder,
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("result", result);

  if (!result || !result.secure_url) {
    throw new Error("Invalid Cloudinary response");
  }

  return {
    public_id: result?.public_id,
    url: result?.secure_url,
  };
};

module.exports = uploadImage;
