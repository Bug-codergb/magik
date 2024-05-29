export default async (cropper?: any, realWidth: number = 500, file?: File): Promise<any> => {
  return await new Promise((resolve, reject) => {
    if (cropper) {
      const canvasFile = cropper.getCroppedCanvas({
        imageSmoothingQuality: "high",
        width: realWidth,
        imageSmoothingEnabled: false,
        fillColor: "#fff"
      });
      canvasFile.toBlob((blob: Blob | null) => {
        if (blob && file) {
          const cropperFile = new File([blob], file.name, {
            type: file.type
          });
          resolve(cropperFile);
        } else {
          resolve(null);
        }
      });
    } else {
      reject(new Error("cropper 不存在"));
    }
  });
};
