package com.magik.mapper.upload;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.magik.bean.Upload;
import org.apache.ibatis.annotations.Param;


public interface UploadMapper extends BaseMapper<Upload> {
  public int uploadFile(Upload upload);
}
