const message = (message: string, type: string = "warning", title?: string) => {
  ElNotification.closeAll();
  ElNotification({
    title: "",
    message,
    type,
    position: "bottom-left"
  });
};
export default message;
