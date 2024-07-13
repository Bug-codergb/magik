package com.magik.mapper.moment;

import com.magik.bean.Moment;
import com.magik.bean.MomentFile;
import com.magik.bean.Upload;
import com.magik.dto.moment.MomentDTO;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface MomentMapper {
  public int createMoment(MomentDTO moment);
  public int addFileToMoment(List<MomentFile> list);
  public List<Moment> getAllMoment(Integer page,Integer limit);
  public List<Upload> getMomentFile(@Param("id") String id);
  public int deleteMoment(@Param("id") String id);
}
