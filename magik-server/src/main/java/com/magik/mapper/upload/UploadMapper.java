package com.magik.mapper.upload;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.magik.bean.Upload;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface UploadMapper extends BaseMapper<Upload> {
  public int uploadFile(Upload upload);
  public Upload getFileDetail(@Param("id") String id);
  public String getFileUrl(@Param("id") String id);
}
