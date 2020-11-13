export const exttractImgs = (item) => {
  return {
    id: item.id,
    img: item.urls.small,
    downloadImg: item.links.download,
    name: item.user.name,
    userImg: item.user.profile_image.small
  };
};
