package com.magik.service.upload;

import com.magik.bean.Upload;
import com.magik.mapper.upload.UploadMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UploadService {
  @Autowired
  UploadMapper uploadMapper;
  public int uploadFile(Upload upload){
    return uploadMapper.uploadFile(upload);
  }
}
