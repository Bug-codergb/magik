import {FC, ReactNode, useState, useImperativeHandle, forwardRef, useRef, useEffect} from "react";
import {Modal} from "antd";
import Cropper from 'cropperjs';
interface IProps{
  aspectRatio:number,
  confirm?:(arg:any)=>void
}
const UploadFile:FC<IProps>=forwardRef((props,propsRef):ReactNode=>{
  const { aspectRatio,confirm } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file,setFile] = useState<File|null>(null);
  const showModal = (file?:File) => {
    setIsModalOpen(true);
    file && setFile(file);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    try{
      const ret = await getCropperFile();
      confirm && confirm(ret);
    }catch (e) {
      confirm && confirm(null);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useImperativeHandle(propsRef,()=>{
    return {
      showModal
    }
  })

  const imgRef = useRef();
  const [cropper, setCropper] = useState<Cropper>();
  useEffect(()=>{
    if(imgRef.current){
      initCropper();
    }
  },[isModalOpen,imgRef.current])
  const initCropper = ()=>{
    const url = file && URL.createObjectURL(file);
    const cropperContainer = imgRef.current && new Cropper(imgRef.current, {
      ready: function () {
        console.log('ready');
      },
      dragMode: 'move',
      aspectRatio,
      viewMode: 1,
      background: false,
      zoomable: false,
      preview: '.small'
    });
    setCropper(cropperContainer);
    cropperContainer?.replace(url);
  }
  const getCropperFile = async () => {
    return await new Promise((resolve, reject) => {
      if (cropper) {
        const canvasFile = cropper.getCroppedCanvas({
          imageSmoothingQuality: 'high',
          width: 300,
          imageSmoothingEnabled: false,
          fillColor: '#fff'
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
        reject(new Error('cropper 不存在'));
      }
    });
  };
  return <Modal title={"文件上传"} maskClosable={false} open={isModalOpen} width={750} onOk={handleOk} onCancel={handleCancel}>
    <div className={"h-96 w-full flex items-center overflow-hidden"}>
      <div className={"flex-1 h-full"}>
        <img ref={imgRef} className={"w-full"}/>
      </div>
      <div className={"preview-img flex-1 h-full flex justify-center items-center"}>
        <div className={"small overflow-hidden"}></div>
      </div>
    </div>
  </Modal>
})
export default UploadFile;
