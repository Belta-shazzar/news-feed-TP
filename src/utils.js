import sanity from "./client";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanity);

export const createUrl = (source, width = 300, height = 300) => {
  return builder.image(source).width(width).height(height).url();
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const textToHTML = (text) => {
  return text.replace(/\n/g, "<br>")
}
