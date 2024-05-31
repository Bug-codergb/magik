package com.magik.controller.upload;

import com.magik.bean.Upload;
import com.magik.constant.Host;
import com.magik.dto.file.FileDTO;
import com.magik.result.R;
import com.magik.service.upload.UploadService;
import com.magik.utils.FileUniqueName;
import io.minio.*;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/file")
public class UploadController {
  @Autowired
  UploadService uploadService;
  @Resource
  private MinioClient minioClient;
  @PostMapping("/upload")
  public R<List<FileDTO>> uploadFile(@RequestParam("file") List<MultipartFile> fileList,
                                     @RequestParam("desc") List<String> descList,
                                     @RequestParam("warn") List<String> warnList) throws Exception{
    List<String> urlList= new ArrayList<>();
    List<FileDTO> fileDTOList = new ArrayList<>();
    for(int i=0;i<fileList.size();i++){
      MultipartFile file = fileList.get(i);
      String fileType = file.getContentType().substring(0,file.getContentType().indexOf("/"));
      String filename = new FileUniqueName().getFileUniqueName(file.getOriginalFilename());


      Base64.Encoder eNcoder = Base64.getEncoder();
      byte [] textByte = fileType.getBytes("UTF-8");
      String text = eNcoder.encodeToString(textByte);

      fileType = text+"gb";
      MessageDigest md5 = MessageDigest.getInstance("MD5");
      md5.update(fileType.getBytes());

      byte[] bytes = md5.digest();
      BigInteger bigInteger = new BigInteger(1,bytes);
      String result = bigInteger.toString(16);
      while (result.length() < 32){
        result ="0" +result;
      }
      fileType = result;

      boolean isExist = minioClient.bucketExists(BucketExistsArgs.builder().bucket(fileType).build());
      if(!isExist){
        minioClient.makeBucket(MakeBucketArgs.builder().bucket(fileType).build());
        String p = "{\"Statement\":[{\"Sid\":\"PublicRead\",\"Action\":[\"s3:GetObject\"],\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":[\"arn:aws:s3:::"+fileType+"/*\"]}],\"Version\":\"2012-10-17\"}";
        minioClient.setBucketPolicy(SetBucketPolicyArgs.builder()
                .bucket(fileType)
                .config(p).build());
      }
      ObjectWriteResponse objectWriteResponse = minioClient.putObject(PutObjectArgs.builder()
              .bucket(fileType)
              .object(filename)
              .contentType(file.getContentType())
              .stream(file.getInputStream(),file.getSize(),-1).build());


      String desc = i > descList.size()-1 ? "" : descList.get(i);
      String warn = i > warnList.size()-1 ? "" : warnList.get(i);

      Upload uploadFile = new Upload();
      uploadFile.setId(new Date().getTime()+"");
      uploadFile.setOriginalname(file.getOriginalFilename());
      uploadFile.setSize(file.getSize()+"");
      uploadFile.setFilename(filename);
      uploadFile.setDescription(desc);
      uploadFile.setWarn(warn);
      uploadFile.setUrl(Host.MINIO_HOST.getHOST()+"/"+fileType+"/"+filename);
      uploadService.uploadFile(uploadFile);
      urlList.add(uploadFile.getUrl());

      FileDTO fileDTO = new FileDTO();
      fileDTO.setId(uploadFile.getId());
      fileDTO.setUrl(uploadFile.getUrl());
      fileDTOList.add(fileDTO);
    }
    return R.ok(fileDTOList);
  }
}
