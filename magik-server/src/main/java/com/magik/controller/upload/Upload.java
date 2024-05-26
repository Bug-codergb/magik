package com.magik.controller.upload;

import com.magik.utils.FileUniqueName;
import io.minio.*;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/file")
public class Upload {
  @Resource
  private MinioClient minioClient;
  @PostMapping("/upload")
  public String uploadFile(@RequestBody MultipartFile file) throws Exception{
    String fileType = file.getContentType().substring(0,file.getContentType().indexOf("/"));
    String filename = new FileUniqueName().getFileUniqueName(file.getOriginalFilename());
    boolean isExist = minioClient.bucketExists(BucketExistsArgs.builder().bucket(fileType).build());
    if(!isExist){
      minioClient.makeBucket(MakeBucketArgs.builder().bucket(fileType).build());
     // String p = "{\"Statement\":[{\"Action\":[\"s3:GetBucketLocation\",\"s3:ListBucket\"],\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"arn:aws:s3:::video\"},{\"Action\":\"s3:GetObject\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Resource\":\"arn:aws:s3:::video/*\"}],\"Version\":\"2012-10-17\"}";
//      minioClient.setBucketPolicy(SetBucketPolicyArgs.builder()
//              .bucket(fileType)
//              .config(p).build());
    }
      ObjectWriteResponse objectWriteResponse = minioClient.putObject(PutObjectArgs.builder()
              .bucket(fileType)
              .object(filename)
              .contentType(fileType)
              .stream(file.getInputStream(),file.getSize(),-1).build());
    return "success";
  }
}
